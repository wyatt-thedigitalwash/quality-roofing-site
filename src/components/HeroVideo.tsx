'use client';

import { useEffect, useRef, useState } from 'react';
import { preload } from 'react-dom';
import { Pause, Play } from 'lucide-react';

const VIDEO_SRC =
  'https://media.thedigitalwash.com/quality-roofing-inc/QualityRoofingInc_Hero.m4v';
const POSTER_SRC = '/assets/quality-roofing-hero-poster.webp';

/* Decorative background video. Fills its positioned parent. Stays on the poster for
   visitors who prefer reduced motion, and when the browser blocks autoplay. */
export default function HeroVideo() {
  preload(POSTER_SRC, { as: 'image', fetchPriority: 'high' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked, for example iOS Low Power Mode. The poster remains visible.
    });
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        aria-hidden="true"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        className="absolute right-4 bottom-4 z-20 flex h-10 w-10 after:absolute after:-inset-[2px] after:content-[''] items-center justify-center rounded-full bg-[#252525]/75 text-white transition-colors duration-300 hover:bg-[#252525] sm:right-6 lg:right-8"
      >
        {isPlaying ? (
          <Pause size={16} aria-hidden="true" />
        ) : (
          <Play size={16} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
