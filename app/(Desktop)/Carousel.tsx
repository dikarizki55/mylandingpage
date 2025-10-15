"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Blank = ({
  width = 348,
  height = 410,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      style={{ width, height }}
      className={`rounded-[31px] relative flex-shrink-0 bg-[#404040]`}
    ></div>
  );
};

type Item = {
  src: string;
  title: string;
  description: React.ReactNode;
  link?: string;
  video?: boolean;
};

type Props = {
  items: Item[];
  width?: number;
  height?: number;
};

const Modal = ({
  setIsShow,
  item,
  width = 350,
  height = 460,
}: {
  setIsShow: (open: boolean) => void;
  item: Item;
  width?: number;
  height?: number;
}) => {
  return createPortal(
    <div className=" w-full h-screen fixed top-0 left-0 bg-[#00000078] z-30 flex justify-center items-center">
      <div
        className=" w-full h-full fixed left-0 top-0"
        onClick={() => {
          setIsShow(false);
        }}
      ></div>
      <div className=" relative px-20 py-20 bg-[#404040] rounded-2xl flex items-center justify-center gap-8">
        <div
          onClick={() => {
            setIsShow(false);
          }}
          className=" bg-red-500 text-white cursor-pointer w-6 h-6 flex justify-center items-center rounded-full absolute right-4 top-4 text-s"
        >
          <span className=" -mt-1">x</span>
        </div>
        <div
          style={{ width, height }}
          className={`rounded-[28px] overflow-hidden relative`}
        >
          {item.video ? (
            <video
              className=" w-full h-full object-cover"
              src={item.src}
              autoPlay
              muted
              loop
            ></video>
          ) : (
            <Image
              src={item.src}
              alt={item.src.split("/").pop() || "unknown"}
              fill
              className="object-cover"
            ></Image>
          )}
        </div>
        <div className=" w-[535px] self-start flex flex-col gap-8">
          <h1 className=" text-white text-5xl font-bold">{item.title}</h1>
          <p className=" font-light text-base text-[#AFAFAF]">
            {/* {item.description.split(`\n`).map((text, i) => (
              <React.Fragment key={i}>
                {text} <br />
              </React.Fragment>
            ))} */}
            {item.description}
          </p>
          <div className=" mt-5">
            {item.link && (
              <Link
                href={item.link}
                className=" px-4 py-2 font-bold text-base bg-[#ffffff26] border border-white rounded-full text-white"
              >
                Open
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const Carousel = ({ items, width = 348, height = 410 }: Props) => {
  // MODAL
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };

    if (showModal) {
      window.addEventListener("keydown", handleEsc);
    } else {
      window.removeEventListener("keydown", handleEsc);
    }
  }, [showModal]);

  const [caroId, setCaroId] = useState(0);

  const next = () => {
    if (caroId < items.length - 1) {
      setCaroId(caroId + 1);
    } else {
      setCaroId(caroId);
    }
  };
  const prev = () => {
    if (caroId < 1) {
      setCaroId(0);
    } else {
      setCaroId(caroId - 1);
    }
  };

  const handleModal = (index: number) => {
    if (index === caroId) {
      setShowModal(true);
    }
  };

  // handle video pause when modal is open
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (showModal) {
      if (videoRef.current) videoRef.current.forEach((video) => video?.pause());
    } else {
      if (videoRef.current) videoRef.current.forEach((video) => video?.play());
    }
  }, [videoRef, showModal]);

  if (!isClient) return null;

  return (
    <div className="">
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <div
          className="flex gap-8 relative transition-all duration-1000"
          style={{
            transform: `translateX(calc(50vw - ${
              (width + 32) * 3 + width / 2 + caroId * (width + 32)
            }px))`,
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i} width={width} height={height}></Blank>
          ))}
          {items.map((el, index) => (
            <div
              onClick={() => {
                handleModal(index);
              }}
              key={index}
              style={{ width: width ?? "348", height: height ?? "410" }}
              className={`rounded-[31px] overflow-hidden relative flex-shrink-0 ${
                caroId === index ? "cursor-pointer" : ""
              }`}
            >
              {el.video ? (
                <video
                  ref={(el) => {
                    videoRef.current[index] = el;
                  }}
                  className=" w-full h-full object-cover"
                  src={el.src}
                  autoPlay
                  muted
                  loop
                ></video>
              ) : (
                <Image
                  src={el.src}
                  alt={el.src.split("/").pop() || "unknown"}
                  fill
                  sizes="max-width: 500px"
                  className="object-cover"
                />
              )}
            </div>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i} width={width} height={height}></Blank>
          ))}
        </div>
      </div>
      <div
        onClick={prev}
        className={` absolute z-50 top-[calc(50%-24px)] left-20 border border-[#585858] rounded-full w-12 h-12  bg-[#85858525] backdrop-blur-md  transition-all flex justify-center items-center text-2xl font-extralight  ${
          caroId === 0
            ? "text-[#585858] cursor-default"
            : "group/prev hover:top-[calc(50%-90px)] hover:left-12 hover:w-[180px] hover:h-[180px] hover:text-8xl border-white cursor-pointer text-white"
        }`}
      >
        <span className="-mt-1 group-hover/prev:-mt-3 transition-all cursor-inherit">
          {"<"}
        </span>
      </div>
      <div
        onClick={next}
        className={`absolute z-50 top-[calc(50%-24px)] right-20 border border-[#585858] rounded-full w-12 h-12 bg-[#85858525] backdrop-blur-md transition-all flex justify-center items-center text-2xl font-extralight ${
          caroId === items.length - 1
            ? "text-[#585858] cursor-default"
            : "group/next hover:top-[calc(50%-90px)] hover:right-12 hover:w-[180px] hover:h-[180px] hover:text-8xl border-white cursor-pointer text-white"
        }
        }`}
      >
        <span className=" -mt-1 group-[]: group-hover/next:-mt-3 transition-all cursor-cursor-inherit">
          {">"}
        </span>
      </div>
      {showModal ? (
        <Modal
          width={width}
          height={height}
          setIsShow={setShowModal}
          item={items[caroId]}
        ></Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
