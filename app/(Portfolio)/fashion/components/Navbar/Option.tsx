"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconX } from "../Icon";

export default function Option() {
  const [open, setOpen] = useState(false);

  const [mount, setmount] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {
    setmount(true);
  }, []);

  if (!mount) return null;

  const variants: Variants = {
    active: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0, 0, 1],
      },
    },
    inactive: {
      x: -500,
      transition: {
        duration: 0.3,
        ease: [1, 0, 1, 1],
      },
    },
  };

  return (
    <div>
      <Image
        alt="option"
        src={"/portfolio/fashion/icon/option.svg"}
        width={24}
        height={24}
        className="  lg:hidden"
        onClick={() => setOpen(true)}
      />

      {createPortal(
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial="inactive"
              animate="active"
              exit="inactive"
              variants={variants}
              className=" top-0 left-0 w-full h-screen bg-white fixed flex flex-col gap-3 pt-20 px-10"
            >
              <IconX
                className=" absolute top-5 right-5"
                onClick={() => setOpen(false)}
              />
              {["Shop", "On Sale", "New Arrivals", "Brands"].map((item) => (
                <span key={item} className=" text-3xl font-satoshi">
                  {item}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
