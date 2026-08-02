import AddToCalendar from "./AddToCalendar";

export default function CalendarSection() {
  return (
    <section className="bg-cream py-12 sm:py-16 px-6 border-y border-gold/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl text-navy mb-2">
          Tarihi Takviminize Ekleyin
        </h2>
        <p className="text-foreground/60 text-sm mb-6">
          Kalkış tarihini unutmamak için takviminize ekleyin.
        </p>
        <AddToCalendar />
      </div>
    </section>
  );
}
