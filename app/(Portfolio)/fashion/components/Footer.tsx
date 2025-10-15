import Image from "next/image";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconX,
} from "../../revolutclone/component/ui/Icon";
import { footerMenu } from "../data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" mt-[50px]">
      <div className=" w-full relative">
        <div className=" absolute w-full h-1/2 bg-[#F0F0F0] bottom-0"></div>
        <div className=" w-full px-5 flex justify-center">
          <Subscribe />
        </div>
      </div>
      <div className=" bg-[#F0F0F0] px-7 w-full pb-22 ">
        <FooterMenu />
        <div className=" flex items-center flex-col mt-4 gap-4 lg:justify-between lg:flex-row w-full max-w-[1280px] mx-auto">
          <span className=" text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </span>
          <div className=" flex gap-3">
            {["Visa", "Mastercard", "Paypal", "ApplePay", "GooglePay"].map(
              (item) => (
                <div
                  key={item}
                  className=" bg-white w-12 h-7.5 rounded-[6px] shadow-[0px_5px_9px_0px_rgba(183,183,183,0.08)] flex justify-center items-center"
                >
                  <Image
                    width={35}
                    height={12}
                    alt={item}
                    src={`/portfolio/fashion/icon/${item}.svg`}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div className=" w-full  bg-black relative p-8 rounded-[20px] flex flex-col gap-8 max-w-[1280px] lg:flex-row lg:justify-between lg:px-16 lg:py-9">
      <h1 className="font-montserrat lg:w-138 text-[32px] lg:text-[40px] text-white leading-[35px] lg:leading-[45px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className=" flex flex-col gap-3 lg:w-88">
        <div className=" flex gap-3 bg-white px-5 py-3 rounded-full relative">
          <Image
            alt="mail"
            width={17}
            height={13}
            src={"/portfolio/fashion/icon/mail.svg"}
            className=""
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className=" focus:outline-none w-full"
          />
        </div>
        <button className=" bg-white rounded-full px-5 py-3 text-center">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

function FooterMenu() {
  return (
    <div className=" flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-30 lg:max-w-[1280px] mx-auto py-8 border-b border-b-black/20">
      <div className=" lg:w-65">
        <h1 className=" uppercase font-montserrat text-[30px] -mt-3">
          SHOP.CO
        </h1>
        <p className=" text-black/60 mt-1">
          We have clothes that suits your style and which you&apos;re proud to
          wear. From women to men.
        </p>
        <div className=" flex gap-2 mt-5">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-black/20">
            <IconX className=" w-3 h-3" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black">
            <IconFacebook className=" w-5 h-5 text-white" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-black/20">
            <IconInstagram className=" w-4 h-4" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-black/20">
            <IconGithub className=" w-4 h-4" />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5 lg:flex-1 lg:flex lg:justify-between">
        {footerMenu.map((item) => (
          <div key={item.title} className=" flex flex-col gap-2">
            <h3 className=" text-sm tracking-[3px] uppercase">{item.title}</h3>
            <div className=" flex flex-col gap-2 text-black/60">
              {item.list.map((li) => (
                <Link
                  key={li.name}
                  href={li.url}
                  className=" text-sm cursor-pointer"
                >
                  {li.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
