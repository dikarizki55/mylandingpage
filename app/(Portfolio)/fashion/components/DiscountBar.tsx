"use client";

import Image from "next/image";
import { useState } from "react";

export default function DiscountBar() {
  const [show, setShow] = useState(true);
  return (
    <div
      className={` w-full text-white text-xs lg:text-sm ${
        show
          ? " opacity-100 h-10 bg-black py-2.5"
          : " opacity-0 h-0 bg-black/0 py-0"
      } flex justify-center lg:justify-between px-0 lg:px-25 transition-all duration-300`}
    >
      <div className=" hidden lg:block"></div>
      <div className="">
        Sign up and get 20% off to your first order.{" "}
        <a className=" underline cursor-pointer">Sign Up Now</a>
      </div>
      <button className=" hidden lg:block" onClick={() => setShow(false)}>
        <Image
          width={14}
          height={14}
          alt="x"
          src={"/portfolio/fashion/icon/x.svg"}
        />
      </button>
    </div>
  );
}
