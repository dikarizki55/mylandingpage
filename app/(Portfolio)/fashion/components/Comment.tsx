import Image from "next/image";
import { commentReview } from "../data";
import { Fragment } from "react";

export default function Comment() {
  return (
    <div className=" mt-13 px-5 mx-auto max-w-[1280px]">
      <h1 className=" uppercase font-montserrat text-[32px] lg:text-[48px] leading-[36px]">
        our happy customers
      </h1>
      <div className=" flex overflow-x-auto gap-5 mt-6 lg:mt-10">
        {commentReview.map((item) => (
          <Fragment key={item.name}>
            <Card name={item.name} message={item.message} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Card({ name, message }: { name: string; message: string }) {
  return (
    <div className=" px-8 py-7 flex-none w-full lg:w-100 rounded-[20px] border border-black/10">
      <div className=" flex gap-1.5 relative">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            alt="star"
            src={"/portfolio/fashion/icon/star.svg"}
            width={22.5}
            height={22.5}
          />
        ))}
      </div>
      <div className="flex gap-2 items-center mt-4">
        <h3 className=" text-[20px]">{name}</h3>
        <Image
          alt="verified"
          width={20}
          height={20}
          src={"/portfolio/fashion/icon/verified.svg"}
        />
      </div>
      <p className=" text-black/60 mt-1">{message}</p>
    </div>
  );
}
