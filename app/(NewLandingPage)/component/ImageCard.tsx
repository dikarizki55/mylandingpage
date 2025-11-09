import Image from "next/image";
import BoldP from "./BoldP";

export default function ImageCard({
  children,
  imgSrc,
  video = false,
  darkMode = false,
}: {
  children: string;
  imgSrc: string;
  video?: boolean;
  darkMode?: boolean;
}) {
  return (
    <div className=" flex flex-col gap-6 items-center">
      {video && <video src={imgSrc} autoPlay muted loop playsInline></video>}
      {!video && (
        <Image
          alt={imgSrc.split("/")[imgSrc.split("/").length - 1]}
          src={imgSrc}
          width={950}
          height={533}
          className=" rounded-[10px] lg:rounded-[28px]"
        />
      )}
      <div className=" w-full lg:w-[950px]">
        <BoldP title={false} darkMode={darkMode}>
          {children}
        </BoldP>
      </div>
    </div>
  );
}
