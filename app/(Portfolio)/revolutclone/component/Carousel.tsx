"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export type DataType = {
  section: string;
  title: string;
  description: string;
  detail: string;
  action: string;
  addedImg?: string;
  bgsrc: string;
  video: boolean;
}[];

export default function Carousel({ data }: { data: DataType }) {
  const uid = useId();

  const [indexShow, setIndexShow] = useState(0);
  const [play, setPlay] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
  const [loop, setLoop] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const imageDuration = 5;

  // Loop image
  useEffect(() => {
    if (!data[indexShow].video && loop) {
      setVideoDuration(imageDuration);
      const handler = setTimeout(() => {
        const nextIndex = (indexShow + 1) % data.length;
        setIndexShow(nextIndex);
      }, imageDuration * 1000);
      return () => clearTimeout(handler);
    }
  }, [data, indexShow, loop]);

  // play Video on view
  useEffect(() => {
    if (containerRef.current) {
      const currentObserver = observerRef.current;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (videoRef.current && data[indexShow].video) {
                videoRef.current.play();
              }
              setPlay(true);
            } else {
              if (videoRef.current && data[indexShow].video) {
                videoRef.current.currentTime = 0;
                videoRef.current.pause();
              }
              setLoop(true);
              setPlay(false);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (currentObserver) observer.observe(currentObserver);
      return () => {
        if (currentObserver) observer.unobserve(currentObserver);
      };
    }
  }, [data, indexShow, uid]);

  function goNext() {
    const nextIndex = (indexShow + 1) % data.length;
    setIndexShow(nextIndex);
  }

  // parallax
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // mulai & selesai parallax
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={observerRef}
      className=" w-full h-screen relative bg-black text-white flex justify-center items-center overflow-clip"
    >
      <AnimatePresence mode="wait">
        <div className="w-[40%] h-[80vh] flex flex-col justify-between items-center relative z-1">
          <motion.div
            key={data[indexShow].section + uid + "text"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col  items-center gap-5"
          >
            <div className="text-center  text-white text-5xl font-black ">
              {data[indexShow].title}
            </div>
            <div className="flex flex-col  items-center gap-8">
              <div className="flex flex-col  items-center gap-3">
                <div className="text-center  text-white ">
                  {data[indexShow].description}
                </div>
                <div className="text-center  text-white text-xs font-light ">
                  {data[indexShow].detail}
                </div>
              </div>
              <motion.div
                layoutId={"actionButton" + uid}
                transition={{ duration: 0.5 }}
                className="size- px-5 py-2.5 bg-zinc-100 rounded-[30px] inline-flex justify-center items-center gap-2.5"
              >
                <div className=" text-black font-semibold ">
                  {data[indexShow].action}
                </div>
              </motion.div>
            </div>
          </motion.div>
          {data[indexShow].addedImg && (
            <motion.div
              key={data[indexShow].section + uid + "addedImageAnimation"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className=" w-full h-[40vh] relative"
            >
              <Image
                alt={data[indexShow].section + uid + "addedImage"}
                src={data[indexShow].addedImg}
                fill
                className=" object-cover"
              />
            </motion.div>
          )}
          <div className="size- inline-flex  items-center gap-4">
            {data.map((s, i) => (
              <button
                key={s.section + uid + "indexbtn"}
                className={` px-5 py-2.5 font-semibold backdrop-blur-[6px] bg-white/1  rounded-[30px] transition-all duration-500 relative overflow-clip cursor-pointer ${
                  i === indexShow
                    ? "text-black bg-zinc-100 hover:bg-neutral-100"
                    : "text-white outline-2 -outline-offset-2 border-white hover:bg-white/10"
                }`}
                onClick={() => {
                  setIndexShow(i);
                  setLoop(false);
                }}
              >
                {i === indexShow && play && (
                  <motion.div
                    key={s.section + uid + "animationbutton"}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: videoDuration, ease: "linear" }}
                    className=" origin-left w-full h-full bg-neutral-200 hover:bg-neutral-300 absolute top-0 left-0 -z-1"
                  ></motion.div>
                )}
                {s.section}
              </button>
            ))}
          </div>
        </div>
      </AnimatePresence>
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="absolute w-full h-full top-0 -z-0"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={data[indexShow].section + uid + "video"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full scale-120"
          >
            {data[indexShow].video && (
              <video
                ref={(el) => {
                  videoRef.current = el;
                }}
                onLoadedMetadata={(e) =>
                  setVideoDuration(e.currentTarget.duration)
                }
                onEnded={() => {
                  if (loop) {
                    goNext();
                  }
                }}
                className="object-cover "
                src={data[indexShow].bgsrc}
                autoPlay
                playsInline
                muted
                preload="auto"
              ></video>
            )}

            {!data[indexShow].video && (
              <Image
                alt={data[indexShow].section}
                src={data[indexShow].bgsrc}
                fill
                className=" object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
