"use client";

import Image from "next/image";
import { animate, AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IconRightArrow } from "./ui/Icon";
import React from "react";
import { useMediaQuery } from "@/app/(Portfolio)/fashion/products/[id]/hooks/useMediaQuery";

export default function CarouselRadio({
  data,
}: {
  data: {
    title: string;
    imgSrc: string;
    description: string;
    iconSvg: React.ReactElement<HTMLDivElement>;
  }[];
}) {
  const [select, setSelect] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const containterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containterRef.current;
    if (!container) return;

    const itemWidth = isMobile
      ? container.clientWidth / 3
      : container.clientHeight / 5;

    let targetScroll = 0;

    if (select === 0) {
      targetScroll = 0;
    } else if (select === data.length - 1) {
      targetScroll = container.scrollWidth;
    } else {
      targetScroll = itemWidth * select - itemWidth;
    }

    const control = animate(container.scrollLeft, targetScroll, {
      duration: 0.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        container.scrollLeft = latest;
      },
    });

    return () => control.stop();
  }, [data.length, isMobile, select]);

  return (
    <div className=" w-full flex flex-col items-center gap-5 lg:gap-10 max-w-[950px]">
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
      <div className=" w-full lg:w-150 rounded-[16px] bg-[#F5F5F7] overflow-hidden p-2 h-25 relative">
        <div
          ref={containterRef}
          className=" w-full h-full  rounded-[16px] overflow-x-hidden flex "
        >
          {data.map((item, idx) => (
            <div
              key={idx + item.title}
              className={`flex-none w-1/3 lg:w-1/5 flex flex-col px-2 items-center py-5 gap-2 rounded-[16px] relative `}
              onClick={() => setSelect(idx)}
            >
              {idx === select && (
                <motion.div
                  layoutId="tabLayout"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className=" w-full h-full absolute left-0 top-0 bg-black rounded-[16px]"
                ></motion.div>
              )}
              <div
                className={`${
                  idx === select ? "text-white" : "text-[#6E6E73]"
                } transition-all duration-500 relative`}
              >
                {React.cloneElement(item.iconSvg, {
                  className: `${item.iconSvg.props.className ?? ""} w-5 `,
                })}
              </div>
              <div
                className={` relative text-center leading-tight text-sm ${
                  idx === select ? "text-white" : "text-[#6E6E73]"
                } transition-all duration-500`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f5f5f700 0%, #f5f5f7 30%)",
          }}
          className={`absolute h-full top-0 right-0 w-15 flex justify-center items-center ${
            select === data.length - 1 ||
            (isMobile && data.length === 3) ||
            (!isMobile && data.length === 5)
              ? "opacity-0"
              : "opacity-100"
          } transition-all duration-500`}
          onClick={() => {
            setSelect(Math.min(select + 1, data.length - 1));
          }}
        >
          <IconRightArrow className=" mr-3" />
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(-90deg, #f5f5f700 0%, #f5f5f7 30%)",
          }}
          className={`absolute h-full top-0 left-0 w-15 flex justify-center items-center ${
            select === 0 ||
            (isMobile && data.length === 3) ||
            (!isMobile && data.length === 5)
              ? "opacity-0"
              : "opacity-100"
          } transition-all duration-500`}
          onClick={() => {
            setSelect(Math.max(select - 1, 0));
          }}
        >
          <IconRightArrow className=" rotate-180 mr-3" />
        </div>
      </div>
      <div className=" h-20 w-full lg:w-150">
        <AnimatePresence mode="wait">
          <motion.div
            key={select + "description"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className=" text-center text-[#6E6E73]">
              {data[select].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
