import type { SiteConfig } from "@/lib/types";
import MemoryAlbum from "./MemoryAlbum";

export default function MemorySection({ config }: { config: SiteConfig }) {
  return (
    <section id="anilar" className="bg-navy/[0.03] py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Hatıralar
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy">
          {config.memoryTitle}
        </h2>
        <p className="text-foreground/60 mt-3 text-sm sm:text-base">
          {config.memorySubtitle}
        </p>
      </div>
      <MemoryAlbum />
    </section>
  );
}
