export default function HeadTitle({
  subHeading = false,
  title,
  subtitle,
  customColor,
  darkMode = false,
}: {
  subHeading?: boolean;
  title: string;
  subtitle: string;
  customColor?: string;
  darkMode?: boolean;
}) {
  return (
    <div
      className={` w-full flex flex-col  ${
        subHeading ? "items-start lg:items-center" : "items-center"
      }`}
    >
      <h4
        className={`font-semibold text-[17px] lg:text-2xl ${
          darkMode ? "text-white" : ""
        }`}
      >
        {subtitle}
      </h4>
      <h1
        className={` font-bold ${
          subHeading ? "text-[28px] lg:text-[48px]" : "text-4xl lg:text-[64px] "
        } ${
          customColor || "bg-gradient-headline bg-clip-text text-transparent"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}
