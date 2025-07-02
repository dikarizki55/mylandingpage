"use client";
import { useSingleIntersectionObserver } from "@/hooks/useSingleIntersectionObserver";
import { useMoveBoxHighlight } from "@/hooks/useMoveBoxHighlight";
import { useEffect, useRef, useState } from "react";

const Test = () => {
  const { elementRef, visibleId } = useSingleIntersectionObserver();

  const { navRef, boxStyle } = useMoveBoxHighlight(visibleId, 20);

  return (
    <div>
      <div className=" fixed top-5 left-5 flex gap-5">
        <div
          ref={(el) => {
            navRef.current["satu"] = el;
          }}
        >
          satu
        </div>
        <div
          ref={(el) => {
            navRef.current["dua"] = el;
          }}
        >
          dua
        </div>
        <div
          ref={(el) => {
            navRef.current["tiga"] = el;
          }}
        >
          tiga
        </div>
        <div
          style={{ width: boxStyle.width, height: "50px", left: boxStyle.left }}
          className=" border border-white absolute transition-all duration-1000"
        ></div>
      </div>
      <section
        id="satu"
        className=" w-full h-screen bg-red-500"
        ref={(el) => {
          elementRef.current[0] = el;
        }}
      >
        test
      </section>
      <section
        id="dua"
        className=" w-full h-screen bg-blue-500"
        ref={(el) => {
          elementRef.current[1] = el;
        }}
      >
        test
      </section>
      <section
        id="tiga"
        className=" w-full h-screen bg-green-500"
        ref={(el) => {
          elementRef.current[2] = el;
        }}
      >
        test
      </section>
    </div>
  );
};

export default Test;
