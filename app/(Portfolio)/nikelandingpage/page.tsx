"use client";

import Link from "next/link";
import { category, data } from "./data";
import Image from "next/image";
import { useSingleIntersectionObserver } from "@/hooks/useSingleIntersectionObserver";
import { CSSProperties, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconNikeLogo, { IconNikeWatermark, IconSearch } from "./IconNike";
import SearchMobile, { MenuMobile } from "./MobileUi";

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
      className=" snap-y snap-mandatory overflow-y-scroll scroll-smooth h-[100dvh] transition-all duration-500"
    >
      <div
        style={{
          backgroundColor:
            data[pageState.page][pageState.color].productColor[1],
        }}
        className={` fixed w-full lg:w-30 mac:w-50 bottom-0 left-0 lg:top-0 z-10 h-3 lg:h-screen overflow-hidden transition-all duration-500`}
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
        <div className=" flex w-full h-[100dvh]"></div>
      </div>
      <nav
        style={
          {
            "--bg-color": data[pageState.page][pageState.color].productColor[1],
            "--text-color-m":
              data[pageState.page][pageState.color].sideNikeColor,
            "--text-color": data[pageState.page][pageState.color].textColor,
          } as React.CSSProperties
        }
        className={
          " h-12 lg:h-auto flex lg:mt-5 items-center justify-between px-5 lg:justify-center gap-30 fixed z-20 w-full lg:pl-50 text-[var(--text-color-m)] lg:text-[var(--text-color)] bg-[var(--bg-color)] lg:bg-[#00000000] transition-all duration-500"
        }
      >
        <IconNikeLogo className=" w-[37px] lg:w-[65px] 2xl:w-[77px]"></IconNikeLogo>
        <div
          onMouseLeave={() => setHoverState("")}
          style={{ color: data[pageState.page][pageState.color].textColor }}
          className=" lg:flex gap-10 2xl:gap-19 uppercase hidden"
        >
          {category.map((categoryItem, i) => (
            <div key={i}>
              <Link
                className="font-roboto-condensed 2xl:text-2xl text-[22px]"
                href={"#"}
                onMouseEnter={() => setHoverState(categoryItem.title)}
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
                      backgroundColor: `${
                        data[pageState.page][pageState.color].productColor[1]
                      }a0`,
                      color:
                        data[pageState.page][pageState.color].sideNikeColor,
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
        <div className="lg:hidden flex gap-7">
          <SearchMobile pageState={pageState} />
          <MenuMobile pageState={pageState} />
        </div>
        <search
          style={{
            backgroundColor: `${
              data[pageState.page][pageState.color].searchBarColor[0]
            }26`,
          }}
          className="  hidden 2xl:px-5 2xl:py-2 px-4 py-1 rounded-full lg:flex justify-start items-center gap-3"
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
              className="focus:outline-none focus:border-none border-none font-roboto-condensed text-base lg:text-[20px] 2xl:text-[26px] w-30"
            />
          </form>
        </search>
      </nav>

      <div className=" hidden lg:block absolute bottom-0 right-0">
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
        className=" absolute w-full h-[50dvh] bottom-0 lg:w-auto px-6 lg:px-0 lg:left-40 mac:left-60 2xl:left-65 lg:h-[100dvh] lg:flex lg:flex-col lg:justify-center lg:pt-8 font-roboto-condensed italic transition-all duration-1000"
      >
        <motion.h1
          key={`title${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" relative leading-15 lg:leading-normal font-black text-[60px] lg:text-[180px] mac:text-[200px] 2xl:text-[220px]"
        >
          {data[pageState.page][pageState.color].title}
        </motion.h1>
        <motion.h2
          key={`name${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className=" relative font-medium leading-8 lg:leading-normal text-[28px] lg:text-[32px] mac:text-[38px] 2xl:text-[45px] lg:-mt-16 lg:*:tracking-[10px]"
        >
          {data[pageState.page][pageState.color].name}
        </motion.h2>
        <motion.h2
          key={`price${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className=" relative lg:mt-0 font-black text-[28px] lg:text-[40px] mac:text-[50px] 2xl:text-[60px]"
        >
          {data[pageState.page][pageState.color].price}
        </motion.h2>
        <motion.p
          key={`description${pageState.page}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
          className=" relative lg:mt-5 font-light text-[16px] lg:text-[20px] mac:text-[24px] 2xl:text-[30px] not-italic w-full lg:w-105 mac:w-140 2xl:w-[35vw]"
        >
          {data[pageState.page][pageState.color].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className=" flex gap-3 lg:gap-5 mt-3 lg:mt-12 relative z-10"
        >
          {data[pageState.page].map((color, i) => (
            <div
              key={i}
              className=" relative w-8 h-8 lg:w-9 lg:h-9 flex justify-center items-center"
            >
              {isActive(i) && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute w-8 h-8 lg:w-9 lg:h-9 border rounded-full"
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
                    className=" w-5 h-5 lg:w-6 lg:h-6 outline-[2px] flex rounded-full overflow-clip"
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
          className=" w-full h-[100dvh] snap-start relative"
        >
          <div className="flex w-full h-[100dvh] scroll-smooth snap-x snap-mandatory overflow-x-scroll overflow-y-clip scrollbar-hide">
            {dataItems.map((Items, j) => (
              <section
                id={`${i}-${j}`}
                className="relative lg:pl-30 mac:pl-50 w-full h-[100dvh] flex-none snap-start lg:flex lg:justify-end lg:px-10 lg:items-center"
                key={j}
              >
                <motion.div
                  initial={{ x: 200, y: 200, opacity: 0, scale: 0.5 }}
                  whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="relative h-[50dvh] flex items-center justify-center lg:block lg:h-auto lg:-mt-20 z-10"
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
                    className=" -ml-10 lg:ml-0  -rotate-[16.62deg] w-[360px] 2xl:w-[900px] xl:w-[700px]"
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
                  className=" absolute top-0 flex items-center justify-center h-[50dvh] w-full lg:w-auto lg:h-auto lg:block lg:-mr-3 lg:top-auto lg:mt-120 2xl:mt-170 lg:left-auto"
                >
                  <Image
                    src={"/portfolio/nikelandingpage/shadow.png"}
                    width={963}
                    height={79}
                    alt="shadow"
                    className=" mt-70 ml-13 lg:ml-auto lg:mt-auto w-[370px] lg:w-[650px] 2xl:w-[800px]"
                  ></Image>
                </motion.div>
              </section>
            ))}
          </div>
        </section>
      ))}

      <div className=" fixed top-0 right-2 lg:right-5 h-[100dvh] flex flex-col justify-center items-center gap-5">
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
