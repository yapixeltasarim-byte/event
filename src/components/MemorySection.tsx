import MemoryAlbum from "./MemoryAlbum";

export default function MemorySection() {
  return (
    <section id="anilar" className="bg-navy/[0.03] py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Hatıralar
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy">
          Anı Albümü
        </h2>
        <p className="text-foreground/60 mt-3 text-sm sm:text-base">
          Yolculuktan fotoğraf, video veya kısa bir not bırakın.
        </p>
      </div>
      <MemoryAlbum />
    </section>
  );
}
