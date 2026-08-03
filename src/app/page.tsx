import EventPage from "@/components/EventPage";
import { eventConfig } from "@/lib/event-config";

export default function Home() {
  return <EventPage config={eventConfig} />;
}
