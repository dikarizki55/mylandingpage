"use client";

import Image from "next/image";
import { useDetails } from "../hooks/useDetails";
import { useState } from "react";

export default function Carousel({
  data,
}: {
  data: { color: string; url: string[] }[];
}) {
  const { color } = useDetails();
  const [imgIdx, setImgIdx] = useState(0);
  const imageData = data.find((item) => item.color === color) || data[0];
  return (
    <div className=" flex flex-col gap-3 lg:flex-row-reverse">
      <div className=" flex-1  w-full aspect-square lg:w-auto lg:h-[530px] relative rounded-[20px] overflow-hidden bg-[#F0EEED]">
        <Image
          alt="image1"
          fill
          src={imageData.url[imgIdx]}
          className=" object-cover"
        />
      </div>
      <div className=" lg:h-[530px] w-full lg:w-auto flex gap-3 overflow-x-auto lg:overflow-y-auto lg:flex-col">
        {imageData.url.map((item, i) => (
          <div
            key={`${item}${i}`}
            className={`flex-none w-[calc((100%/3)-8px)] lg:w-full lg:h-[calc((100%/3)-8px)] aspect-square rounded-[20px] overflow-hidden relative ${
              imgIdx === i ? "border" : ""
            }`}
            onClick={() => setImgIdx(i)}
          >
            <Image alt="image1" fill src={item} className=" object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
