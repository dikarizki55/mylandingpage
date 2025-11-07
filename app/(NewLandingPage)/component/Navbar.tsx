import Link from "next/link";
import Menu from "./Navbar/Menu";
import { IconMenu } from "./ui/Icon";

export default function Navbar() {
  const menu = [
    "thumbnail",
    "profile",
    "front-end",
    "full-stack",
    "3d artist",
    "contact",
  ];
  return (
    <div className=" w-full flex justify-between lg:justify-center lg:gap-14 items-center px-6 h-14 absolute z-100">
      <h3 className=" font-bold text-xl">DIKA</h3>
      {menu.map((item, idx) => (
        <Link
          href={`#${item}`}
          key={item + idx}
          className=" capitalize hidden lg:block text-sm"
        >
          {item}
        </Link>
      ))}
      <div className=" relative lg:hidden">
        <IconMenu />
        <Menu data={menu} />
      </div>
    </div>
  );
}
