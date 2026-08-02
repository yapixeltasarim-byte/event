"use client";

import { useEffect, useState } from "react";
import { eventConfig } from "@/lib/event-config";
import { describeWeatherCode } from "@/lib/weather-codes";

type WeatherResult = {
  location: string;
  temp: number | null;
  code: number | null;
  loading: boolean;
  error: boolean;
};

function uniqueStops() {
  const seen = new Set<string>();
  return eventConfig.itinerary.filter((stop) => {
    if (seen.has(stop.location)) return false;
    seen.add(stop.location);
    return true;
  });
}

export default function WeatherSection() {
  const stops = uniqueStops();
  const [results, setResults] = useState<Record<string, WeatherResult>>(() =>
    Object.fromEntries(
      stops.map((s) => [
        s.location,
        { location: s.location, temp: null, code: null, loading: true, error: false },
      ])
    )
  );

  useEffect(() => {
    let cancelled = false;

    stops.forEach(async (stop) => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${stop.lat}&longitude=${stop.lon}&current=temperature_2m,weather_code&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("weather fetch failed");
        const body = await res.json();
        if (cancelled) return;
        setResults((prev) => ({
          ...prev,
          [stop.location]: {
            location: stop.location,
            temp: body.current?.temperature_2m ?? null,
            code: body.current?.weather_code ?? null,
            loading: false,
            error: false,
          },
        }));
      } catch {
        if (cancelled) return;
        setResults((prev) => ({
          ...prev,
          [stop.location]: {
            location: stop.location,
            temp: null,
            code: null,
            loading: false,
            error: true,
          },
        }));
      }
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hava" className="bg-background py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
            Güncel
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy">
            Rota Üzerindeki Hava Durumu
          </h2>
          <p className="text-foreground/60 mt-3 text-sm sm:text-base">
            Şu anki hava durumu bilgileri. Yolculuk tarihine yaklaştıkça tahmin daha kesinleşecektir.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stops.map((stop) => {
            const result = results[stop.location];
            const info = result?.code !== null && result?.code !== undefined
              ? describeWeatherCode(result.code)
              : null;
            return (
              <div key={stop.location} className="card-frame rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-navy mb-2 truncate">
                  {stop.location}
                </p>
                {result?.loading ? (
                  <p className="text-xs text-foreground/40">Yükleniyor...</p>
                ) : result?.error ? (
                  <p className="text-xs text-foreground/40">Şu an alınamadı</p>
                ) : (
                  <>
                    <div className="text-2xl mb-1">{info?.icon}</div>
                    <p className="font-heading text-xl text-navy">
                      {Math.round(result?.temp ?? 0)}°C
                    </p>
                    <p className="text-[11px] text-foreground/60">{info?.label}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
