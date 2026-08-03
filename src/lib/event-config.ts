import type { SiteConfig } from "./types";

export const eventConfig: SiteConfig = {
  eventName: "Ege & Yunan Adaları Cruise Turu",
  eventSubtitle: "İzmir çıkışlı 8 günlük unutulmaz bir deniz yolculuğu",
  organizer: "Batuhan Etkinlik ve Organizasyon",
  tagline: "M/V Aegean Star",
  startDate: "2026-09-12T18:00:00+03:00",
  endDate: "2026-09-19T09:00:00+03:00",
  heroVideoSrc: "/videos/tanitim.mp4",
  ctaProgramLabel: "Tur Programını Gör",
  ctaRsvpLabel: "Katılımcı Kaydı",

  programEyebrow: "Akış",
  programTitle: "Tur Programı",
  programSubtitle: "M/V Aegean Star ile 8 gün, 7 gece Ege & Yunan Adaları",
  program: [
    {
      dayLabel: "GÜN 1 · 12 Eylül",
      time: "16:00",
      title: "Gemiye Biniş & Kalkış",
      subtitle: "İzmir, Türkiye",
      description:
        "Alsancak Liman Terminali'nde check-in, karşılama kokteyli ve akşam saatlerinde İzmir Körfezi'nden ayrılış.",
      lat: 38.4423,
      lon: 27.1428,
    },
    {
      dayLabel: "GÜN 2 · 13 Eylül",
      time: "08:00",
      title: "Sisam Adası",
      subtitle: "Samos, Yunanistan",
      description:
        "Pisagor'un doğduğu ada. Vathy limanı, tarihi merkez ve şarap bağları gezisi.",
      lat: 37.7548,
      lon: 26.9776,
    },
    {
      dayLabel: "GÜN 3 · 14 Eylül",
      time: "09:00",
      title: "Miçkonos",
      subtitle: "Mykonos, Yunanistan",
      description:
        "Beyaz badanalı sokaklar, yel değirmenleri ve Little Venice'de öğleden sonra serbest zaman.",
      lat: 37.4467,
      lon: 25.3289,
    },
    {
      dayLabel: "GÜN 4 · 15 Eylül",
      time: "07:00",
      title: "Santorini",
      subtitle: "Santorini, Yunanistan",
      description:
        "Fira ve Oia'da gün batımı manzarası, kaldera turu ve volkanik sahiller.",
      lat: 36.3932,
      lon: 25.4615,
    },
    {
      dayLabel: "GÜN 5 · 16 Eylül",
      time: "08:00",
      title: "Girit Adası",
      subtitle: "Heraklion, Girit",
      description:
        "Knossos Sarayı ziyareti ve Girit'in geleneksel lezzetlerini tatma fırsatı.",
      lat: 35.3387,
      lon: 25.1442,
    },
    {
      dayLabel: "GÜN 6 · 17 Eylül",
      time: "08:00",
      title: "Rodos",
      subtitle: "Rhodes, Yunanistan",
      description:
        "Ortaçağ Şövalyeler Kenti'nde tarihi yürüyüş ve Lindos Akropolü gezisi (opsiyonel).",
      lat: 36.4349,
      lon: 28.2176,
    },
    {
      dayLabel: "GÜN 7 · 18 Eylül",
      time: "09:00",
      title: "İstanköy",
      subtitle: "Kos, Yunanistan",
      description:
        "Hipokrat'ın memleketi; antik agora, şato ve sahil şeridinde serbest zaman.",
      lat: 36.8933,
      lon: 27.2877,
    },
    {
      dayLabel: "GÜN 8 · 19 Eylül",
      time: "09:00",
      title: "İzmir'e Dönüş",
      subtitle: "İzmir, Türkiye",
      description:
        "Kahvaltının ardından Alsancak Liman Terminali'nde gemiden iniş ve vedalaşma.",
      lat: 38.4423,
      lon: 27.1428,
    },
  ],

  venueLabel: "Kalkış Noktası",
  venue: {
    name: "İzmir Alsancak Liman Terminali",
    address: "Alsancak Mahallesi, Liman Caddesi No:1, Konak/İzmir",
    lat: 38.4423,
    lon: 27.1428,
  },

  weatherTitle: "Rota Üzerindeki Hava Durumu",
  weatherSubtitle:
    "Şu anki hava durumu bilgileri. Yolculuk tarihine yaklaştıkça tahmin daha kesinleşecektir.",
  weatherLocations: [
    { label: "İzmir, Türkiye", lat: 38.4423, lon: 27.1428 },
    { label: "Samos, Yunanistan", lat: 37.7548, lon: 26.9776 },
    { label: "Mykonos, Yunanistan", lat: 37.4467, lon: 25.3289 },
    { label: "Santorini, Yunanistan", lat: 36.3932, lon: 25.4615 },
    { label: "Heraklion, Girit", lat: 35.3387, lon: 25.1442 },
    { label: "Rhodes, Yunanistan", lat: 36.4349, lon: 28.2176 },
    { label: "Kos, Yunanistan", lat: 36.8933, lon: 27.2877 },
  ],

  rsvpTitle: "Katılımcı Kaydı",
  rsvpSubtitle: "Yerinizi ayırtmak için aşağıdaki formu doldurun.",

  memoryTitle: "Anı Albümü",
  memorySubtitle: "Yolculuktan fotoğraf, video veya kısa bir not bırakın.",

  contact: {
    phone: "+90 555 123 45 67",
    email: "yapixeltasarim@gmail.com",
  },
};
