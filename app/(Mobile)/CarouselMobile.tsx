import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import React from "react";

type Item = {
  src: string;
  title: string;
  description: string;
  link: string;
};

type Props = {
  items: Item[];
};

const Modal = ({
  item,
  isOpen,
  setIsOpen,
}: {
  item: Item;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
        backgroundColor: isOpen ? "#00000089" : "#00000000",
      }}
      className=" top-0 fixed w-full z-30 overflow-y-auto h-screen"
    >
      <div
        onClick={() => setIsOpen(false)}
        style={{
          opacity: isOpen ? "1" : "0",
          height: "70vh",
        }}
        className=" transition-all duration-[3s] flex items-end justify-center pb-4 text-[#ffffff7f]"
      >
        Click here to close
      </div>
      <div
        style={{ minHeight: "1000px" }}
        className=" bg-[#404040] rounded-t-4xl flex flex-col items-center border-t-[40px] border-[#00000000] p-10 pt-0 pb-16 overflow-y-auto"
      >
        <div className=" w-[310px] h-[365px] relative overflow-hidden rounded-4xl flex-none">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="max-width: 50px"
            className=" object-cover"
          ></Image>
        </div>
        <h1 className=" text-white text-5xl mt-5">{item.title}</h1>
        <p className=" text-[#afafaf] self-start mt-4">
          {item.description.split("\n").map((text, i) => (
            <React.Fragment key={i}>
              {text} <br />
            </React.Fragment>
          ))}
        </p>

        <div className=" mt-10">
          <a
            href={item.link}
            className=" px-5 py-2 font-bold text-xl border border-white rounded-full"
          >
            Open
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const CarouselMobile = ({ items }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [caroId, setCaroId] = useState(0);

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
          className=" relative w-[310px] h-[365px] overflow-hidden rounded-[28px] flex-none snap-center"
        >
          {" "}
          <Link href={`/mobile/`}></Link>
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="max-height: 380px"
            className=" object-cover"
          ></Image>
        </div>
      ))}

      <Modal
        item={items[caroId]}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      ></Modal>
    </div>
  );
};

export default CarouselMobile;
