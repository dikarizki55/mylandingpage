"use client";

import { useState } from "react";
import { IconMinus, IconPlus } from "../../../components/Icon";

export default function InputNumber() {
  const [number, setNumber] = useState(1);
  return (
    <div className=" rounded-full bg-[#F0F0F0] px-4 py-3 flex w-30 items-center justify-between select-none">
      <div
        className=" w-3 h-3 flex items-center justify-center"
        onClick={() => setNumber(number === 1 ? 1 : number - 1)}
      >
        <IconMinus className=" w-3" />
      </div>
      {number}
      <div
        className="w-3 h-3 flex items-center justify-center"
        onClick={() => setNumber(number + 1)}
      >
        <IconPlus className=" w-3" />
      </div>
    </div>
  );
}
