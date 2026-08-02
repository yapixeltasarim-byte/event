import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "memories.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "memories");
const PUBLIC_PREFIX = "/uploads/memories";

const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "video/mp4": "mp4",
  "video/quicktime": "mov",
};

const MAX_SIZE = 25 * 1024 * 1024; // 25MB

type Memory = {
  id: string;
  url: string;
  type: "image" | "video";
  uploaderName: string;
  caption: string;
  createdAt: string;
};

async function readMemories(): Promise<Memory[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeMemories(entries: Memory[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function GET() {
  const entries = await readMemories();
  return NextResponse.json({
    memories: entries.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ),
  });
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const file = form.get("file");
  const uploaderName = String(form.get("uploaderName") ?? "").trim().slice(0, 80);
  const caption = String(form.get("caption") ?? "").trim().slice(0, 300);

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 400 });
  }

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) {
    return NextResponse.json(
      { error: "Sadece JPG, PNG, WEBP, GIF, MP4 veya MOV dosyaları yüklenebilir." },
      { status: 400 }
    );
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: "Dosya boyutu 25MB'ı aşamaz." },
      { status: 400 }
    );
  }

  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const id = crypto.randomUUID();
  const filename = `${id}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);

  const entries = await readMemories();
  const entry: Memory = {
    id,
    url: `${PUBLIC_PREFIX}/${filename}`,
    type: file.type.startsWith("video") ? "video" : "image",
    uploaderName: uploaderName || "Misafir",
    caption,
    createdAt: new Date().toISOString(),
  };
  entries.push(entry);
  await writeMemories(entries);

  return NextResponse.json({ ok: true, memory: entry });
}
