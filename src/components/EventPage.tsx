import type { SiteConfig } from "@/lib/types";
import Hero from "./Hero";
import Itinerary from "./Itinerary";
import CalendarSection from "./CalendarSection";
import LocationSection from "./LocationSection";
import WeatherSection from "./WeatherSection";
import MemorySection from "./MemorySection";
import RsvpSection from "./RsvpSection";

export default function EventPage({ config }: { config: SiteConfig }) {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-col flex-1">
        <Hero config={config} />
        <Itinerary config={config} />
        <CalendarSection config={config} />
        <LocationSection config={config} />
        <WeatherSection config={config} />
        <MemorySection config={config} />
        <RsvpSection config={config} />
      </main>
      <footer className="bg-navy-deep text-cream/60 text-center text-xs py-6 px-6">
        <p>{config.organizer}</p>
        <p className="mt-1">
          İletişim: {config.contact.phone} · {config.contact.email}
        </p>
      </footer>
    </div>
  );
}
