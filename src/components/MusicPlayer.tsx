"use client";

import { useEffect, useRef, useState } from "react";

type AmbientHandle = {
  stop: () => void;
};

function startOceanAmbience(ctx: AudioContext): AmbientHandle {
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 450;

  const gain = ctx.createGain();
  gain.gain.value = 0.12;

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.09;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 0.06;
  lfo.connect(lfoGain);
  lfoGain.connect(gain.gain);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start();
  lfo.start();

  return {
    stop: () => {
      noise.stop();
      lfo.stop();
      ctx.close();
    },
  };
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientRef = useRef<AmbientHandle | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  async function handleToggle() {
    if (playing) {
      audioRef.current?.pause();
      ambientRef.current?.stop();
      ambientRef.current = null;
      setPlaying(false);
      return;
    }

    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setPlaying(true);
        return;
      } catch {
        // no uploaded music file yet — fall back to generated ambience below
      }
    }

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ambientRef.current = startOceanAmbience(new AudioCtx());
      setPlaying(true);
    } catch {
      // Web Audio not supported — silently do nothing
    }
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={playing ? "Sesi durdur" : "Sesi başlat"}
      title={playing ? "Sesi durdur" : "Fon sesini başlat"}
      className="fixed right-5 z-[60] h-12 w-12 rounded-full gold-btn shadow-lg flex items-center justify-center text-xl transition hover:brightness-105"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      {playing ? "🔊" : "🔈"}
    </button>
  );
}
