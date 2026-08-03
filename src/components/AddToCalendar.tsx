"use client";

import type { SiteConfig } from "@/lib/types";
import { buildGoogleCalendarUrl, buildICS, downloadICS } from "@/lib/ics";

export default function AddToCalendar({ config }: { config: SiteConfig }) {
  const eventDetails = {
    title: config.eventName,
    description: `${config.eventSubtitle}\n${config.venue.name}`,
    location: config.venue.address,
    start: config.startDate,
    end: config.endDate,
  };

  const handleDownloadICS = () => {
    const ics = buildICS(eventDetails);
    downloadICS(`${config.eventName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.ics`, ics);
  };

  const googleUrl = buildGoogleCalendarUrl(eventDetails);

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={handleDownloadICS}
        className="rounded-full px-5 py-2.5 text-sm font-medium border border-navy/20 text-navy hover:bg-navy/5 transition inline-flex items-center gap-2"
      >
        Apple / Samsung Takvime Ekle
      </button>
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-5 py-2.5 text-sm font-medium border border-navy/20 text-navy hover:bg-navy/5 transition inline-flex items-center gap-2"
      >
        Google Takvime Ekle
      </a>
    </div>
  );
}
