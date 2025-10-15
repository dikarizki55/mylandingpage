import Image from "next/image";

type Data = {
  title: string;
  price: string;
  discountPrice: string;
  src: string;
};

export default function ItemSection({
  title,
  data,
}: {
  title: string;
  data: Data[];
}) {
  // Group items in chunks of 3
  const chunked: Data[][] = data.reduce((acc: Data[][], _, i) => {
    if (i % 3 === 0) acc.push(data.slice(i, i + 3));
    return acc;
  }, []);

  return (
    <div className="w-full">
      <div className=" w-full items-center flex justify-between">
        <h1 className=" text-2xl lg:text-5xl">{title}</h1>
        <div className=" flex gap-2">
          <button className=" w-10 h-10 text-xl font-light leading-0 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-all duration-300 cursor-pointer">
            ←
          </button>
          <button className=" w-10 h-10 text-xl font-light leading-0 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-all duration-300 cursor-pointer">
            →
          </button>
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        {chunked.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col lg:flex-row gap-4">
            {row.map((item) => (
              <Item
                key={`${rowIndex}-${item.title}`} // Using row index and title for unique key
                title={item.title}
                price={item.price}
                discountPrice={item.discountPrice}
                src={item.src}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({
  title = "Leader Bag",
  price = "$943",
  discountPrice = "$532",
  src = "/bag/bag1.png",
}) {
  return (
    <div className=" p-4 w-full h-105 flex flex-col bg-neutral-100 rounded-3xl overflow-clip">
      <div className=" w-full flex justify-between font-light text-neutral-600">
        <div>
          <div className=" lg:text-xl">{title}</div>
          <div className=" mt-2 flex gap-2 px-3 py-1 rounded-lg border-2 border-red-500">
            <span>{price}</span>
            <span className=" text-red-500">{discountPrice}</span>
          </div>
        </div>
        <div className=" flex gap-2">
          <button className="w-10 h-10 bg-white rounded-full">
            <Image
              width={16}
              height={16}
              alt="like"
              src="/portfolio/bag/like.svg"
              className=" w-4 m-auto"
            />
          </button>
          <button className="w-10 h-10 bg-white rounded-full">
            <Image
              width={16}
              height={16}
              alt="cart"
              src="/portfolio/bag/cart.svg"
              className=" w-4 m-auto"
            />
          </button>
        </div>
      </div>
      <div className=" w-full p-10 lg:p-5 h-full">
        <div className=" w-full h-full relative flex justify-center">
          <Image
            fill
            src={src}
            alt={title}
            className=" h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
