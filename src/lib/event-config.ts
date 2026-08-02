export type ItineraryStop = {
  day: number;
  date: string; // ISO date
  title: string;
  location: string;
  description: string;
  lat: number;
  lon: number;
  time: string;
};

export type EventConfig = {
  eventName: string;
  eventSubtitle: string;
  organizer: string;
  shipName: string;
  startDate: string; // ISO datetime
  endDate: string; // ISO datetime
  departurePort: {
    name: string;
    address: string;
    lat: number;
    lon: number;
  };
  contact: {
    phone: string;
    email: string;
  };
  itinerary: ItineraryStop[];
};

export const eventConfig: EventConfig = {
  eventName: "Ege & Yunan Adaları Cruise Turu",
  eventSubtitle: "İzmir çıkışlı 8 günlük unutulmaz bir deniz yolculuğu",
  organizer: "Batuhan Etkinlik ve Organizasyon",
  shipName: "M/V Aegean Star",
  startDate: "2026-09-12T18:00:00+03:00",
  endDate: "2026-09-19T09:00:00+03:00",
  departurePort: {
    name: "İzmir Alsancak Liman Terminali",
    address: "Alsancak Mahallesi, Liman Caddesi No:1, Konak/İzmir",
    lat: 38.4423,
    lon: 27.1428,
  },
  contact: {
    phone: "+90 555 123 45 67",
    email: "yapixeltasarim@gmail.com",
  },
  itinerary: [
    {
      day: 1,
      date: "2026-09-12",
      time: "16:00",
      title: "Gemiye Biniş & Kalkış",
      location: "İzmir, Türkiye",
      description:
        "Alsancak Liman Terminali'nde check-in, karşılama kokteyli ve akşam saatlerinde İzmir Körfezi'nden ayrılış.",
      lat: 38.4423,
      lon: 27.1428,
    },
    {
      day: 2,
      date: "2026-09-13",
      time: "08:00",
      title: "Sisam Adası",
      location: "Samos, Yunanistan",
      description:
        "Pisagor'un doğduğu ada. Vathy limanı, tarihi merkez ve şarap bağları gezisi.",
      lat: 37.7548,
      lon: 26.9776,
    },
    {
      day: 3,
      date: "2026-09-14",
      time: "09:00",
      title: "Miçkonos",
      location: "Mykonos, Yunanistan",
      description:
        "Beyaz badanalı sokaklar, yel değirmenleri ve Little Venice'de öğleden sonra serbest zaman.",
      lat: 37.4467,
      lon: 25.3289,
    },
    {
      day: 4,
      date: "2026-09-15",
      time: "07:00",
      title: "Santorini",
      location: "Santorini, Yunanistan",
      description:
        "Fira ve Oia'da gün batımı manzarası, kaldera turu ve volkanik sahiller.",
      lat: 36.3932,
      lon: 25.4615,
    },
    {
      day: 5,
      date: "2026-09-16",
      time: "08:00",
      title: "Girit Adası",
      location: "Heraklion, Girit",
      description:
        "Knossos Sarayı ziyareti ve Girit'in geleneksel lezzetlerini tatma fırsatı.",
      lat: 35.3387,
      lon: 25.1442,
    },
    {
      day: 6,
      date: "2026-09-17",
      time: "08:00",
      title: "Rodos",
      location: "Rhodes, Yunanistan",
      description:
        "Ortaçağ Şövalyeler Kenti'nde tarihi yürüyüş ve Lindos Akropolü gezisi (opsiyonel).",
      lat: 36.4349,
      lon: 28.2176,
    },
    {
      day: 7,
      date: "2026-09-18",
      time: "09:00",
      title: "İstanköy",
      location: "Kos, Yunanistan",
      description:
        "Hipokrat'ın memleketi; antik agora, şato ve sahil şeridinde serbest zaman.",
      lat: 36.8933,
      lon: 27.2877,
    },
    {
      day: 8,
      date: "2026-09-19",
      time: "09:00",
      title: "İzmir'e Dönüş",
      location: "İzmir, Türkiye",
      description:
        "Kahvaltının ardından Alsancak Liman Terminali'nde gemiden iniş ve vedalaşma.",
      lat: 38.4423,
      lon: 27.1428,
    },
  ],
};
