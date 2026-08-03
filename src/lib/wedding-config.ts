import type { SiteConfig } from "./types";

export const weddingConfig: SiteConfig = {
  eventName: "Seda & Mehmet",
  eventSubtitle: "Sizi büyük günümüzde aramızda görmekten mutluluk duyarız",
  organizer: "Batuhan Etkinlik ve Organizasyon",
  tagline: "Mandarin Oriental Bodrum",
  startDate: "2026-09-12T19:00:00+03:00",
  endDate: "2026-09-12T23:59:00+03:00",
  heroVideoSrc: "/videos/dugun.mp4",
  ctaProgramLabel: "Düğün Programını Gör",
  ctaRsvpLabel: "Katılım Bildir",

  programEyebrow: "Akış",
  programTitle: "Düğün Programı",
  programSubtitle: "12 Eylül 2026 Cumartesi · Mandarin Oriental Bodrum",
  program: [
    {
      time: "19:00",
      title: "Karşılama Kokteyli",
      subtitle: "Mandarin Oriental Bodrum",
      description: "Misafirlerimizi bahçede kokteyl ile karşılıyoruz.",
      lat: 37.1167,
      lon: 27.3167,
    },
    {
      time: "19:30",
      title: "Nikah & Yemek",
      subtitle: "Mandarin Oriental Bodrum",
      description: "Nikah töreni ve ardından akşam yemeği.",
      lat: 37.1167,
      lon: 27.3167,
    },
    {
      time: "22:00",
      title: "Pasta & Eğlence",
      subtitle: "Mandarin Oriental Bodrum",
      description: "Pasta kesimi, ilk dans ve eğlenceye devam.",
      lat: 37.1167,
      lon: 27.3167,
    },
  ],

  venueLabel: "Düğün Yeri",
  venue: {
    name: "Mandarin Oriental Bodrum",
    address: "Paradise Bay, Göltürkbükü, Bodrum / Muğla",
    lat: 37.1167,
    lon: 27.3167,
  },

  weatherTitle: "Düğün Günü Hava Durumu",
  weatherSubtitle:
    "Şu anki hava durumu bilgileri. Düğün tarihine yaklaştıkça tahmin daha kesinleşecektir.",
  weatherLocations: [
    { label: "Göltürkbükü, Bodrum", lat: 37.1167, lon: 27.3167 },
  ],

  rsvpTitle: "Katılım Bildirin",
  rsvpSubtitle: "Sizi aramızda görmek için yerinizi ayırtmanızı rica ederiz.",

  memoryTitle: "Anı Albümü",
  memorySubtitle: "O günü birlikte örelim — fotoğraf, kısa video veya bir not bırakın.",

  contact: {
    phone: "+90 555 123 45 67",
    email: "yapixeltasarim@gmail.com",
  },
};
