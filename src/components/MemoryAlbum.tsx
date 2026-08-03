"use client";

import { useState, FormEvent } from "react";
import { DEMO_MODE } from "@/lib/config";

type Status = "idle" | "uploading" | "success" | "error";

export default function MemoryAlbum() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("file");
    if (!(file instanceof File) || file.size === 0) {
      setErrorMsg("Lütfen bir fotoğraf veya video seçin.");
      return;
    }

    setStatus("uploading");

    if (DEMO_MODE) {
      setTimeout(() => {
        form.reset();
        setStatus("success");
      }, 500);
      return;
    }

    try {
      const res = await fetch("/api/memories", { method: "POST", body: data });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Yükleme başarısız oldu.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-frame rounded-xl p-8 text-center max-w-md mx-auto">
        <p className="font-heading text-xl text-navy mb-2">Anınız kaydedildi!</p>
        <p className="text-sm text-foreground/70">
          Paylaştığınız için teşekkürler. Bu anı sadece organizasyon ekibiyle paylaşıldı.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-teal underline"
        >
          Başka bir anı daha paylaş
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-frame rounded-xl p-6 sm:p-8 max-w-md mx-auto grid gap-4"
    >
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="uploaderName">
          Adınız
        </label>
        <input
          id="uploaderName"
          name="uploaderName"
          className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Adınız Soyadınız"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="caption">
          Not
        </label>
        <input
          id="caption"
          name="caption"
          className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Kısa bir not bırakın"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="file">
          Fotoğraf / Video
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime"
          className="w-full text-sm"
        />
      </div>

      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "uploading"}
        className="gold-btn rounded-full px-6 py-2.5 text-sm font-medium shadow-lg hover:brightness-105 transition disabled:opacity-60"
      >
        {status === "uploading" ? "Yükleniyor..." : "Anı Yükle"}
      </button>
    </form>
  );
}
