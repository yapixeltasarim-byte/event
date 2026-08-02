import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "rsvps.json");

type Rsvp = {
  id: string;
  name: string;
  phone: string;
  email: string;
  guestCount: number;
  note: string;
  createdAt: string;
};

async function readRsvps(): Promise<Rsvp[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeRsvps(entries: Rsvp[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const guestCount = Number(body.guestCount ?? 1);
  const note = String(body.note ?? "").trim();

  if (!name || !phone || !guestCount || guestCount < 1) {
    return NextResponse.json(
      { error: "İsim, telefon ve kişi sayısı zorunludur." },
      { status: 400 }
    );
  }

  const entries = await readRsvps();
  const entry: Rsvp = {
    id: crypto.randomUUID(),
    name,
    phone,
    email,
    guestCount,
    note,
    createdAt: new Date().toISOString(),
  };
  entries.push(entry);
  await writeRsvps(entries);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const entries = await readRsvps();
  return NextResponse.json({ count: entries.length });
}
