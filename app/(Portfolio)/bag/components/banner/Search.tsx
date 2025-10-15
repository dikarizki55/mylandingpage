"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Search() {
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-between items-center gap-4 -mt-15 w-64 lg:w-[calc(100%-200px)] rounded-3xl py-4 lg:py-6 px-9 bg-white/60 shadow-[0px_10px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-lg mb-10">
      <DropDown
        src={"/portfolio/bag/Brand.svg"}
        alt={"brand"}
        title={"Brand"}
        description={"Select Brand"}
        option={["Hermes", "Kelvin", "HnM"]}
      />
      <DropDown
        src={"/portfolio/bag/cart.svg"}
        alt={"Item"}
        title={"Item"}
        description={"Select Item"}
        option={["bag", "fashion"]}
      />
      <DropDown
        src={"/portfolio/bag/price.svg"}
        alt={"Price"}
        title={"Price"}
        description={"Range Price"}
        option={["$50-$100", "$100-$200", "$200-$300"]}
      />
      <div className=" mt-1 w-11 h-11 lg:w-17 lg:h-17 flex items-center justify-center rounded-full bg-neutral-700">
        <Image
          className=" w-4 lg:w-6"
          width={16}
          height={16}
          alt="search"
          src="/portfolio/bag/search.svg"
        />
      </div>
    </div>
  );
}

function DropDown({
  src,
  alt,
  title,
  description,
  option = ["none", "nothing"],
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  option: string[];
}) {
  const [dropdown, setdropdown] = useState(false);
  const [selected, setselected] = useState("");

  const dropdownref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownref.current &&
        !dropdownref.current.contains(event.target as Node)
      ) {
        setdropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <div className=" w-full lg:w-45 relative">
      <div
        className=" flex justify-between w-full cursor-pointer"
        onClick={() => setdropdown(!dropdown)}
      >
        <div className=" flex gap-3">
          <div className=" h-full flex items-center lg:items-start lg:py-2">
            <Image
              width={16}
              height={16}
              className="w-4 lg:w-6"
              src={src}
              alt={alt}
            />
          </div>
          <div>
            <h2 className=" font-light lg:text-xl">{title}</h2>
            <h3 className=" text-sm font-light text-neutral-500">
              {dropdown ? description : selected ? selected : description}
            </h3>
          </div>
        </div>
        <div className="py-2">
          <Image
            width={10}
            height={10}
            alt="dropdown"
            src="/portfolio/bag/arrow.svg"
            className={`w-2.5 ${
              dropdown ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          />
        </div>
      </div>
      <div
        ref={dropdownref}
        className={`${
          dropdown
            ? `my-2 max-h-80`
            : " max-h-0 opacity-0 pointer-events-none my-0"
        } lg:absolute lg:right-0 lg:items-start lg:bg-white lg:p-5 lg:z-1000 lg:shadow-2xl lg:rounded-3xl transition-all duration-300 flex flex-col gap-2 items-center text-neutral-500 text-sm font-light`}
      >
        {option.map((opt) => (
          <div
            className=" cursor-pointer"
            onClick={() => {
              setselected(opt);
              setdropdown(false);
            }}
            key={opt}
          >
            {opt}
          </div>
        ))}
        <div
          className=" cursor-pointer"
          onClick={() => {
            setselected("");
            setdropdown(false);
          }}
        >
          Clear
        </div>
      </div>
    </div>
  );
}
