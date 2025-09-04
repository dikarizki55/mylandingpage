"use client";
import { useEffect, useRef, useState } from "react";

const videoData = [
  {
    src: "/portfolio/cafepos/scanqr.mp4",
  },
  {
    src: "/portfolio/cafepos/filterfunction.mp4",
  },
  {
    src: "/portfolio/cafepos/createorder.mp4",
  },
  {
    src: "/portfolio/cafepos/animatedreceipt.mp4",
  },
  {
    src: "/portfolio/cafepos/dashboard.mp4",
  },
  {
    src: "/portfolio/cafepos/dashboardchangestatus.mp4",
  },
  {
    src: "/portfolio/cafepos/dashboardcreateorder.mp4",
  },
  {
    src: "/portfolio/cafepos/dashboardcreatemenu.mp4",
  },
] as const;

export default function Cafepos() {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const [indexii, setIndexii] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const vidIndex = containerRef.current?.findIndex(
              (v) => v === entry.target
            );
            if (vidIndex !== -1 && vidIndex !== undefined) {
              setIndexii(vidIndex);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    container?.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      container?.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="bg-[#F4F0E4] w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className=" fixed bottom-2 right-2 p-2 px-4 bg-white rounded-full">
        Page {indexii + 1} of {videoData.length}
      </div>
      {videoData.map((item, i) => (
        <div
          key={i}
          className=" w-full h-[100dvh] flex justify-center items-center snap-center"
        >
          <div
            className=" w-[100vmin] h-[100vmin]"
            ref={(el) => {
              containerRef.current[i] = el;
            }}
          >
            {i == indexii && (
              <video
                src={item.src}
                autoPlay
                muted
                playsInline
                preload="none"
              ></video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// function Carousel() {
//   return <div></div>;
// }
