import React, { Fragment } from "react";

export default function BoldP({
  children,
  title = true,
  darkMode = false,
}: {
  children: string;
  title?: boolean;
  darkMode?: boolean;
}) {
  return (
    <p
      className={`font-light lg:text-center ${
        title
          ? " text-2xl lg:text-[32px]"
          : `${
              darkMode ? "text-[#86868B]" : "text-[#6E6E73]"
            } text-[18px] lg:text-[20px]`
      }`}
    >
      {children.split(/\[\[([\s\S]*?)\]\]/g).map((item, idx) => (
        <Fragment key={idx}>
          {idx % 2 === 0 ? (
            item
          ) : (
            <span
              className={`${title ? "font-bold" : "font-semibold"} ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {item}
            </span>
          )}
        </Fragment>
      ))}
    </p>
  );
}
