import type { Metadata } from "next";
import EventPage from "@/components/EventPage";
import { weddingConfig } from "@/lib/wedding-config";

export const metadata: Metadata = {
  title: `${weddingConfig.eventName} | Davet Sitesi`,
  description: weddingConfig.eventSubtitle,
};

export default function Dugun() {
  return <EventPage config={weddingConfig} />;
}
