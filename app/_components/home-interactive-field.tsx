"use client";

import { useEffect, useRef } from "react";

export function HomeInteractiveField({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const texts = Array.from(
      node.querySelectorAll<HTMLElement>("h1, h2, h3, p, a, button"),
    );

    texts.forEach((element) => {
      element.classList.add("cursor-reactive-text");
    });

    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };
    let frameRef: number | null = null;

    const update = () => {
      texts.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = pointer.active
          ? Math.hypot(pointer.x - centerX, pointer.y - centerY)
          : 9999;
        const range = 220;
        const intensity = Math.max(0, 1 - distance / range);

        element.style.setProperty(
          "--cursor-text-scale",
          `${1 + intensity * 0.042}`,
        );
        element.style.setProperty(
          "--cursor-text-lift",
          `${intensity * -2.6}px`,
        );
        element.style.setProperty(
          "--cursor-text-glow",
          `${0.08 + intensity * 0.22}`,
        );
      });

      frameRef = null;
    };

    const requestUpdate = () => {
      if (frameRef !== null) {
        return;
      }

      frameRef = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      requestUpdate();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      requestUpdate();
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      if (frameRef !== null) {
        window.cancelAnimationFrame(frameRef);
      }

      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      texts.forEach((element) => {
        element.classList.remove("cursor-reactive-text");
        element.style.removeProperty("--cursor-text-scale");
        element.style.removeProperty("--cursor-text-lift");
        element.style.removeProperty("--cursor-text-glow");
      });
    };
  }, []);

  return (
    <div ref={ref} className="home-interactive-field">
      {children}
    </div>
  );
}
