"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
  topFade = true,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  topFade?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    let frameRef: number | null = null;

    if (!node) {
      return;
    }

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const updateMotion = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const floatY = clamp(centerOffset * -0.035, -18, 18);

      const headerFadeStart = 124;
      const headerFadeEnd = 28;
      const topOpacity = topFade
        ? clamp(
            (rect.top - headerFadeEnd) / (headerFadeStart - headerFadeEnd),
            0,
            1,
          )
        : 1;

      node.style.setProperty("--scroll-float-y", `${floatY}px`);
      node.style.setProperty("--scroll-top-opacity", `${topOpacity}`);
      frameRef = null;
    };

    const requestUpdate = () => {
      if (frameRef !== null) {
        return;
      }

      frameRef = window.requestAnimationFrame(updateMotion);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(Boolean(entries[0]?.isIntersecting));
        requestUpdate();
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef !== null) {
        window.cancelAnimationFrame(frameRef);
      }
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [rootMargin, threshold, topFade]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.14,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const translateY = Math.max(-20, Math.min(20, centerOffset * -speed));

      node.style.setProperty("--parallax-y", `${translateY}px`);
      frameRef.current = null;
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-layer ${className}`}>
      {children}
    </div>
  );
}

export function FloatingStars({
  stars,
}: {
  stars: ReadonlyArray<{
    top: string;
    left: string;
    size: string;
    opacity: string;
  }>;
}) {
  return (
    <>
      {stars.map((star, index) => {
        const style: CSSProperties = {
          top: star.top,
          left: star.left,
          animationDelay: `${index * 280}ms`,
          animationDuration: `${4.8 + index * 0.35}s`,
        };

        return (
          <span
            key={`${star.top}-${star.left}-${index}`}
            className={`absolute rounded-full bg-white ${star.size} ${star.opacity} star-drift`}
            style={style}
          />
        );
      })}
    </>
  );
}
