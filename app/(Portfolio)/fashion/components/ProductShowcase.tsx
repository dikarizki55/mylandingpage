import Image from "next/image";
import Link from "next/link";
import { newArrivals } from "../data";
import React from "react";
import Star from "./ProductShowcase/Star";
import Price from "./ProductShowcase/Price";

export default function ProductShowcase({
  title,
  showAllUrl,
  data,
}: {
  title: string;
  showAllUrl: string;
  data: typeof newArrivals;
}) {
  return (
    <div className=" flex flex-col gap-7 items-center py-12">
      <h1 className=" font-montserrat text-center text-[32px] uppercase lg:text-[48px]">
        {title}
      </h1>
      <div className=" flex w-full lg:justify-center overflow-x-auto px-5 gap-5">
        {data.map((item) => (
          <Link href={"/fashion/products/graphicshirt"} key={item.name}>
            <Card
              name={item.name}
              discount={item.discount}
              image={item.image}
              price={item.price}
              rate={item.rate}
            />
          </Link>
        ))}
      </div>
      <div className=" w-full px-5">
        <Link
          href={showAllUrl}
          className=" block text-center w-full lg:w-[218px] lg:mx-auto py-4 rounded-full border border-[rgba(0,0,0,0.10)]"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

function Card({
  name,
  image,
  rate,
  price,
  discount,
}: {
  name: string;
  image: string;
  rate: number;
  price: number;
  discount: number;
}) {
  return (
    <div className=" flex flex-col gap-2 ">
      <div className=" w-50 h-50 lg:w-75 lg:h-75 rounded-2xl relative bg-[#F0EEED]">
        <Image alt={name} fill className=" object-cover" src={image} />
      </div>
      <h3 className="font-bold lg:text-[20px]">{name}</h3>
      <div className=" flex gap-2 items-center">
        <div className=" flex gap-1 items-center">
          <Star rate={rate} size={18} />
        </div>
        <span>{rate}/5</span>
      </div>

      <Price textSize={24} price={price} discount={discount} />
    </div>
  );
}
