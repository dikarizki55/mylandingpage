"use client";

import { IconCheckmark } from "../../../components/Icon";
import { useDetails } from "../hooks/useDetails";

export default function Color({ colorData }: { colorData: string[] }) {
  const { color, setColor } = useDetails();
  return (
    <div>
      <h4>Select Color</h4>
      <div className=" mt-4 flex gap-2">
        {colorData.map((item, i) => (
          <div
            key={item}
            style={{ backgroundColor: item }}
            className=" w-10 h-10 rounded-full flex items-center justify-center"
            onClick={() => setColor(item)}
          >
            {(color === item || (color === "" && i === 0)) && (
              <IconCheckmark className=" text-white w-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
