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
  style,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(Boolean(entries[0]?.isIntersecting));
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

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
      const translateY = centerOffset * -speed;

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
