export default function Section({
  className,
  id,
  children,
  invBg,
  customBg,
  cont = false,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
  invBg?: boolean;
  customBg?: string;
  cont?: boolean;
}) {
  return (
    <section
      id={id}
      className={` w-full px-9  ${
        cont ? "pb-10 lg:pb-30" : "py-10 lg:py-30"
      } flex flex-col items-center gap-10 lg:gap-20 ${
        customBg
          ? customBg
          : invBg
          ? "bg-gradient-section-inv"
          : "bg-gradient-section"
      } ${className || ""}`}
    >
      {children}
    </section>
  );
}
