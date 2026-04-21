"use client";

import { useEffect, useRef } from "react";

export function HomeHeroStack() {
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = shellRef.current;

    if (!node) {
      return;
    }

    const updateScroll = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const normalized = Math.max(
        -1,
        Math.min(1, centerOffset / (viewportHeight * 0.75)),
      );

      node.style.setProperty("--hero-scroll", `${normalized}`);
      node.style.setProperty("--hero-glow-y", `${normalized * -18}px`);
      node.style.setProperty("--hero-ambient-scale", `${1 + Math.abs(normalized) * 0.08}`);
    };

    const target = {
      x: 0,
      y: 0,
    };
    const current = {
      x: 0,
      y: 0,
    };
    let frameRef: number | null = null;

    const applyPointerState = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      node.style.setProperty("--hero-roll", `${current.x * 5.5}deg`);
      node.style.setProperty("--hero-pitch", `${current.y * -4.8}deg`);
      node.style.setProperty("--hero-shift-x", `${current.x * 8}px`);
      node.style.setProperty("--hero-shift-y", `${current.y * 7}px`);
      node.style.setProperty("--hero-glow-x", `${current.x * 16}px`);
      node.style.setProperty("--hero-ambient-rotate", `${current.x * 3.4}deg`);
      node.style.setProperty("--hero-reflect-x", `${current.x * 12}px`);
      node.style.setProperty("--hero-reflect-y", `${current.y * 10}px`);

      const deltaX = Math.abs(target.x - current.x);
      const deltaY = Math.abs(target.y - current.y);

      if (deltaX > 0.001 || deltaY > 0.001) {
        frameRef = window.requestAnimationFrame(applyPointerState);
      } else {
        frameRef = null;
      }
    };

    const requestPointerFrame = () => {
      if (frameRef !== null) {
        return;
      }

      frameRef = window.requestAnimationFrame(applyPointerState);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      requestPointerFrame();
    };

    const resetPointer = () => {
      target.x = 0;
      target.y = 0;
      requestPointerFrame();
    };

    updateScroll();
    resetPointer();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", resetPointer);

    return () => {
      if (frameRef !== null) {
        window.cancelAnimationFrame(frameRef);
      }
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <div className="home-hero-stack-shell" ref={shellRef}>
      <div className="home-hero-stack-aura home-hero-stack-aura-violet" />
      <div className="home-hero-stack-aura home-hero-stack-aura-gold" />
      <div className="home-hero-stack-glow" />

      <div className="home-hero-stack-stage">
        <div className="home-hero-card home-hero-card-left">
          <CardFace variant="moon" />
        </div>
        <div className="home-hero-card home-hero-card-right">
          <CardFace variant="sun" />
        </div>
        <div className="home-hero-card home-hero-card-center">
          <CardFace variant="sparkles" center />
        </div>
      </div>
    </div>
  );
}

function CardFace({
  variant,
  center = false,
}: {
  variant: "moon" | "sun" | "sparkles";
  center?: boolean;
}) {
  return (
    <div className={`home-hero-face ${center ? "is-center" : ""}`}>
      <div className="home-hero-card-surface">
        <div className="home-hero-card-gloss" />
        <div className="home-hero-card-outline" />
        <div className="home-hero-card-edge home-hero-card-edge-top" />
        <div className="home-hero-card-edge home-hero-card-edge-bottom" />
        <div className={`home-hero-face-inner ${center ? "is-center" : ""}`}>
          <div className={`home-hero-glyph home-hero-glyph-${variant}`}>
            {center ? (
              <SparkGlyph />
            ) : variant === "moon" ? (
              <MoonGlyph />
            ) : (
              <SunGlyph />
            )}
          </div>
        </div>
        <div className="home-hero-face-sheen" />
      </div>
    </div>
  );
}

function MoonGlyph() {
  return (
    <svg viewBox="0 0 120 120" className="home-hero-symbol" aria-hidden="true">
      <circle cx="54" cy="60" r="22" className="home-hero-symbol-primary" />
      <circle cx="65" cy="54" r="22" className="home-hero-symbol-cutout" />
      <circle cx="78" cy="40" r="3.5" className="home-hero-symbol-star" />
      <circle cx="88" cy="54" r="2.6" className="home-hero-symbol-star" />
      <circle cx="74" cy="54" r="2.2" className="home-hero-symbol-star" />
    </svg>
  );
}

function SunGlyph() {
  return (
    <svg viewBox="0 0 120 120" className="home-hero-symbol" aria-hidden="true">
      <circle cx="60" cy="60" r="17" className="home-hero-symbol-primary" />
      <g className="home-hero-symbol-rays">
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
    <svg viewBox="0 0 120 120" className="home-hero-constellation" aria-hidden="true">
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
      className="home-hero-spark-shape"
    />
  );
}
