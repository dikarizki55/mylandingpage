"use client";

import { useEffect, useRef, useState } from "react";

export function useMoveBoxHighlight(id: string, margin: number) {
  const navRef = useRef<Record<string, HTMLElement | null>>({});
  const [boxStyle, setBoxStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const currentNav = navRef.current[id];
    if (currentNav) {
      const rect = currentNav.getBoundingClientRect();
      const containerRect = currentNav.parentElement!.getBoundingClientRect();

      setBoxStyle({
        width: rect.width + margin,
        left: rect.left - (containerRect.left + margin / 2),
      });
    }
  }, [id]);

  return { navRef, boxStyle };
}
