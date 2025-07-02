"use client";

import { useEffect, useRef, useState } from "react";

export function useSingleIntersectionObserver<
  T extends HTMLElement = HTMLElement
>() {
  const elementRef = useRef<(T | null)[]>([]);
  const [visibleId, setVisibleId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible: string[] = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        setVisibleId(visible[0]);
      },
      { threshold: 0.4 }
    );

    elementRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return { elementRef, visibleId };
}
