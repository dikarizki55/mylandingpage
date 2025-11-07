export default function HeadTitle({
  subHeading = false,
  subsubHeading = false,
  title,
  subtitle,
}: {
  subHeading?: boolean;
  subsubHeading?: boolean;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={` w-full flex flex-col  ${
        subsubHeading ? "items-start lg:items-center" : "items-center"
      }`}
    >
      <h4 className={`font-semibold text-[17px] lg:text-2xl`}>{subtitle}</h4>
      <h1
        className={` font-bold ${
          subHeading
            ? subsubHeading
              ? "text-[28px] lg:text-[48px]"
              : "text-[41px] lg:text-[64px] "
            : "text-4xl lg:text-[64px] "
        } bg-gradient-headline bg-clip-text text-transparent`}
      >
        {title}
      </h1>
    </div>
  );
}
