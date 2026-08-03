import type { SiteConfig } from "@/lib/types";
import RsvpForm from "./RsvpForm";

export default function RsvpSection({ config }: { config: SiteConfig }) {
  return (
    <section id="kayit" className="bg-background py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Katılım
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy">
          {config.rsvpTitle}
        </h2>
        <p className="text-foreground/60 mt-3 text-sm sm:text-base">
          {config.rsvpSubtitle}
        </p>
      </div>
      <RsvpForm />
    </section>
  );
}
