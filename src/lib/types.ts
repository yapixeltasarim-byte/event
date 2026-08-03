export type ProgramItem = {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  dayLabel?: string;
  lat: number;
  lon: number;
};

export type WeatherLocation = {
  label: string;
  lat: number;
  lon: number;
};

export type SiteConfig = {
  eventName: string;
  eventSubtitle: string;
  organizer: string;
  tagline: string;
  startDate: string;
  endDate: string;
  heroVideoSrc: string;
  ctaProgramLabel: string;
  ctaRsvpLabel: string;

  programEyebrow: string;
  programTitle: string;
  programSubtitle: string;
  program: ProgramItem[];

  venueLabel: string;
  venue: {
    name: string;
    address: string;
    lat: number;
    lon: number;
  };

  weatherTitle: string;
  weatherSubtitle: string;
  weatherLocations: WeatherLocation[];

  rsvpTitle: string;
  rsvpSubtitle: string;

  memoryTitle: string;
  memorySubtitle: string;

  contact: {
    phone: string;
    email: string;
  };
};
