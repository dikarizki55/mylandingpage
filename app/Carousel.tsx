"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Blank = () => {
  return (
    <div className="w-[348px] h-[410px] rounded-[31px] relative flex-shrink-0 bg-[#404040]"></div>
  );
};

type Item = {
  src: string;
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

const Modal = ({
  isShow,
  setIsShow,
  item,
}: {
  isShow: boolean;
  setIsShow: (open: boolean) => void;
  item: Item;
}) => {
  return createPortal(
    <div className=" w-full h-screen fixed top-0 left-0 bg-[#00000078] z-30 flex justify-center items-center">
      <div
        onClick={() => {
          setIsShow(false);
        }}
        className=" bg-red-500 text-white cursor-pointer"
      >
        close
      </div>
      <div>
        {item.description} <br />
        {item.src} <br />
        {item.title} <br />
      </div>
    </div>,
    document.body
  );
};

const Carousel = ({ items }: Props) => {
  // MODAL
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
    caroId < items.length - 1 ? setCaroId(caroId + 1) : setCaroId(caroId);
  };
  const prev = () => {
    caroId < 1 ? setCaroId(0) : setCaroId(caroId - 1);
  };

  const handleModal = (index: number) => {
    if (index === caroId) {
      setShowModal(true);
    }
  };

  return (
    <div className="">
      <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <div
          className="flex gap-8 relative transition-all duration-1000"
          style={{
            transform: `translateX(calc(50vw - ${
              (348 + 32) * 3 + 348 / 2 + caroId * (348 + 32)
            }px))`,
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i}></Blank>
          ))}
          {items.map((el, index) => (
            <div
              onClick={() => {
                handleModal(index);
              }}
              key={index}
              className={`w-[348px] h-[410px] rounded-[31px] overflow-hidden relative flex-shrink-0 ${
                caroId === index ? "cursor-pointer" : ""
              }`}
            >
              <Image
                src={el.src}
                alt={el.src.split("/").pop() || "unknown"}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <Blank key={i}></Blank>
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
          setIsShow={setShowModal}
          isShow={showModal}
          item={items[caroId]}
        ></Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
