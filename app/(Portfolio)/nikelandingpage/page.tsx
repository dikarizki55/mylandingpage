"use client";

import Link from "next/link";
import { category, data } from "./data";
import IconNikeLogo, { IconNikeWatermark, IconSearch } from "./icon";
import Image from "next/image";
import { useSingleIntersectionObserver } from "@/hooks/useSingleIntersectionObserver";
import { CSSProperties, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { darkenHex } from "@/lib/darkenHex";

export default function Page() {
  const { elementRef, visibleId } = useSingleIntersectionObserver(0.4);
  const [pageState, setPageState] = useState({ page: 0, color: 0 });
  const [hoverState, setHoverState] = useState("");

  function isActive(colorId: number): boolean {
    return colorId === pageState.color;
  }

  useEffect(() => {
    if (visibleId) {
      const id = visibleId.split("-");
      setPageState({
        page: Number(id[1]),
        color: Number(id[2]),
      });
    }
  }, [setPageState, visibleId]);

  return (
    <div
      style={{
        backgroundColor: data[pageState.page][pageState.color].productColor[0],
      }}
      className=" snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen transition-all duration-500"
    >
      <div
        style={{
          backgroundColor:
            data[pageState.page][pageState.color].productColor[1],
        }}
        className={`fixed w-30 mac:w-50 z-10 h-screen overflow-hidden transition-all duration-500`}
      >
        <IconNikeWatermark
          style={{
            color: data[pageState.page][pageState.color].sideNikeColor,
            opacity: 0.05,
            width: 390 * 0.9,
            height: 2129 * 0.9,
            transition: "all ease 0.5s",
          }}
          className=" origin-top-left scale-70 mac:scale-100"
        ></IconNikeWatermark>
        <div className=" flex w-full h-screen"></div>
      </div>
      <nav className=" flex mt-5 items-center justify-center gap-30 fixed z-10 w-full pl-50">
        <IconNikeLogo
          style={{ color: data[pageState.page][pageState.color].textColor }}
          className=" w-[65px] 2xl:w-[77px]"
        ></IconNikeLogo>
        <div
          onMouseLeave={() => setHoverState("")}
          className=" flex gap-10 2xl:gap-19 uppercase"
        >
          {category.map((categoryItem, i) => (
            <div key={i}>
              <Link
                className="font-roboto-condensed 2xl:text-2xl text-[22px]"
                href={"#"}
                onMouseEnter={() => setHoverState(categoryItem.title)}
                style={{
                  color: data[pageState.page][pageState.color].textColor,
                }}
              >
                {categoryItem.title}
              </Link>
              <AnimatePresence mode="wait">
                {hoverState === categoryItem.title && (
                  <motion.div
                    layoutId="menuHover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    style={{
                      backgroundColor: `${darkenHex(
                        data[pageState.page][pageState.color].productColor[1],
                        -0.5
                      )}a0`,
                    }}
                    className=" absolute -translate-x-[50%] rounded-[40px] px-20 py-15 backdrop-blur-xl flex justify-center items-start gap-7 z-1000"
                  >
                    {categoryItem.datalist.map((list, j) => (
                      <div key={j} className="flex flex-col w-full">
                        <h1 className=" font-medium text-xl inline whitespace-nowrap">
                          {list.title}
                        </h1>
                        {list.list.map((item, k) => (
                          <p
                            key={k}
                            className=" font-extralight text-sm whitespace-nowrap"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <search
          style={{
            backgroundColor: `${
              data[pageState.page][pageState.color].searchBarColor[0]
            }26`,
          }}
          className="2xl:px-5 2xl:py-2 px-4 py-1 rounded-full flex justify-start items-center gap-3"
        >
          <IconSearch
            style={{
              color: `${
                data[pageState.page][pageState.color].searchBarColor[1]
              }80`,
            }}
            className=" w-4 h-4  2xl:w-6 2xl:h-6"
          ></IconSearch>
          <form>
            <input
              type="text"
              placeholder="Search"
              style={
                {
                  color: `${
                    data[pageState.page][pageState.color].searchBarColor[1]
                  }80`,
                  "--placeholder-color": `${
                    data[pageState.page][pageState.color].searchBarColor[1]
                  }80`,
                } as CSSProperties
              }
              className="focus:outline-none focus:border-none border-none font-roboto-condensed text-[20px] 2xl:text-[26px] w-30"
            />
          </form>
        </search>
      </nav>

      <div className=" absolute bottom-0 right-0">
        <Image
          alt="lighting"
          width={1720}
          height={534}
          src={"/portfolio/nikelandingpage/lighting.png"}
        ></Image>
      </div>

      <div
        style={{
          color: data[pageState.page][pageState.color].textColor,
        }}
        className=" absolute left-40 mac:left-60 top-25 2xl:left-65 2xl:top-45 font-roboto-condensed italic transition-all duration-1000"
      >
        <motion.h1
          key={`title${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" relative font-black text-[180px] mac:text-[200px] 2xl:text-[220px]"
        >
          {data[pageState.page][pageState.color].title}
        </motion.h1>
        <motion.h2
          key={`name${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className=" relative font-medium text-[32px] mac:text-[38px] 2xl:text-[45px] -mt-16 tracking-[10px]"
        >
          {data[pageState.page][pageState.color].name}
        </motion.h2>
        <motion.h2
          key={`price${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className=" relative font-black text-[40px] mac:text-[50px] 2xl:text-[60px]"
        >
          {data[pageState.page][pageState.color].price}
        </motion.h2>
        <motion.p
          key={`description${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
          className=" relative mt-5 font-light text-[20px] mac:text-[24px] 2xl:text-[30px] not-italic w-105 mac:w-140 2xl:w-163"
        >
          {data[pageState.page][pageState.color].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" flex gap-5 mt-12 relative z-10"
        >
          {data[pageState.page].map((color, i) => (
            <div
              key={i}
              className=" relative w-9 h-9 flex justify-center items-center"
            >
              {isActive(i) && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute w-9 h-9 border rounded-full"
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />
              )}
              <Link href={`#${pageState.page}-${i}`}>
                {data[pageState.page] && (
                  <motion.div
                    layoutId={`circle${i}`}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      outline: `1.5px solid ${
                        data[pageState.page][pageState.color].textColor
                      }80`,
                    }}
                    className=" w-6 h-6 outline-[2px] flex rounded-full overflow-clip"
                  >
                    {color.productColor.map((colorDetail, i) => (
                      <div
                        key={i}
                        style={{ backgroundColor: colorDetail }}
                        className=" w-6 h-6 transition-all duration-1000"
                      ></div>
                    ))}
                  </motion.div>
                )}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      {data.map((dataItems, i) => (
        <section
          key={i}
          id={`page${i}`}
          className=" w-full h-screen snap-start relative"
        >
          <div className="flex w-full h-screen scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-clip">
            {dataItems.map((Items, j) => (
              <section
                id={`${i}-${j}`}
                className="relative pl-30 mac:pl-50 w-full h-screen flex-none snap-start"
                key={j}
              >
                <motion.div
                  initial={{ x: 400, y: 100, opacity: 0, scale: 0.5 }}
                  whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="absolute right-5 bottom-0 -mb-10 2xl:right-20 2xl:bottom-0 2xl:-mb-20"
                >
                  <Image
                    id={`image-${i}-${j}`}
                    ref={(el) => {
                      elementRef.current.push(el);
                    }}
                    src={Items.image}
                    width={1048}
                    height={1310}
                    alt="shoes"
                    className="  -rotate-[16.62deg]  2xl:w-[1048px] 2xl:h-[1310px] xl:w-[700px]"
                  ></Image>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 2,
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={"/portfolio/nikelandingpage/shadow.png"}
                    width={963}
                    height={79}
                    alt="shadow"
                    className=" absolute right-0 -mr-3  bottom-18 w-[650px] 2xl:mb-0 2xl:w-[1000px]"
                  ></Image>
                </motion.div>
              </section>
            ))}
          </div>
        </section>
      ))}

      <div className=" fixed top-0 right-5 h-screen flex flex-col justify-center items-center gap-5">
        {data.map((_, i) => (
          <Link key={i} href={`#${i}-0`}>
            <div
              style={{
                backgroundColor:
                  data[pageState.page][pageState.color].textColor,
                height: i === pageState.page ? "100px" : "6px",
                opacity: 0.5,
              }}
              className="relative w-1.5 rounded-[3px] transition-all duration-500 ease-out"
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
