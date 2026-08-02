import { eventConfig } from "@/lib/event-config";

export default function LocationSection() {
  const { departurePort } = eventConfig;
  const mapQuery = encodeURIComponent(departurePort.address);
  const embedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${departurePort.lat},${departurePort.lon}`
  )}`;

  return (
    <section id="konum" className="bg-navy text-cream py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-gold-light mb-3">
          Kalkış Noktası
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl mb-2">
          {departurePort.name}
        </h2>
        <p className="text-cream/70 text-sm sm:text-base mb-6">
          {departurePort.address}
        </p>

        <div className="card-frame rounded-xl overflow-hidden mb-6">
          <iframe
            title="Kalkış limanı haritası"
            src={embedSrc}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn inline-block rounded-full px-6 py-2.5 text-sm font-medium shadow-lg hover:brightness-105 transition"
        >
          Yol Tarifi Al
        </a>
      </div>
    </section>
  );
}
