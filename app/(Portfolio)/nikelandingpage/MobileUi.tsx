"use client";

import { useEffect, useState } from "react";
import { category, data } from "./data";
import {
  IconChevronLeft,
  IconChevronRight,
  IconMenu,
  IconSearch,
  IconXmark,
} from "./IconNike";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchMobile({
  pageState,
}: {
  pageState: { color: number; page: number };
}) {
  const [searchMenu, setSearchMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <IconSearch
        onClick={() => setSearchMenu(true)}
        style={{
          color: `${data[pageState.page][pageState.color].sideNikeColor}`,
        }}
        className=" w-5 h-5"
      />

      {createPortal(
        <AnimatePresence mode="wait">
          {searchMenu && (
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ ease: "circOut", duration: 0.3 }}
              className=" fixed top-0 left-0 w-full h-[100dvh] bg-white z-20 text-black p-5"
            >
              <div className=" flex w-full gap-3 items-center justify-between">
                <search
                  style={{
                    backgroundColor: "#0000000f",
                  }}
                  className=" w-full px-5 py-2 rounded-full flex justify-start items-center gap-3"
                >
                  <IconSearch
                    style={{
                      color: "#00000080",
                    }}
                    className=" w-5 h-5  2xl:w-6 2xl:h-6"
                  ></IconSearch>
                  <form className=" w-full">
                    <input
                      type="text"
                      placeholder="Search"
                      style={
                        {
                          color: "#00000080",
                          "--placeholder-color": "#00000080",
                        } as React.CSSProperties
                      }
                      className="focus:outline-none focus:border-none border-none font-roboto-condensed text-base"
                    />
                  </form>
                </search>
                <span onClick={() => setSearchMenu(false)}>Cancel</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export function MenuMobile({
  pageState,
}: {
  pageState: { color: number; page: number };
}) {
  const [menu, setMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [direction, setDirection] = useState<1 | -1>(1);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  const [path, setPath] = useState<number[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string[]>([]);
  const [titleCategory, setTitleCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    const getCurrentCategory = () => {
      if (path.length === 0) {
        setTitleCategory("");
        setSubCategory("");
        return category.map((item) => {
          return item.title;
        });
      } else if (path.length === 1) {
        setTitleCategory(category[path[0]].title);
        setSubCategory("");
        return category[path[0]].datalist.map((item) => {
          return item.title;
        });
      } else {
        setSubCategory(category[path[0]].datalist[path[1]].title);
        return category[path[0]].datalist[path[1]].list;
      }
    };

    setCurrentCategory(getCurrentCategory());
  }, [path]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <IconMenu
        onClick={() => setMenu(true)}
        style={{
          color: `${data[pageState.page][pageState.color].sideNikeColor}`,
        }}
        className=" w-5 h-5"
      />
      {createPortal(
        <AnimatePresence mode="wait">
          {menu && (
            <motion.div
              initial={{ backgroundColor: "#00000000" }}
              animate={{ backgroundColor: "#00000080" }}
              exit={{ backgroundColor: "#00000000" }}
              className=" fixed top-0 left-0 w-full z-20 h-[100dvh] flex"
            >
              <div
                onClick={() => setMenu(false)}
                className=" flex-1 h-full"
              ></div>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ ease: "circOut", duration: 0.3 }}
                className=" w-[300px] h-[100dvh] bg-white  text-black p-5 overflow-clip"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`menu${path.join("")}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                    className=" flex-none flex flex-col w-full gap-3 items-center justify-between"
                  >
                    <div className=" flex flex-row-reverse w-full justify-between text-black">
                      <div
                        onClick={() => {
                          setPath([]);
                          setMenu(false);
                        }}
                      >
                        <IconXmark className=" w-3" />
                      </div>
                      {path.length > 0 && (
                        <button
                          onClick={() => {
                            setDirection(-1);
                            setPath((prev) => prev.slice(0, -1));
                          }}
                          className=" flex items-center gap-2"
                        >
                          <IconChevronLeft className=" h-3" />
                          {subCategory ? titleCategory : "All"}
                        </button>
                      )}
                    </div>
                    <h1 className=" text-2xl w-full font-semibold">
                      {subCategory || titleCategory}
                    </h1>
                    {currentCategory &&
                      currentCategory.map((item, i) => (
                        <div key={i} className=" w-full">
                          {path.length < 2 ? (
                            <div
                              onClick={() => {
                                setDirection(1);
                                setPath((prev) => [...prev, i]);
                              }}
                              className=" flex items-center justify-between w-full"
                            >
                              {item}
                              <IconChevronRight className=" h-3" />
                            </div>
                          ) : (
                            item
                          )}
                        </div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
