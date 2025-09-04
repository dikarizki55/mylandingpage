"use client";

import { useEffect, useRef } from "react";

const videoData = [
  {
    src: "/portfolio/cafepos/scanqr.webm",
  },
  {
    src: "/portfolio/cafepos/filterfunction.webm",
  },
  {
    src: "/portfolio/cafepos/createorder.webm",
  },
  {
    src: "/portfolio/cafepos/animatedreceipt.webm",
  },
  {
    src: "/portfolio/cafepos/dashboard.webm",
  },
  {
    src: "/portfolio/cafepos/dashboardchangestatus.webm",
  },
  {
    src: "/portfolio/cafepos/dashboardcreateorder.webm",
  },
  {
    src: "/portfolio/cafepos/dashboardcreatemenu.webm",
  },
];

export default function Cafepos() {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentVideo = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            target.currentTime = 0;
            target.play();
          } else {
            target.pause();
            target.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );

    currentVideo.forEach((current) => {
      if (current) observer.observe(current);
    });

    return () => {
      currentVideo.forEach((current) => {
        if (current) observer.unobserve(current);
      });
    };
  }, []);

  //   if (!mount) return null;

  return (
    <div className="bg-[#F4F0E4] w-full h-[100dvh] overflow-y-scroll snap-y snap-proximity scroll-smooth">
      {videoData.map((item, i) => (
        <div
          key={i}
          className=" w-full h-[100dvh] flex justify-center items-center snap-center"
        >
          <div className=" w-[100vmin] h-[100vmin]">
            <video
              ref={(el) => {
                videoRef.current[i] = el;
              }}
              src={item.src}
              muted
              playsInline
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
}

// function Carousel() {
//   return <div></div>;
// }
