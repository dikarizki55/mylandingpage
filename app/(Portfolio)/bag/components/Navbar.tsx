import Image from "next/image";

export default function NavBar() {
  return (
    <div className=" w-full flex justify-between mb-7 lg:mb-12">
      <Circle src="/portfolio/bag/logo.svg" alt={"logo"} />
      <div className=" flex gap-3">
        <Circle src="/portfolio/bag/like.svg" alt={"like"} />
        <Circle src="/portfolio/bag/cart.svg" alt={"cart"} />
        <Circle src="/portfolio/bag/account.svg" alt={"login"} />
      </div>
    </div>
  );
}

function Circle({
  src,
  alt,
  href = "#",
}: {
  src: string;
  alt: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className=" w-[38px] h-[38px] rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
    >
      <Image width={16} height={16} src={src} alt={alt} />
    </a>
  );
}
