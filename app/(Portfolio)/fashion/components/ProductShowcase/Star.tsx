import Image from "next/image";

export default function Star({ rate, size }: { rate: number; size: number }) {
  const maxRate = 5;
  const fullStar = Math.floor(rate);
  const halfStar = fullStar !== rate;
  const emptyStar = maxRate - fullStar - (halfStar ? 1 : 0);
  return (
    <>
      {Array.from({ length: fullStar }).map((_, i) => (
        <Image
          key={i}
          alt="star"
          width={size}
          height={size}
          src={"/portfolio/fashion/icon/star.svg"}
        />
      ))}
      {halfStar && (
        <div className=" relative">
          <div style={{ width: size, height: size }} className={`relative`}>
            <Image
              alt="star"
              fill
              className=" object-contain opacity-30"
              src={"/portfolio/fashion/icon/star.svg"}
            />
          </div>
          <div
            style={{ width: size / 2, height: size }}
            className={`top-0 left-0 absolute overflow-hidden`}
          >
            <div style={{ width: size, height: size }} className={` relative`}>
              <Image
                alt="star"
                fill
                className=" object-contain"
                src={"/portfolio/fashion/icon/star.svg"}
              />
            </div>
          </div>
        </div>
      )}
      {Array.from({ length: emptyStar }).map((_, i) => (
        <Image
          key={i}
          alt="star"
          width={size}
          height={size}
          className=" opacity-30"
          src={"/portfolio/fashion/icon/star.svg"}
        />
      ))}
    </>
  );
}
