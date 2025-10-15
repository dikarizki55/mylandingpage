import Image, { getImageProps } from "next/image";

export default function Header() {
  const common = { alt: "Banner", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 663,
    quality: 80,
    src: "/portfolio/fashion/image/bannerdesktop.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 390,
    height: 853,
    quality: 80,
    src: "/portfolio/fashion/image/bannermobile.jpg",
  });
  return (
    <div>
      <div className=" relative w-full overflow-clip">
        <picture className=" w-full">
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(max-width: 1024px)" srcSet={mobile} />
          <img
            {...rest}
            alt="banner"
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
        <div className=" absolute top-0 px-5 py-7 lg:p-25 lg:w-200 ">
          <h1 className=" font-mont-serrat font-bold text-4xl lg:text-[64px] leading-[36px] lg:leading-[64px] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className=" text-black/60 mt-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className=" bg-black text-white font-medium rounded-full py-4 w-full mt-6 cursor-pointer lg:w-53">
            Shop Now
          </button>
          <div className=" mt-5 lg:-ml-10 mx-auto grid grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center px-7 py-1.5">
              <h2 className=" font-bold text-2xl lg:text-[40px]">200+</h2>
              <div className=" -mt-1.5 text-xs text-black/60 lg:text-base">
                International Brands
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-l-neutral-300 px-7 py-1.5">
              <h2 className=" font-bold text-2xl lg:text-[40px]">2000+</h2>
              <div className=" -mt-1.5 text-xs text-black/60 lg:text-base">
                High-Quality Products
              </div>
            </div>
            <div className=" flex flex-col items-center col-span-2 lg:col-span-1 px-7 py-1.5 lg:border-l lg:border-l-neutral-300">
              <h2 className=" font-bold text-2xl lg:text-[40px]">30.000+</h2>
              <div className=" -mt-1.5 text-xs text-black/60 lg:text-base">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black py-10 lg:px-20 flex flex-wrap justify-center gap-2 lg:flex-nowrap lg:justify-between">
        {["versace", "zara", "gucci", "prada", "calvinklein"].map((item) => (
          <div
            key={item}
            className={`relative  h-[25px] ${
              item === "zara"
                ? "w-[50px]"
                : item === "gucci"
                ? "w-[100px]"
                : "w-[135px]"
            }`}
          >
            <Image
              alt={item}
              fill
              className=" object-contain"
              src={`/portfolio/fashion/image/logo/${item}.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
