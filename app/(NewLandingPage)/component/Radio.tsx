"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Radio() {
  const [active, setActive] = useState(0);
  return (
    <div className=" flex items-center mt-10 gap-5">
      {["A", "B", "C"].map((item, index) => (
        <div
          key={item}
          className=" flex items-center justify-center w-50 aspect-square relative group rounded-2xl hover:bg-black/10 transition-all duration-300"
          onClick={() => setActive(index)}
        >
          {index === active && (
            <motion.div
              layoutId="tabBack"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="  w-full h-full absolute left-0 top-0 "
            >
              <div className=" bg-black w-full h-full rounded-2xl hover:bg-black/80 transition-all duration-300"></div>
            </motion.div>
          )}
          <div
            className={`${
              index === active ? "text-white" : "text-black"
            } transition-all duration-1000 relative font-bold text-6xl`}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
