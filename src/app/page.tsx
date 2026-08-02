import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Itinerary from "@/components/Itinerary";
import CalendarSection from "@/components/CalendarSection";
import LocationSection from "@/components/LocationSection";
import WeatherSection from "@/components/WeatherSection";
import MemorySection from "@/components/MemorySection";
import RsvpSection from "@/components/RsvpSection";
import MusicPlayer from "@/components/MusicPlayer";
import { eventConfig } from "@/lib/event-config";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex flex-col flex-1">
        <Hero />
        <Itinerary />
        <CalendarSection />
        <LocationSection />
        <WeatherSection />
        <MemorySection />
        <RsvpSection />
      </main>
      <footer className="bg-navy-deep text-cream/60 text-center text-xs py-6 px-6">
        <p>{eventConfig.organizer}</p>
        <p className="mt-1">
          İletişim: {eventConfig.contact.phone} · {eventConfig.contact.email}
        </p>
      </footer>
      <MusicPlayer />
    </div>
  );
}
