import Image from "next/image";

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Cards({
  className: cn,
  title,
  subtitle,
  description,
  ...rest
}: Props) {
  return (
    <div
      className={` px-6 py-6 text-black bg-white rounded-3xl flex flex-col justify-between relative ${cn}`}
      {...rest}
    >
      <div className=" flex flex-col gap-2">
        <div className=" font-medium text-2xl">{title}</div>
        <div className=" font-medium">{subtitle}</div>
        <div className=" text-sm font-light text-neutral-500 tracking-wide leading-5.5">
          {description}
        </div>
      </div>
      <Image
        alt="right arrow"
        width={30 * 0.8}
        height={40 * 0.8}
        src="/portfolio/revolutclone/rightArrow.svg"
        className=" self-end mt-6"
      />
    </div>
  );
}
