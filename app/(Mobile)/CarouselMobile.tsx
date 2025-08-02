"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import React from "react";

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
  item,
  isOpen,
  setIsOpen,
  width,
  height,
}: {
  item: Item;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  width: number;
  height: number;
}) => {
  const videomodalRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      videomodalRef.current?.play();
    } else {
      document.body.style.overflow = "";
      videomodalRef.current?.pause();
    }
  }, [isOpen]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <div
      style={{
        transform: `translateY(${isOpen ? "0" : "102vh"})`,
        transition: `all 0.75s ease, background-color 3s ease`,
        // backgroundColor: isOpen ? "#00000089" : "#00000000",
        // background: "linear-gradient(#00000000, #000000)",
      }}
      className=" top-0 fixed w-full z-30 overflow-y-auto h-screen"
    >
      <div
        onClick={() => setIsOpen(false)}
        style={{
          // opacity: isOpen ? "1" : "0",
          height: "70vh",
          background: "linear-gradient(#00000000, #000000d0)",
        }}
        className=" transition-all duration-[3s] flex items-end justify-center pb-4 text-[#ffffff7f]"
      >
        Click here to close
      </div>
      <div className=" bg-[#000000d0] border-collapse border-none">
        <div
          style={{ minHeight: "1000px" }}
          className=" bg-[#404040] rounded-t-4xl flex flex-col items-center border-t-[40px] border-[#00000000] p-10 pt-0 pb-16 overflow-y-auto"
        >
          <div
            style={{ width, height }}
            className=" relative overflow-hidden rounded-4xl flex-none"
          >
            {item.video ? (
              <video
                ref={videomodalRef}
                className=" w-full h-full object-cover"
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="max-width: 50px"
                className=" object-cover"
              ></Image>
            )}
          </div>
          <h1 className=" text-white text-5xl mt-5">{item.title}</h1>
          <p className=" text-[#afafaf] self-start mt-4">{item.description}</p>

          <div className=" mt-10">
            {item.link && (
              <a
                href={item.link}
                className=" px-5 py-2 font-bold text-xl border border-white rounded-full"
              >
                Open
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const CarouselMobile = ({ items, width = 310, height = 365 }: Props) => {
  // MODAL
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [caroId, setCaroId] = useState(0);

  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (videoRef.current) {
      if (modalOpen) {
        videoRef.current.forEach((video) => {
          video?.pause();
        });
      } else {
        videoRef.current.forEach((video) => {
          video?.play();
        });
      }
    }
  }, [videoRef, modalOpen]);

  if (!isClient) return;

  return (
    <div
      className=" overflow-auto snap-mandatory snap-x flex gap-6 w-full mt-23"
      style={{
        paddingLeft: "calc((100vw - 310px) / 2)",
        paddingRight: "calc((100vw - 310px) / 2)",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setModalOpen(true);
            setCaroId(index);
          }}
          style={{ width, height }}
          className=" relative overflow-hidden rounded-[28px] flex-none snap-center"
        >
          {item.video ? (
            <video
              ref={(el) => {
                videoRef.current[index] = el;
              }}
              className=" w-full h-full object-cover"
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="max-height: 500px"
              className=" object-cover"
            ></Image>
          )}
        </div>
      ))}

      <Modal
        width={width}
        height={height}
        item={items[caroId]}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      ></Modal>
    </div>
  );
};

export default CarouselMobile;
