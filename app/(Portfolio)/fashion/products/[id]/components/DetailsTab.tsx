"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Star from "../../../components/ProductShowcase/Star";
import { useMediaQuery } from "../hooks/useMediaQuery";

type ReviewType = {
  name: string;
  rate: number;
  message: string;
};

export default function DetailsTab({
  className,
  review,
}: {
  className: string;
  review: ReviewType[];
}) {
  const [tab, setTab] = useState(1);
  const [direction, setDirection] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");

  function handleDirection(newIndex: number) {
    setDirection(newIndex > tab ? 1 : -1);
    setTab(newIndex);
  }

  const variant: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1500 : -1500,
      position: "absolute",
    }),
    center: {
      x: 0,
      position: "relative",
      transition: {
        duration: 0.5,
        ease: [0, 0, 0, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1500 : 1500,
      position: "absolute",
      transition: {
        duration: 0.5,
        ease: [1, 0, 1, 1],
      },
    }),
  };
  return (
    <div className={`${className}`}>
      <div className=" flex w-full justify-between border-b border-b-black/30">
        {["Product Details", "Rating & Reviews", "FAQs"].map((item, i) => (
          <button
            key={item}
            className={` relative py-5 w-full ${
              tab === i ? "text-black" : "text-black/60"
            } transition-all duration-300`}
            onClick={() => handleDirection(i)}
          >
            {item}
            {tab === i && (
              <motion.div
                layoutId="barSelect"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className=" h-[1px] w-full absolute bottom-0 bg-black"
              ></motion.div>
            )}
          </button>
        ))}
      </div>
      <div
        style={{ height: [10, isMobile ? 950 : 400, 10][tab] }}
        className=" w-full flex overflow-hidden relative transition-all duration-500"
      >
        <AnimatePresence custom={direction} mode="sync">
          <motion.div
            key={tab}
            custom={direction}
            variants={variant}
            initial="enter"
            animate="center"
            exit="exit"
            className=" w-full py-6"
          >
            {tab === 1 && <ReviewTab review={review} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ReviewTab({ review }: { review: ReviewType[] }) {
  return (
    <div className=" flex flex-col gap-3 lg:grid lg:grid-cols-2">
      {review.map((item, i) => (
        <div
          className=" p-6 rounded-[20px] border border-black/20"
          key={item.name + i}
        >
          <div className=" flex items-center gap-2">
            <Star rate={item.rate} size={18} />
            {item.rate}/5
          </div>
          <div className=" font-bold flex gap-2">
            {item.name}{" "}
            <Image
              alt="verified"
              width={20}
              height={20}
              src={"/portfolio/fashion/icon/verified.svg"}
            />
          </div>
          <p className=" text-black/60">{item.message}</p>
        </div>
      ))}
    </div>
  );
}
