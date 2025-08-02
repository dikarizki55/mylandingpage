"use client";

import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animasi, setAnimasi] = useState(false);

  return (
    <div>
      <button className=" text-6xl text-white" onClick={() => setIsOpen(true)}>
        {" "}
        Click Me
      </button>

      <div
        style={{
          transform: `translateY(${isOpen ? "0" : "100vh"})`,
        }}
        className=" fixed left-0 bottom-0 right-0 h-[100vh] transition-all duration-500"
      >
        <div
          className=" bg-[#000000be] h-[30vh] flex justify-center items-end pb-8 text-[#ffffff48] transition-all  duration-[2s]"
          style={{
            opacity: isOpen ? "1" : "0",
          }}
          onClick={() => setIsOpen(false)}
        >
          click this to close
        </div>
        <div className=" bg-red-500 h-[70vh]">
          <button
            className=" text-white text-4xl"
            onClick={() => setAnimasi(!animasi)}
          >
            click ini
          </button>
          <div
            className=" transition-all duration-300 w-fit overflow-hidden"
            style={{
              height: animasi ? "20px" : "0px",
            }}
          >
            muncul ini
          </div>
          <div>test</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
