import RsvpForm from "./RsvpForm";

export default function RsvpSection() {
  return (
    <section id="kayit" className="bg-background py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Katılım
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy">
          Katılımcı Kaydı
        </h2>
        <p className="text-foreground/60 mt-3 text-sm sm:text-base">
          Yerinizi ayırtmak için aşağıdaki formu doldurun.
        </p>
      </div>
      <RsvpForm />
    </section>
  );
}
