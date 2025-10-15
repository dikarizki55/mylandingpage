import Image from "next/image";
import Search from "./banner/Search";

export default function Banner() {
  return (
    <div className=" w-full flex flex-col items-center">
      <div className=" w-full h-101 lg:h-125 bg-neutral-100 rounded-3xl px-4 lg:p-11 py-8 overflow-clip relative">
        <div className=" relative z-10">
          <h1 className=" text-4xl lg:text-8xl">
            Best Collection <br /> For You
          </h1>
          <h4 className=" mt-5 text-sm lg:text-xl text-neutral-600">
            We Discover the epitome of style and best collection
          </h4>
          <button className=" mt-4 bg-white p-3 rounded-full text-sm lg:text-lg lg:p-5 lg:mt-6 flex cursor-pointer">
            Start Shopping <div className=" w-4"></div>{" "}
            <span className=" font-light">→</span>
          </button>
        </div>
        <Image
          width={1500}
          height={1500}
          src="/portfolio/bag/picture/bag1.png"
          alt="bag banner"
          className=" w-75 lg:w-170 -rotate-8 absolute right-5 lg:right-15 top-40 lg:top-0"
        />
      </div>
      <Search />
    </div>
  );
}
