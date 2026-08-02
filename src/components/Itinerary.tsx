import { eventConfig } from "@/lib/event-config";
import { formatDateTR } from "@/lib/format";

export default function Itinerary() {
  return (
    <section id="program" className="bg-background py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
            Akış
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy">
            Tur Programı
          </h2>
          <p className="text-foreground/60 mt-3 text-sm sm:text-base">
            {eventConfig.shipName} ile 8 gün, 7 gece Ege &amp; Yunan Adaları
          </p>
        </div>

        <ol className="relative border-l border-gold/50 ml-3 sm:ml-6 space-y-8">
          {eventConfig.itinerary.map((stop) => (
            <li key={stop.day} className="ml-6 sm:ml-8">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-gold ring-4 ring-background" />
              <div className="card-frame rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <span className="text-xs font-medium text-teal tracking-wide">
                    GÜN {stop.day} · {formatDateTR(stop.date, { month: "long", day: "numeric", year: undefined })}
                  </span>
                  <span className="text-xs text-gold font-medium">
                    {stop.time}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-navy">{stop.title}</h3>
                <p className="text-sm text-foreground/60 mb-2">{stop.location}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {stop.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
