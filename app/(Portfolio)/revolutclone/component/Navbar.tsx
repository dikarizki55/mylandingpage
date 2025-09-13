"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navbar } from "../data";

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

  const handleHover = (value: string) => ({
    onMouseEnter: () => setNavHover(value),
    onMouseLeave: () => setNavHover(""),
  });

  const isNavKey = (key: string): key is keyof typeof navbar => {
    return key in navbar;
  };
  return (
    <div
      className={`w-full transition-all duration-800 py-4 ${
        navHover !== ""
          ? "bg-white text-black"
          : white
          ? "text-white"
          : "text-black"
      }`}
    >
      <div className=" m-auto w-[120vh] flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <div className="justify-start  text-2xl font-extrabold">
            YourBrand
          </div>
          <div className="flex justify-start items-center gap-1">
            {["Personal", "Business", "Kids & Teens", "Company"].map((item) => (
              <div
                key={item}
                className="font-medium cursor-pointer px-5 py-2 rounded-full bg-white/0 hover:bg-neutral-300 hover:text-black transition-all duration-800"
                {...handleHover(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`text-base font-medium cursor-pointer rounded-full px-6 py-2.5 ${
              navHover === "" && white
                ? "bg-black text-white hover:bg-neutral-800"
                : " text-black hover:bg-white"
            }`}
          >
            Log in
          </div>
          <div
            className={`px-6 py-2.5 ${
              navHover === "" && white
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black text-white hover:bg-neutral-700"
            } text-base font-medium rounded-full  cursor-pointer transition-all duration-500`}
          >
            Sign up
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {navHover !== "" && (
          <motion.div
            key={navHover + "child"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" w-[115vh] m-auto overflow-clip columns-4 gap-5 mt-5"
          >
            {navHover !== "Kids & Teens" &&
              isNavKey(navHover) &&
              navbar[navHover].map((item) => (
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
            {navHover === "Kids & Teens" &&
              isNavKey(navHover) &&
              navbar[navHover].map((item) => (
                <div key={item.title} className=" text-sm font-light">
                  {item.title}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
