import Image from "next/image";
import BoldP from "./BoldP";

export default function ImageCard({
  children,
  imgSrc,
}: {
  children: string;
  imgSrc: string;
}) {
  return (
    <div className=" flex flex-col gap-6 items-center">
      <Image
        alt={imgSrc.split("/")[imgSrc.split("/").length - 1]}
        src={imgSrc}
        width={950}
        height={533}
        className=" rounded-[10px] lg:rounded-[28px]"
      />
      <div className=" w-full lg:w-[950px]">
        <BoldP title={false}>{children}</BoldP>
      </div>
    </div>
  );
}
