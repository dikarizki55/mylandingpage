import Image from "next/image";
import React, { Fragment } from "react";

export default function Path({
  url,
  className,
}: {
  url: string;
  className: string;
}) {
  return (
    <div className={`relative flex items-center gap-2 opacity-60 ${className}`}>
      {url.split("/").map((item, i) => (
        <Fragment key={item}>
          {i !== 0 && (
            <Image
              alt="arrow"
              width={11.5}
              height={6.5}
              src={"/portfolio/fashion/icon/downarrow.svg"}
              className="-rotate-90"
            />
          )}
          <span>{item}</span>
        </Fragment>
      ))}
    </div>
  );
}
