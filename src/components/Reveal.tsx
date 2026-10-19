import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-sm"} ${className}`}>
      {children}
    </div>
  );
}

/** Parallax image with smooth scroll transform and ping-pong video loop. */
export function ParallaxImage({ src, alt, video, className = "" }: { src: string; alt: string; video?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const on = () => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      setP(Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight)));
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Ping-pong video loop: plays forward to end, reverses smoothly to start
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let forward = true;
    let animId: number;

    const stepReverse = () => {
      if (!v) return;
      if (v.currentTime <= 0.08) {
        v.currentTime = 0;
        forward = true;
        v.play().catch(() => {});
      } else {
        v.currentTime = Math.max(0, v.currentTime - 0.04);
        animId = requestAnimationFrame(stepReverse);
      }
    };

    const onTimeUpdate = () => {
      if (forward && v.duration && v.currentTime >= v.duration - 0.08) {
        v.pause();
        forward = false;
        stepReverse();
      }
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", () => {
      v.pause();
      forward = false;
      stepReverse();
    });

    return () => {
      cancelAnimationFrame(animId);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [video]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {video ? (
        <video ref={videoRef} src={video} poster={src} aria-label={alt} autoPlay muted playsInline preload="auto"
          className="h-full w-full object-cover will-change-transform"
          style={{ transform: `translateY(${p * 40}px) scale(${1.12 - Math.abs(p) * 0.06})` }} />
      ) : (
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover will-change-transform animate-pingpong"
          style={{ transform: `translateY(${p * 40}px) scale(${1.12 - Math.abs(p) * 0.06})` }} />
      )}
    </div>
  );
}

/** Standalone video with ping-pong forward/backward looping */
export function PingPongVideo({
  src,
  poster,
  alt,
  className = "",
}: {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
}) {
  const vRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;

    let forward = true;
    let animId: number;

    const stepReverse = () => {
      if (!v) return;
      if (v.currentTime <= 0.08) {
        v.currentTime = 0;
        forward = true;
        v.play().catch(() => {});
      } else {
        v.currentTime = Math.max(0, v.currentTime - 0.04);
        animId = requestAnimationFrame(stepReverse);
      }
    };

    const onTimeUpdate = () => {
      if (forward && v.duration && v.currentTime >= v.duration - 0.08) {
        v.pause();
        forward = false;
        stepReverse();
      }
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", () => {
      v.pause();
      forward = false;
      stepReverse();
    });

    return () => {
      cancelAnimationFrame(animId);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [src]);

  return (
    <video
      ref={vRef}
      src={src}
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}

