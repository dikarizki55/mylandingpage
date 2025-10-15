"use client";

import { useState } from "react";
import { IconMinus, IconPlus } from "../../../components/Icon";

export default function InputNumber() {
  const [number, setNumber] = useState(1);
  return (
    <div className=" rounded-full bg-[#F0F0F0] py-3 flex w-30 items-center justify-between select-none">
      <div
        className=" w-full h-full pl-2 flex items-center justify-center"
        onClick={() => setNumber(number === 1 ? 1 : number - 1)}
      >
        <IconMinus className=" w-3" />
      </div>
      <div className=" w-full text-center">{number}</div>
      <div
        className=" w-full h-full pr-2 flex items-center justify-center"
        onClick={() => setNumber(number + 1)}
      >
        <IconPlus className=" w-3" />
      </div>
    </div>
  );
}
