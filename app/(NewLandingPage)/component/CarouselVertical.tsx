"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import BoldP from "./BoldP";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function CarouselVertical({
  data,
}: {
  data: { title: string; imgSrc: string; description: string }[];
}) {
  const [select, setSelect] = useState(0);

  const dirRef = useRef(1);

  const variants: Variants = {
    start: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      transition: {
        duration: 0.3,
        ease: [1, 0, 1, 1],
      },
    }),
    center: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0, 1],
      },
    },
    end: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      transition: {
        duration: 0.3,
        ease: [1, 0, 1, 1],
      },
    }),
  };

  return (
    <div className=" w-full flex flex-col items-center gap-5 max-w-[950px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={select + "image"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=""
        >
          <Image
            width={335}
            height={725}
            alt="carouVertical"
            className="w-60 h-[519px] lg:w-[335px] lg:h-[725px] rounded-[20px] outline-[10px] outline-white/50"
            src={data[select].imgSrc}
          />
        </motion.div>
      </AnimatePresence>
      <div className="w-full flex relative">
        {data.map((item, idx) => (
          <div
            key={idx + "title"}
            className={`w-full text-center relative cursor-pointer transition-all duration-300 ${
              select === idx ? "text-black" : "text-black/40"
            }`}
            onClick={() => {
              if (idx > select) {
                dirRef.current = 1;
              } else {
                dirRef.current = -1;
              }

              setSelect(idx);
            }}
          >
            {item.title}
            {idx === select && (
              <motion.div
                layout
                layoutId="tabBack"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className=" w-full bg-black h-[1px] mt-2 absolute bottom-0"
              ></motion.div>
            )}
            <div className=" w-full bg-black/18 h-[1px] mt-2"></div>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait" custom={dirRef.current}>
        <motion.div
          initial={"start"}
          animate={"center"}
          exit={"end"}
          variants={variants}
          custom={dirRef.current}
          key={select + "desc"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }}>
            <BoldP title={false}>{data[select].description}</BoldP>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
