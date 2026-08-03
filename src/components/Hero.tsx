import { eventConfig } from "@/lib/event-config";
import { formatDateRangeTR } from "@/lib/format";
import Countdown from "./Countdown";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative overflow-hidden bg-navy text-cream min-h-[95vh] flex items-center"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/25 to-navy-deep/70" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center gap-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gold-light mb-4">
            {eventConfig.organizer}
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl leading-tight mb-4">
            {eventConfig.eventName}
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto mb-2">
            {eventConfig.eventSubtitle}
          </p>
          <p className="text-gold-light text-sm sm:text-base">
            {formatDateRangeTR(eventConfig.startDate, eventConfig.endDate)} ·{" "}
            {eventConfig.shipName}
          </p>
        </div>

        <Countdown target={eventConfig.startDate} />

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#program"
            className="gold-btn rounded-full px-6 py-2.5 text-sm font-medium shadow-lg hover:brightness-105 transition"
          >
            Tur Programını Gör
          </a>
          <a
            href="#kayit"
            className="rounded-full px-6 py-2.5 text-sm font-medium border border-gold-light/60 text-cream hover:bg-cream/10 transition"
          >
            Katılımcı Kaydı
          </a>
        </div>
      </div>

      <div className="wave-bg absolute bottom-0 left-0 right-0 h-10 opacity-70 z-10" />
    </section>
  );
}
