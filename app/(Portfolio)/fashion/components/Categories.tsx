import Image from "next/image";

export default function Categories() {
  return (
    <div className=" w-full px-5 lg:px-20] flex justify-center">
      <div className=" bg-[#F0F0F0] rounded-[20px] p-10 pt-20 w-full lg:max-w-[1280px]">
        <h1 className=" uppercase font-montserrat text-[32px] text-center leading-[36px] ">
          Browse by dress style
        </h1>
        <div className=" mt-7 lg:mt-16 flex flex-col gap-4">
          <div className=" flex flex-col lg:flex-row gap-4">
            <div className=" grow-2 h-[190px] lg:h-[290px] bg-white rounded-[20px] relative overflow-hidden">
              <Image
                alt="casual"
                fill
                className=" object-cover lg:object-contain object-right"
                src={"/portfolio/fashion/image/categories/casual.png"}
              />
              <h1 className=" absolute top-4 left-6 text-2xl font-bold lg:text-4xl">
                Casual
              </h1>
            </div>
            <div className=" grow-3 h-[190px] lg:h-[290px] bg-white rounded-[20px] relative overflow-hidden">
              <Image
                alt="formal"
                fill
                className=" object-cover lg:object-contain object-right"
                src={"/portfolio/fashion/image/categories/formal.png"}
              />
              <h1 className=" absolute top-4 left-6 text-2xl font-bold lg:text-4xl">
                Formal
              </h1>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-4">
            <div className=" grow-3 h-[190px] lg:h-[290px] bg-white rounded-[20px] relative overflow-hidden">
              <Image
                alt="party"
                fill
                className=" object-cover lg:object-contain object-right"
                src={"/portfolio/fashion/image/categories/party.png"}
              />
              <h1 className=" absolute top-4 left-6 text-2xl font-bold lg:text-4xl">
                Party
              </h1>
            </div>
            <div className=" grow-2 h-[190px] lg:h-[290px] bg-white rounded-[20px] relative overflow-hidden">
              <Image
                alt="gym"
                fill
                className=" object-cover lg:object-contain object-right"
                src={"/portfolio/fashion/image/categories/gym.png"}
              />
              <h1 className=" absolute top-4 left-6 text-2xl font-bold lg:text-4xl">
                Gym
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
