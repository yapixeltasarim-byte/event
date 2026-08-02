"use client";

import { useState } from "react";

export default function PromoVideo() {
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <video
      src="/videos/tanitim.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setErrored(true)}
    />
  );
}
