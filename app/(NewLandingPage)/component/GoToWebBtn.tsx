import Link from "next/link";
import { IconGithub, IconMessage } from "./ui/Icon";

export default function GoToWebBtn({
  href,
  customText,
  github = false,
}: {
  href: string;
  customText?: string;
  github?: boolean;
}) {
  return (
    <Link
      href={href}
      className=" flex gap-4 lg:gap-7 items-center text-base lg:text-xl p-2 pl-6 lg:p-2.5 lg:pl-10 bg-[#E8E8ED]/72 rounded-full cursor-pointer"
    >
      {customText || github ? "Open Source" : "Go to Web"}
      {github && <IconGithub className="w-10 lg:w-14 aspect-square" />}
      {!github && (
        <IconMessage className=" text-[#0071E3] w-10 lg:w-14 aspect-square" />
      )}
    </Link>
  );
}
