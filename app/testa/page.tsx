"use client";

import { useEffect, useRef, useState } from "react";

const Page = () => {
  const image = ["abc", "cde", "efg", "hij"];

  const containerRef = useRef<HTMLDivElement>(null);

  const [idCaro, setIdCaro] = useState(0);

  useEffect(() => {
    console.log(idCaro);
  }, [idCaro]);

  const visible = 2;

  const next = () => {
    idCaro < image.length - visible ? setIdCaro(idCaro + 1) : setIdCaro(0);
  };

  const prev = () => {
    idCaro <= 0 ? setIdCaro(image.length - visible) : setIdCaro(idCaro - 1);
  };

  return (
    <div className="flex gap-2">
      <div
        ref={containerRef}
        style={{ width: 108 * visible - 8 }}
        className="overflow-hidden"
      >
        <div
          className="flex gap-2 transition-all duration-1000"
          style={{ transform: `translate(${-108 * idCaro}px,0)` }}
        >
          {image.map((el, index) => (
            <div
              key={index}
              className=" w-[100px] h-[150px] border flex-shrink-0"
            >
              {el}
            </div>
          ))}
        </div>
      </div>
      <div onClick={prev}>prev</div>
      <div onClick={next}>next</div>
    </div>
  );
};

export default Page;
