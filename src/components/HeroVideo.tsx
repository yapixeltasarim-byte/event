"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [errored, setErrored] = useState(false);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.play().catch(() => {});
    }
    setMuted(next);
  }

  if (errored) return null;

  return (
    <>
      <video
        ref={videoRef}
        src="/videos/tanitim.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
      <button
        onClick={toggleSound}
        aria-label={muted ? "Video sesini aç" : "Video sesini kapat"}
        title={muted ? "Video sesini aç" : "Video sesini kapat"}
        className="fixed right-5 z-[60] h-12 w-12 rounded-full gold-btn shadow-lg flex items-center justify-center text-xl transition hover:brightness-105"
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
      >
        {muted ? "🔈" : "🔊"}
      </button>
    </>
  );
}
