"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navbar } from "../data";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={` w-full absolute top-0`}
    >
      <NavbarContent white={true} />
    </motion.div>
  );
}

export function NavbarContent({ white = false }: { white?: boolean }) {
  const [navHover, setNavHover] = useState("");
  const indexHover = Number(navHover);

  const handleHover = (value: string) => ({
    onMouseEnter: () => setNavHover(value),
    onMouseLeave: () => setNavHover(""),
  });

  return (
    <div
      className={`w-full transition-all duration-800 py-4 ${
        navHover ? "bg-white text-black" : white ? "text-white" : "text-black"
      }`}
    >
      <div className=" m-auto w-[120vh] flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <div className="justify-start  text-2xl font-extrabold">
            YourBrand
          </div>
          <div className="flex justify-start items-center gap-1">
            {navbar.map((item, index) => (
              <div
                key={item.title}
                className="font-medium cursor-pointer px-5 py-2 rounded-full bg-white/0 hover:bg-neutral-300 hover:text-black transition-all duration-800"
                {...handleHover(index.toString())}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`text-base font-medium cursor-pointer rounded-full px-6 py-2.5 ${
              navHover && white
                ? "bg-black text-white hover:bg-neutral-800"
                : " text-black hover:bg-white"
            }`}
          >
            Log in
          </div>
          <div
            className={`px-6 py-2.5 ${
              navHover && white
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black text-white hover:bg-neutral-700"
            } text-base font-medium rounded-full  cursor-pointer transition-all duration-500`}
          >
            Sign up
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {navHover && (
          <motion.div
            key={navHover + "child"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" w-[115vh] m-auto overflow-clip my-6"
          >
            {navbar[indexHover].dicover && (
              <div className=" font-medium flex items-center gap-2 text-2xl">
                {navbar[indexHover].dicover}{" "}
                <Image
                  alt="right arrow"
                  width={30 * 0.8}
                  height={40 * 0.8}
                  src="/portfolio/revolutclone/rightArrow.svg"
                />
              </div>
            )}
            <div className="mt-8 columns-4 gap-5">
              {navbar[indexHover].title !== "Kids & Teens" &&
                navbar[indexHover].submenu.map((item) => (
                  <div
                    key={item.title}
                    className=" flex flex-col gap-5 mb-5 text-sm font-semibold break-inside-avoid"
                  >
                    {item.title}
                    {item.items.map((child) => (
                      <div key={child} className=" text-sm font-light">
                        {child}
                      </div>
                    ))}
                  </div>
                ))}
              {navbar[indexHover].title === "Kids & Teens" &&
                navbar[indexHover].submenu.map((item) => (
                  <div key={item.title} className=" text-sm font-light">
                    {item.title}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
