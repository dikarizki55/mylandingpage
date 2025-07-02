"use client";

import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit;

export function useMultiIntersectionObserver<
  T extends HTMLElement = HTMLElement
>(ids: string[], options?: Options) {
  const elementRef = useRef<(T | null)[]>([]);
  const [visibleId, setVisibleId] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible: string[] = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      setVisibleId(visible);
    }, options);

    elementRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [options]);

  useEffect(() => {
    console.log(visibleId);
  }, [visibleId]);

  return { elementRef, visibleId };
}
