"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./component/Navbar";
import Image from "next/image";
import Carousel from "./component/Carousel";
import SecondNavbar from "./component/SecondNavbar";

export default function RevolutClone() {
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTop) {
      setOpen(false);
    } else {
      const handler = setTimeout(() => {
        setOpen(true);
        window.scrollTo({ top: 8 });
      }, 1000);

      return () => clearTimeout(handler);
    }
  }, [isTop]);

  return (
    <div ref={scrollRef} className=" ">
      {/* <div className=" fixed top-0 right-0 z-10">
        {JSON.stringify(isTop) + y}
      </div> */}
      <div
        className={`w-full h-[101vh] flex justify-center items-center relative overflow-hidden`}
      >
        <AnimatePresence mode="wait">
          {isTop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className=" w-full h-full flex flex-col items-center relative z-10"
            >
              <Navbar />
              <motion.div
                initial={{ y: "-70vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-70vh" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" w-[120vh] mt-[18vh] flex flex-col gap-5 text-white"
              >
                <div className=" uppercase font-black text-[10vh]">
                  Change the way you money
                </div>
                <div className=" w-[33vh] font-medium">
                  Home or away, local or global — move freely between countries
                  and currencies. Sign up for free, in a tap.
                </div>
                <div className="w-fit text-white bg-black rounded-full px-6 py-3">
                  Download the App
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={` ${
            isTop ? "w-full h-full " : "w-[85vh] h-[70vh]"
          } transition-all duration-1000 absolute flex flex-col items-center justify-end gap-7`}
        >
          <div
            className={` w-screen h-[101vh] bg-no-repeat  bg-center bg-[url('/portfolio/revolutclone/image2.webp')] absolute ${
              isTop
                ? "bg-[length:auto_130%] -translate-x-1/2 "
                : "bg-[length:auto_50%] -translate-x-[50%] translate-y-[30vh]"
            } left-1/2 bottom-0 transition-all duration-1000 -z-10`}
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` absolute bottom-0 left-1/2 -translate-x-1/2 aspect-[3/4] transition-all duration-1000 outline-white -z-10 bg-cover bg-no-repeat bg-[url('/portfolio/revolutclone/framecenter.webp')] ${
              isTop
                ? "outline-3  h-[70vh] rounded-t-3xl"
                : "outline-1000 h-[40vh] rounded-3xl"
            }`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` absolute bottom-0 left-1/2 -translate-x-1/2 aspect-[3/4] transition-all duration-1000 outline-neutral-400 -z-10 ${
              isTop
                ? "outline-3  h-[70vh] rounded-t-3xl"
                : "outline-0 h-[40vh] rounded-3xl"
            }`}
          ></motion.div>
          <AnimatePresence mode="wait">
            {!isTop && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={` flex-1 flex flex-col justify-end gap-7 items-center w-[85vh]`}
                >
                  <div className="font-extrabold text-[6vh] uppercase">
                    Your salary, reimagined
                  </div>
                  <div className=" text-[2.1vh] text-center">
                    Spend smartly, send quickly, sort your salary automatically,
                    and watch your savings grow — all with YourBrand.
                  </div>

                  <div className=" text-white bg-black rounded-full px-6 py-3">
                    Move your salary
                  </div>
                </motion.div>
                <motion.div
                  initial={{ gap: "50vh", opacity: 0, width: "60vh" }}
                  animate={{ gap: "1vh", opacity: 1, width: "100%" }}
                  exit={{ gap: "50vh", opacity: 0, width: "60vh" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex items-center justify-center w-full overflow-clip`}
                >
                  <div className=" bg-[url('/portfolio/revolutclone/imageleft.webp')] bg-cover bg-no-repeat aspect-[3/4] h-[35vh] rounded-3xl relative overflow-clip">
                    <div className=" absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className=" w-full h-full bg-[url('/portfolio/revolutclone/frameleft.webp')] bg-cover bg-no-repeat relative"></div>
                  </div>
                  <div className="  aspect-[3/4] h-[40vh] rounded-3xl"></div>
                  <div className=" bg-[url('/portfolio/revolutclone/imageright.webp')] bg-cover bg-no-repeat aspect-[3/4] h-[35vh] rounded-3xl relative overflow-clip">
                    <div className=" absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className=" w-full h-full bg-[url('/portfolio/revolutclone/frameright.webp')] bg-cover bg-no-repeat relative"></div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      {open && (
        <>
          <SecondNavbar />
          <div className=" w-full py-24 mt-24 flex justify-center items-center">
            <div className="flex flex-col justify-start items-center gap-14">
              <div className="text-gray-600 text-3xl font-semibold">
                Join 60+ million customers worldwide and 11+ million in the UK
              </div>
              <div className="flex gap-6">
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="appstore"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/appstore.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    #3 downloaded finance app
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="trustpilot"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/trustpilot.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    4.6 out of 5 on Trustpilot
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="best payment"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/best-payment.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Best International Payments Provider 2025
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="customer satisfication"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/customer-satisfication.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Customer Satisfaction - Gold
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="best mobile banking app"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/fintech.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Best Consumer Banking Mobile App 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel />
        </>
      )}
    </div>
  );
}
