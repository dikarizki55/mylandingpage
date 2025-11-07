"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconXmark } from "../ui/Icon";

export default function Menu({ data }: { data: string[] }) {
  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const variants: Variants = {
    active: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0, 1],
      },
    },
    inactive: {
      x: 500,
      transition: {
        duration: 0.3,
        ease: [1, 0, 1, 1],
      },
    },
  };

  return (
    <>
      <div
        className=" w-full h-full absolute top-0 left-0"
        onClick={() => setOpen(true)}
      ></div>
      {createPortal(
        <>
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                initial="inactive"
                animate="active"
                exit="inactive"
                variants={variants}
                className=" w-full h-screen bg-white fixed top-0 left-0 flex flex-col px-15 py-20 gap-8"
              >
                <div
                  className=" absolute right-5 top-5"
                  onClick={() => setOpen(false)}
                >
                  <IconXmark className="w-4" />
                </div>
                {data.map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className=" capitalize text-2xl font-light"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </>
  );
}
