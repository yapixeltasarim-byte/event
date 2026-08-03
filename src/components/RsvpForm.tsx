"use client";

import { useState, FormEvent } from "react";
import { DEMO_MODE } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;

    if (DEMO_MODE) {
      setTimeout(() => {
        setStatus("success");
        form.reset();
      }, 500);
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      guestCount: data.get("guestCount"),
      note: data.get("note"),
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Kayıt gönderilemedi.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-frame rounded-xl p-8 text-center max-w-md mx-auto">
        <p className="font-heading text-xl text-navy mb-2">Kaydınız alındı!</p>
        <p className="text-sm text-foreground/70">
          Katılım talebiniz için teşekkür ederiz. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm text-teal underline"
        >
          Yeni bir kayıt daha ekle
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-frame rounded-xl p-6 sm:p-8 max-w-md mx-auto space-y-4"
    >
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="name">
          Ad Soyad *
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Adınız Soyadınız"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-navy mb-1" htmlFor="phone">
            Telefon *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="05xx xxx xx xx"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-navy mb-1" htmlFor="guestCount">
            Kişi Sayısı *
          </label>
          <input
            id="guestCount"
            name="guestCount"
            type="number"
            min={1}
            defaultValue={1}
            required
            className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="email">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="ornek@eposta.com"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-navy mb-1" htmlFor="note">
          Not
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          className="w-full rounded-lg border border-navy/15 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Eklemek istediğiniz bir bilgi varsa yazabilirsiniz"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="gold-btn w-full rounded-full px-6 py-2.5 text-sm font-medium shadow-lg hover:brightness-105 transition disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Katılım Kaydımı Gönder"}
      </button>
    </form>
  );
}
