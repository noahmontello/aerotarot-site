"use client";

import { useEffect, useRef, useState } from "react";

const LAUNCH_KEY = "aerotarot-home-launch-seen";

export function HomeLaunchOverlay({
  onComplete,
  storageKey = LAUNCH_KEY,
}: {
  onComplete?: () => void;
  storageKey?: string;
}) {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [phase, setPhase] = useState<"checking" | "entering" | "exiting" | "hidden">(
    "checking",
  );
  const [cardsVisible, setCardsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasSeenLaunch = window.sessionStorage.getItem(storageKey) === "true";
    let skipTimer: number | null = null;

    if (reduceMotion || hasSeenLaunch) {
      skipTimer = window.setTimeout(() => setPhase("hidden"), 0);

      return () => {
        if (skipTimer !== null) {
          window.clearTimeout(skipTimer);
        }
      };
    }

    window.sessionStorage.setItem(storageKey, "true");

    const showTimer = window.setTimeout(() => setPhase("entering"), 0);
    const cardsTimer = window.setTimeout(() => setCardsVisible(true), 140);
    const titleTimer = window.setTimeout(() => setTitleVisible(true), 820);
    const subtitleTimer = window.setTimeout(() => setSubtitleVisible(true), 1180);
    const exitTimer = window.setTimeout(() => setPhase("exiting"), 3980);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 4480);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(cardsTimer);
      window.clearTimeout(titleTimer);
      window.clearTimeout(subtitleTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, [storageKey]);

  useEffect(() => {
    if (phase === "hidden") {
      onComplete?.();
    }
  }, [onComplete, phase]);

  useEffect(() => {
    const node = stackRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!node || reduceMotion) {
      return;
    }

    const updateFromPointer = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (event.clientX / innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / innerHeight - 0.5) * 2;

      node.style.setProperty("--launch-roll", `${normalizedX * 0.9}deg`);
      node.style.setProperty("--launch-pitch", `${normalizedY * -0.9}deg`);
      node.style.setProperty("--launch-shift-x", `${normalizedX * 4}px`);
      node.style.setProperty("--launch-shift-y", `${normalizedY * 4}px`);
    };

    const reset = () => {
      node.style.setProperty("--launch-roll", "0deg");
      node.style.setProperty("--launch-pitch", "0deg");
      node.style.setProperty("--launch-shift-x", "0px");
      node.style.setProperty("--launch-shift-y", "0px");
    };

    reset();
    window.addEventListener("pointermove", updateFromPointer, { passive: true });
    window.addEventListener("pointerleave", reset);

    return () => {
      window.removeEventListener("pointermove", updateFromPointer);
      window.removeEventListener("pointerleave", reset);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  const isExiting = phase === "exiting";
  const isVisible = phase === "checking" || phase === "entering";

  return (
    <div
      className={`home-launch-overlay ${isExiting ? "is-exiting" : isVisible ? "is-visible" : ""}`}
      aria-hidden="true"
    >
      <div className="home-launch-background">
        <div className="home-launch-aurora home-launch-aurora-left" />
        <div className="home-launch-aurora home-launch-aurora-right" />
        <div className="home-launch-stars">
          {launchStars.map((star, index) => (
            <span
              key={`${star.left}-${star.top}-${index}`}
              className="home-launch-star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: `${index * 180}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="home-launch-shell">
        <div
          ref={stackRef}
          className={`home-launch-stack ${cardsVisible ? "is-visible" : ""}`}
        >
          <div className="home-launch-glow" />
          <div className="home-launch-card home-launch-card-left">
            <CardFace variant="moon" />
          </div>
          <div className="home-launch-card home-launch-card-right">
            <CardFace variant="sun" />
          </div>
          <div className="home-launch-card home-launch-card-center">
            <CardFace variant="veil" center />
          </div>
        </div>

        <div className="home-launch-copy">
          <p
            className={`home-launch-title ${titleVisible ? "is-visible" : ""}`}
          >
            AeroTarot
          </p>
          <p
            className={`home-launch-subtitle ${subtitleVisible ? "is-visible" : ""}`}
          >
            Intuitive. Guidance. Reimagined.
          </p>
        </div>
      </div>
    </div>
  );
}

function CardFace({
  variant,
  center = false,
}: {
  variant: "moon" | "sun" | "veil";
  center?: boolean;
}) {
  return (
    <div className={`home-launch-face ${center ? "is-center" : ""}`}>
      <div className="home-launch-card-surface">
        <div className="home-launch-card-gloss" />
        <div className="home-launch-card-outline" />
        <div className="home-launch-card-edge home-launch-card-edge-top" />
        <div className="home-launch-card-edge home-launch-card-edge-bottom" />
        <div className={`home-launch-face-inner ${center ? "is-center" : ""}`}>
          <div className={`home-launch-glyph home-launch-glyph-${variant}`}>
            {center ? (
              <SparkGlyph />
            ) : variant === "moon" ? (
              <MoonGlyph />
            ) : variant === "sun" ? (
              <SunGlyph />
            ) : (
              <>
                <div className="home-launch-glyph-core" />
                <div className="home-launch-glyph-ring" />
              </>
            )}
          </div>
        </div>
        <div className="home-launch-face-sheen" />
        <div className="home-launch-card-sweep" />
      </div>
    </div>
  );
}

function MoonGlyph() {
  return (
    <svg viewBox="0 0 120 120" className="home-launch-symbol" aria-hidden="true">
      <circle cx="54" cy="60" r="22" className="home-launch-symbol-primary" />
      <circle cx="65" cy="54" r="22" className="home-launch-symbol-cutout" />
      <circle cx="78" cy="40" r="3.5" className="home-launch-symbol-star" />
      <circle cx="88" cy="54" r="2.6" className="home-launch-symbol-star" />
      <circle cx="74" cy="54" r="2.2" className="home-launch-symbol-star" />
    </svg>
  );
}

function SunGlyph() {
  return (
    <svg viewBox="0 0 120 120" className="home-launch-symbol" aria-hidden="true">
      <circle cx="60" cy="60" r="17" className="home-launch-symbol-primary" />
      <g className="home-launch-symbol-rays">
        <line x1="60" y1="24" x2="60" y2="36" />
        <line x1="60" y1="84" x2="60" y2="96" />
        <line x1="24" y1="60" x2="36" y2="60" />
        <line x1="84" y1="60" x2="96" y2="60" />
        <line x1="35" y1="35" x2="43.5" y2="43.5" />
        <line x1="76.5" y1="76.5" x2="85" y2="85" />
        <line x1="76.5" y1="43.5" x2="85" y2="35" />
        <line x1="35" y1="85" x2="43.5" y2="76.5" />
      </g>
    </svg>
  );
}

function SparkGlyph() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="home-launch-constellation"
      aria-hidden="true"
    >
      <g transform="translate(62 70)">
        <AppleSparkle size={28} />
      </g>
      <g transform="translate(35 47) scale(0.58)">
        <AppleSparkle size={15} />
      </g>
      <g transform="translate(73 24) scale(0.4)">
        <AppleSparkle size={13} />
      </g>
    </svg>
  );
}

function AppleSparkle({ size }: { size: number }) {
  return (
    <path
      d={`
        M 0 ${-size}
        C ${size * 0.08} ${-size * 0.56}, ${size * 0.18} ${-size * 0.18}, ${size} 0
        C ${size * 0.18} ${size * 0.18}, ${size * 0.08} ${size * 0.56}, 0 ${size}
        C ${-size * 0.08} ${size * 0.56}, ${-size * 0.18} ${size * 0.18}, ${-size} 0
        C ${-size * 0.18} ${-size * 0.18}, ${-size * 0.08} ${-size * 0.56}, 0 ${-size}
        Z
      `}
      className="home-launch-spark-shape"
    />
  );
}

const launchStars = [
  { left: "12%", top: "18%", size: "2px", opacity: 0.65 },
  { left: "24%", top: "10%", size: "1.5px", opacity: 0.45 },
  { left: "38%", top: "22%", size: "2.2px", opacity: 0.75 },
  { left: "52%", top: "14%", size: "1.6px", opacity: 0.5 },
  { left: "68%", top: "20%", size: "2.4px", opacity: 0.8 },
  { left: "82%", top: "11%", size: "1.7px", opacity: 0.55 },
  { left: "90%", top: "24%", size: "2px", opacity: 0.6 },
  { left: "10%", top: "38%", size: "1.8px", opacity: 0.5 },
  { left: "21%", top: "48%", size: "2.2px", opacity: 0.8 },
  { left: "34%", top: "40%", size: "1.4px", opacity: 0.4 },
  { left: "48%", top: "52%", size: "2px", opacity: 0.65 },
  { left: "63%", top: "44%", size: "1.5px", opacity: 0.5 },
  { left: "78%", top: "36%", size: "2.3px", opacity: 0.75 },
  { left: "88%", top: "50%", size: "1.6px", opacity: 0.45 },
  { left: "14%", top: "70%", size: "2.1px", opacity: 0.72 },
  { left: "28%", top: "80%", size: "1.5px", opacity: 0.46 },
  { left: "42%", top: "68%", size: "2px", opacity: 0.62 },
  { left: "56%", top: "76%", size: "1.7px", opacity: 0.48 },
  { left: "71%", top: "72%", size: "2.4px", opacity: 0.82 },
  { left: "84%", top: "84%", size: "1.8px", opacity: 0.58 },
] as const;
