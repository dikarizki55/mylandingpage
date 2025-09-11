"use client";

export default function Carousel() {
  return (
    <div className=" w-full h-screen relative text-white">
      Carousel
      <video
        className=" w-full h-full object-cover absolute -z-1 top-0"
        src="/portfolio/revolutclone/carousel/physical-card.mp4"
        muted
        autoPlay
      ></video>
    </div>
  );
}
