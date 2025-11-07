import Image from "next/image";
import React from "react";
import BoldP from "./BoldP";

export default function ImageCardZigzag({
  data,
}: {
  data: { img: string; description: string }[];
}) {
  return (
    <div className=" w-full flex flex-col gap-9 lg:w-[1250px] lg:gap-23">
      {data.map((item, i) => (
        <div
          className={` w-full flex flex-col gap-6 items-center ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } `}
          key={i}
        >
          <Image
            alt={item.img.split("/")[item.img.split("/").length - 1]}
            src={item.img}
            width={900}
            height={505}
            className=" lg:flex-none lg:w-3/4 rounded-[10px] lg:rounded-[28px]"
          />
          <BoldP title={false}>{item.description}</BoldP>
        </div>
      ))}
    </div>
  );
}
