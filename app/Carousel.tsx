"use client";

import Image from "next/image";
import { useState } from "react";

const Blank = () => {
  return (
    <div className="w-[348px] h-[410px] rounded-[31px] relative flex-shrink-0 bg-[#404040]"></div>
  );
};

const Carousel = ({ imgsrc }: { imgsrc: string[] }) => {
  const [caroId, setCaroId] = useState(0);

  const next = () => {
    setCaroId(caroId + 1);
  };
  const prev = () => {
    caroId < 1 ? setCaroId(0) : setCaroId(caroId - 1);
  };
  return (
    <div className="relative">
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <div
          className="flex gap-8 relative transition-all duration-1000"
          style={{
            transform: `translateX(calc(50vw - ${
              (348 + 32) * 3 + 348 / 2 + caroId * (348 + 32)
            }px))`,
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i}></Blank>
          ))}
          {imgsrc.map((el, index) => (
            <div
              key={index}
              className="w-[348px] h-[410px] rounded-[31px] overflow-hidden relative flex-shrink-0"
            >
              <Image
                src={el}
                alt={el.split("/").pop() || "unknown"}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i}></Blank>
          ))}
        </div>
      </div>
      <div
        onClick={prev}
        className="group/prev absolute z-50 top-[calc(50%-24px)] left-20 border border-white rounded-full w-12 h-12 hover:w-[180px] hover:h-[180px] bg-[#85858525] backdrop-blur-md hover:top-[calc(50%-90px)] hover:left-12 transition-all flex justify-center items-center text-2xl hover:text-8xl font-extralight cursor-pointer"
      >
        <span className=" -mt-1 group-hover/prev:-mt-3 transition-all">
          {"<"}
        </span>
      </div>
      <div
        onClick={next}
        className="group/next absolute z-50 top-[calc(50%-24px)] right-20 border border-white rounded-full w-12 h-12 hover:w-[180px] hover:h-[180px] bg-[#85858525] backdrop-blur-md hover:top-[calc(50%-90px)] hover:right-12 transition-all flex justify-center items-center text-2xl hover:text-8xl font-extralight cursor-pointer"
      >
        <span className=" -mt-1 group-[]: group-hover/next:-mt-3 transition-all">
          {">"}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
