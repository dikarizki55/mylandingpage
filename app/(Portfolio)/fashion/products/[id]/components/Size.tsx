"use client";

import { useDetails } from "../hooks/useDetails";

export default function Size({ data }: { data: string[] }) {
  const { size, setSize } = useDetails();
  return (
    <div>
      <div>Choose Size</div>
      <div className=" mt-3 flex gap-2 ">
        {data.map((item, i) => (
          <button
            className={`px-5 py-2.5 rounded-full capitalize ${
              size === item || (size === "" && i == 0)
                ? "bg-black text-white"
                : "bg-[#F0F0F0]"
            }`}
            key={item}
            onClick={() => setSize(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
