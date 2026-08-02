"use client";

import { eventConfig } from "@/lib/event-config";
import { buildGoogleCalendarUrl, buildICS, downloadICS } from "@/lib/ics";

export default function AddToCalendar() {
  const eventDetails = {
    title: eventConfig.eventName,
    description: `${eventConfig.eventSubtitle}\n${eventConfig.shipName} ile hareket: ${eventConfig.departurePort.name}`,
    location: eventConfig.departurePort.address,
    start: eventConfig.startDate,
    end: eventConfig.endDate,
  };

  const handleDownloadICS = () => {
    const ics = buildICS(eventDetails);
    downloadICS("ege-cruise-turu.ics", ics);
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
