import React, { useEffect, useState } from "react";

interface MyAnimateProps {
  state: boolean;
  duration?: number;
  initial?: string;
  animate?: string;
  className?: string;
  children: React.ReactNode;
}

export const MyAnimate: React.FC<MyAnimateProps> = ({
  state,
  duration = 0.5,
  initial = "",
  animate = "",
  className = "",
  children,
}) => {
  const [mounted, setMounted] = useState(state); // kontrol mount/unmount
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (state) {
      // kalau dibuka
      setMounted(true);
      requestAnimationFrame(() => setAnimating(true)); // kasih 1 frame biar animasi jalan
    } else {
      // kalau ditutup
      setAnimating(false);
      const timeout = setTimeout(() => setMounted(false), duration * 1000);
      return () => clearTimeout(timeout);
    }
  }, [state, duration]);

  if (!mounted) return null;

  return (
    <div
      className={`${className} ${animating ? animate : initial}`}
      style={{ transition: `all ${duration}s ease-in-out` }}
    >
      {children}
    </div>
  );
};
