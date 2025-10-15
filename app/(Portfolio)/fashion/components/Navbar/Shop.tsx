"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Shop() {
  const [open, setOpen] = useState(false);
  const dropdownref = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!dropdownref.current || !containerRef.current) return;

      if (
        !dropdownref.current.contains(event.target as Node) &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className=" relative">
      <button
        className="flex gap-2 cursor-pointer focus:outline-none"
        onClick={() => setOpen(!open)}
        ref={dropdownref}
      >
        Shop{" "}
        <Image
          alt="downarrow"
          src={"/portfolio/fashion/icon/downarrow.svg"}
          width={16}
          height={16}
          className={`${
            open ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 5, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className=" absolute z-100 left-0 bg-[#ffffff] px-7 py-4 shadow-[16px_16px_20px_0px_rgba(0,0,0,0.10)] rounded-2xl flex flex-col gap-3"
            ref={containerRef}
          >
            {["Shirt", "Jeans", "Shoes"].map((item) => (
              <div className=" cursor-pointer" key={item}>
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
