"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./component/Navbar";
import Image from "next/image";
import Carousel from "./component/Carousel";
import SecondNavbar from "./component/SecondNavbar";
import {
  cards,
  comodities,
  footerCard,
  footerLink,
  footerNav,
  saving,
  terms,
} from "./data";
import Content from "./component/Content";
import Link, { LinkWhite } from "./component/ui/Link";
import Cards from "./component/ui/Cards";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTiktok,
  IconX,
} from "./component/ui/Icon";

export default function RevolutClone() {
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.style.overflow = "";
    const handleScroll = () => {
      setIsTop(window.scrollY < 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTop) {
      setOpen(false);
    } else {
      const handler = setTimeout(() => {
        setOpen(true);
        window.scrollTo({ top: 8 });
      }, 1000);

      return () => clearTimeout(handler);
    }
  }, [isTop]);

  return (
    <div ref={scrollRef} className=" ">
      <div
        className={`w-full h-[101vh] flex justify-center items-center relative overflow-hidden`}
      >
        <AnimatePresence mode="wait">
          {isTop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className=" w-full h-full flex flex-col items-center relative z-10"
            >
              <Navbar />
              <motion.div
                initial={{ y: "-70vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-70vh" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className=" w-[120vh] mt-[18vh] flex flex-col gap-5 text-white"
              >
                <div className=" uppercase font-black text-[10vh]">
                  Change the way you money
                </div>
                <div className=" w-[33vh] font-medium">
                  Home or away, local or global — move freely between countries
                  and currencies. Sign up for free, in a tap.
                </div>
                <div className="w-fit text-white bg-black rounded-full px-6 py-3">
                  Download the App
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={` ${
            isTop ? "w-full h-full " : "w-[85vh] h-[70vh]"
          } transition-all duration-1000 absolute flex flex-col items-center justify-end gap-7`}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className=" absolute -z-10"
          >
            <div
              className={` w-screen h-[101vh] bg-no-repeat  bg-center bg-[url('/portfolio/revolutclone/image2.webp')]  ${
                isTop
                  ? "bg-[length:auto_130%] -translate-x-1/2 "
                  : "bg-[length:auto_50%] -translate-x-[50%] translate-y-[30vh]"
              } left-1/2 bottom-0 transition-all duration-1000 absolute`}
            ></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` absolute bottom-0 left-1/2 -translate-x-1/2 aspect-[3/4] transition-all duration-1000 outline-white -z-10 bg-cover bg-no-repeat bg-[url('/portfolio/revolutclone/framecenter.webp')] ${
              isTop
                ? "outline-3  h-[70vh] rounded-t-3xl"
                : "outline-1000 h-[40vh] rounded-3xl"
            }`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` absolute bottom-0 left-1/2 -translate-x-1/2 aspect-[3/4] transition-all duration-1000 outline-neutral-400 -z-10 ${
              isTop
                ? "outline-3  h-[70vh] rounded-t-3xl"
                : "outline-0 h-[40vh] rounded-3xl"
            }`}
          ></motion.div>
          <AnimatePresence mode="wait">
            {!isTop && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 50 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={` flex-1 flex flex-col justify-end gap-7 items-center w-[85vh]`}
                >
                  <div className="font-extrabold text-[6vh] uppercase">
                    Your salary, reimagined
                  </div>
                  <div className=" text-[2.1vh] text-center">
                    Spend smartly, send quickly, sort your salary automatically,
                    and watch your savings grow — all with YourBrand.
                  </div>

                  <div className=" text-white bg-black rounded-full px-6 py-3">
                    Move your salary
                  </div>
                </motion.div>
                <motion.div
                  initial={{ gap: "50vh", opacity: 0, width: "60vh" }}
                  animate={{ gap: "1vh", opacity: 1, width: "100%" }}
                  exit={{ gap: "50vh", opacity: 0, width: "60vh" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex items-center justify-center w-full overflow-clip`}
                >
                  <div className=" bg-[url('/portfolio/revolutclone/imageleft.webp')] bg-cover bg-no-repeat aspect-[3/4] h-[35vh] rounded-3xl relative overflow-clip">
                    <div className=" absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className=" w-full h-full bg-[url('/portfolio/revolutclone/frameleft.webp')] bg-cover bg-no-repeat relative"></div>
                  </div>
                  <div className="  aspect-[3/4] h-[40vh] rounded-3xl"></div>
                  <div className=" bg-[url('/portfolio/revolutclone/imageright.webp')] bg-cover bg-no-repeat aspect-[3/4] h-[35vh] rounded-3xl relative overflow-clip">
                    <div className=" absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className=" w-full h-full bg-[url('/portfolio/revolutclone/frameright.webp')] bg-cover bg-no-repeat relative"></div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
      {open && (
        <>
          <SecondNavbar />
          <div className=" w-full py-48 flex justify-center items-center">
            <div className="flex flex-col justify-start items-center gap-14">
              <div className="text-gray-600 text-3xl font-semibold">
                Join 60+ million customers worldwide and 11+ million in the UK
              </div>
              <div className="flex gap-6">
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="appstore"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/appstore.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    #3 downloaded finance app
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="trustpilot"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/trustpilot.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    4.6 out of 5 on Trustpilot
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="best payment"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/best-payment.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Best International Payments Provider 2025
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="customer satisfication"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/customer-satisfication.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Customer Satisfaction - Gold
                  </div>
                </div>
                <div className="w-36 inline-flex flex-col justify-start items-center gap-2">
                  <Image
                    alt="best mobile banking app"
                    width={150}
                    height={60}
                    src="/portfolio/revolutclone/certification/fintech.webp"
                  />
                  <div className="self-stretch text-center justify-start text-black text-base font-medium font-['Inter']">
                    Best Consumer Banking Mobile App 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel data={cards} />
          <Carousel data={saving} />
          <Content />
          <Carousel data={comodities} />
          <section className=" w-full text-black pt-15 pb-35 px-[15%] flex flex-col items-center">
            <h1 className=" text-5xl font-extrabold uppercase text-center">
              Join the 60+ million using Revolut
            </h1>
            <div className=" mt-8 px-5 py-2 bg-black font-medium text-white rounded-full">
              Download the app
            </div>
            <p className=" mt-20 text-xs font-light leading-5 tracking-wide">
              ¹FOR STOCK TRADING: Capital at risk.
              <br /> <br />
              Revolut Trading Ltd provides a non-advised execution-only service
              in shares. Revolut Trading Ltd does not provide investment advice
              or personal recommendations. You, as an individual investor, must
              make your own decisions, seeking independent professional advice
              if you are unsure as to the suitability or appropriateness of any
              investment for your individual circumstances or needs.
              <br /> <br />
              The value of investments can go up as well as down and you may
              receive less than your original investment or lose the value of
              your entire initial investment. Past performance and forecasts are
              not reliable indicators of future results. Currency rate
              fluctuations can adversely impact the overall returns on your
              original investment. Any trades outside of your monthly allowance
              are charged at 0.25% of the order amount if you are a Standard,
              Plus, Premium, or Metal customer, or at 0.12% of the order amount
              if you are an Ultra/Trading Pro customer.{" "}
              <Link>Read more on these fees.</Link> Further information about
              the investment service provided by Revolut Trading Ltd can be
              found in the <Link>Terms of Business</Link>,{" "}
              <Link>Risk Disclosure</Link>, and <Link>Invest FAQs</Link>.
              <br /> <br />
              Revolut Trading Ltd (No. 11567840) is a firm authorised and
              regulated by the Financial Conduct Authority (FRN: 933846). The
              registered address of Revolut Trading Ltd is at 7 Westferry
              Circus, Canary Wharf, London, England, E14 4HD.
              <br /> <br />
              ²FOR COMMODITIES: Capital at risk.
              <br />
              Revolut Ltd commodities service is not regulated by the FCA and it
              is not protected or covered by the Financial Ombudsman Service, or
              the Financial Services Compensation Scheme.
              <br /> <br />
              Revolut Ltd (No. 08804411) is also authorised by the FCA under the
              Electronic Money Regulations 2011 (Firm Reference 900562).
              Insurance related-products are arranged by Revolut Travel Ltd
              which is authorised by the FCA to undertake insurance distribution
              activities (FCA No: 780586) and by Revolut Ltd, an Appointed
              Representative of Revolut Travel Ltd in relation to insurance
              distribution activities.
              <br /> <br />
              If you would like to find out more about which Revolut entity you
              receive services from, or if you have any other questions, please
              reach out to us via the in-app chat in the Revolut app.
            </p>
          </section>
          <section className=" text-white bg-[#1A1C1F] w-full py-20 px-[15%]">
            <h3 className=" text-4xl font-medium">Choose your plan</h3>
            <div className=" mt-15 flex flex-col gap-6">
              <div className=" grid grid-cols-3 gap-6">
                {footerCard.slice(0, 3).map((item) => (
                  <Cards
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                ))}
              </div>
              <div className=" grid grid-cols-2 gap-6">
                {footerCard.slice(-2).map((item) => (
                  <Cards
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className=" mt-15 columns-[150px] gap-5 text-xs">
              {footerNav.map((item) => (
                <div
                  className=" flex flex-col gap-4.5 mb-7 break-inside-avoid"
                  key={item.title}
                >
                  <div className=" ">{item.title}</div>
                  {item.submenu.map((sub) => (
                    <div className=" text-[#8d969e]" key={sub}>
                      {sub}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className=" text-[#8d969e] w-full flex justify-between items-center">
              <div className=" text-white font-bold text-xl">YourBrand</div>
              <div className=" flex gap-7 items-center">
                <IconFacebook className="w-3.5" />
                <IconInstagram className="w-3.5" />
                <IconX className=" w-3.5" />
                <IconLinkedin className="w-3.5" />
                <IconTiktok className=" w-3.5" />
              </div>
            </div>
            <hr className="text-[#8d969e] mt-3" />
            <div className="text-[#8d969e] mt-10 text-xs">
              <div className=" w-full flex gap-20 items-start justify-between">
                <div className=" flex gap-2 items-center relative">
                  <div className=" relative">
                    <Image
                      alt="uk flag"
                      width={15}
                      height={15}
                      src={"/portfolio/revolutclone/GB.webp"}
                    />
                  </div>
                  United Kingdom
                </div>
                <div className=" flex-1 flex flex-wrap gap-3">
                  {terms.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className=" mt-15">© YourBrand Ltd 2025</div>
              <p className=" mt-7 leading-relaxed tracking-wide">
                To find out more about which Revolut entity you receive services
                from, please check our corresponding{" "}
                <LinkWhite>FAQ page</LinkWhite>. If you have any other
                questions, please reach out to us via the in-app chat in the
                Revolut app.
                <br />
                <br />
                Revolut Ltd is registered in England and Wales (No. 08804411),
                is authorised by the Financial Conduct Authority to offer
                e-money and payment services under the Electronic Money
                Regulations 2011 (FRN: 900562), and is registered with the
                Financial Conduct Authority to offer cryptocurrency services
                under the Money Laundering, Terrorist Financing and Transfer of
                Funds (Information on the Payer) Regulations 2017. Commodities
                services are provided by Revolut Ltd and are not regulated by
                the Financial Conduct Authority.
                <br />
                <br />
                Revolut Travel Ltd (No. 10618740) is authorised by the Financial
                Conduct Authority to undertake insurance distribution activities
                (FRN: 780586). Our insurance products are arranged by Revolut
                Travel Ltd and Revolut Ltd, an appointed representative of
                Revolut Travel Ltd.
                <br />
                <br />
                Investment services are provided by Revolut Trading Ltd (No.
                11567840), which is authorised and regulated by the Financial
                Conduct Authority (FRN: 933846).
                <br />
                <br />
                The registered address of Revolut Ltd, Revolut Travel Ltd, and
                Revolut Trading Ltd is at 7 Westferry Circus, Canary Wharf,
                London, England, E14 4HD. You can read more about our{" "}
                <LinkWhite>terms and policies here.</LinkWhite>
              </p>
              <div className=" mt-15">
                {footerLink.map((item) => (
                  <p key={item.title} className=" mt-4 leading-relaxed">
                    {item.title !== "" && (
                      <>
                        <LinkWhite className=" font-semibold">
                          {item.title}
                        </LinkWhite>
                        {": "}
                      </>
                    )}
                    {item.link.map((l, i) => (
                      <span key={l} className=" font-light">
                        {i !== 0 && " | "}
                        <LinkWhite>{l}</LinkWhite>
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
