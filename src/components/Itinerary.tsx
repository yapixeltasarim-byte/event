import type { SiteConfig } from "@/lib/types";

export default function Itinerary({ config }: { config: SiteConfig }) {
  return (
    <section id="program" className="bg-background py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
            {config.programEyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy">
            {config.programTitle}
          </h2>
          <p className="text-foreground/60 mt-3 text-sm sm:text-base">
            {config.programSubtitle}
          </p>
        </div>

        <ol className="relative border-l border-gold/50 ml-3 sm:ml-6 space-y-8">
          {config.program.map((stop, index) => (
            <li key={index} className="ml-6 sm:ml-8">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-gold ring-4 ring-background" />
              <div className="card-frame rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  {stop.dayLabel && (
                    <span className="text-xs font-medium text-teal tracking-wide">
                      {stop.dayLabel}
                    </span>
                  )}
                  <span className="text-xs text-gold font-medium ml-auto">
                    {stop.time}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-navy">{stop.title}</h3>
                <p className="text-sm text-foreground/60 mb-2">{stop.subtitle}</p>
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
