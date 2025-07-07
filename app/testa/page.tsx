"use client";

import { useEffect, useRef, useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const currentY = useRef<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.style.transition = "transform 0.3s ease";
        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.style.transform = "translate(0)";

            modalRef.current.addEventListener("transitionend", () => {
              if (modalRef.current) {
                modalRef.current.style.transition = "";
              }
            });
          }
        }, 0.1);
      }
    }, 0.01);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    console.log("start");
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null) return;

    const touchY = e.touches[0].clientY;
    const diffY = touchY - startY.current;

    if (diffY > 0) {
      currentY.current = diffY;

      if (modalRef.current) {
        modalRef.current.style.transform = `translateY(${diffY}px)`;
      }
    }

    console.log(currentY.current);
  };

  const handleTouchEnd = () => {
    if (currentY.current > 20) {
      if (modalRef.current) {
        modalRef.current.style.transition = `transform 1s ease`;
        const heightModal = modalRef.current.offsetHeight;
        modalRef.current.style.transform = `translateY(${heightModal + 100}px)`;
        modalRef.current.addEventListener(
          "transitionend",
          () => {
            setIsOpen(false);
            if (modalRef.current) {
              modalRef.current.style.transition = ``;
            }
          },
          { once: true }
        );
      }
    } else {
      if (modalRef.current) {
        modalRef.current.style.transition = `transform 0.3s ease`;
        modalRef.current.style.transform = `translateY(0)`;

        modalRef.current.addEventListener(
          "transitionend",
          () => {
            if (modalRef.current) {
              modalRef.current.style.transition = ``;
            }
          },
          { once: true }
        );
      }
    }

    startY.current = null;
    currentY.current = 0;
  };

  return (
    <div className="flex gap-2">
      <button className=" text-white text-9xl" onClick={handleOpen}>
        Click me
      </button>
      {isOpen && (
        <div
          ref={modalRef}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ transform: "translateY(500px)" }}
          className=" fixed left-0 right-0 bottom-0 h-[500px] bg-red-500 overflow-y-auto max-h-[80vh]"
        >
          swipe down to close
        </div>
      )}
    </div>
  );
};

export default Page;
