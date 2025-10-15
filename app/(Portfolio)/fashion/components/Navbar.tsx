import Image from "next/image";
import React from "react";
import Shop from "./Navbar/Shop";
import Option from "./Navbar/Option";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full flex justify-between lg:gap-10 items-center px-4 lg:px-25 py-5">
      <div className=" flex gap-4">
        <Option />
        <Link href={"/fashion"} className=" font-montserrat text-2xl leading-5">
          Shop.co
        </Link>
      </div>
      <div className=" gap-6 hidden lg:flex">
        <Shop />
        {["On Sale", "New Arrivals", "Brands"].map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <SearchDesktop />
      <div className=" flex gap-3">
        <SearchMobile />
        <Image
          alt="cart"
          src={"/portfolio/fashion/icon/cart.svg"}
          width={24}
          height={24}
          className=""
        />
        <Image
          alt="profile"
          src={"/portfolio/fashion/icon/profile.svg"}
          width={24}
          height={24}
          className=""
        />
      </div>
    </div>
  );
}

function SearchMobile() {
  return (
    <>
      <Image
        alt="search"
        src={"/portfolio/fashion/icon/search.svg"}
        width={24}
        height={24}
        className=" lg:hidden"
      />
    </>
  );
}

function SearchDesktop() {
  return (
    <div className=" flex-1 lg:flex bg-[#F0F0F0] gap-3 py-3 px-4 rounded-full hidden">
      <Image
        alt="search"
        src={"/portfolio/fashion/icon/search.svg"}
        width={24}
        height={24}
        className=" opacity-40"
      />
      <input
        type="text"
        placeholder="Search for Products..."
        className=" w-full focus:outline-none"
      />
    </div>
  );
}
