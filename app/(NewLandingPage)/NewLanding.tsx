import Image from "next/image";
import Navbar from "./component/Navbar";
import "./style.css";
import { pageProps } from "../data";
import Thumbnail from "./component/Thumbnail";
import BoldP from "./component/BoldP";
import CarouselVertical from "./component/CarouselVertical";
import ImageCard from "./component/ImageCard";
import HeadTitle from "./component/HeadTitle";
import GoToWebBtn from "./component/GoToWebBtn";
import CarouselRadio from "./component/CarouselRadio";
import {
  IconCart,
  IconHome,
  IconMenuProduct,
  IconQR,
  IconWallet,
} from "./component/ui/Icon";
import ImageCardZigzag from "./component/ImageCardZigzag";

export default function NewLanding() {
  return (
    <div className="font-inter">
      <Navbar />
      <section
        id="thumbnail"
        className=" w-full pt-20 lg:pt-25 pb-30 lg:py-20 flex flex-col items-center gap-0 lg:gap-0 relative bg-gradient-section"
      >
        <HeadTitle title="PORTFOLIO" subtitle="Thumbnail" />
        <Thumbnail />
      </section>
      <section
        id="profile"
        className=" w-full flex flex-col items-center pt-9 pb-9 px-9 gap-8 lg:px-30 lg:gap-15 bg-gradient-section-inv"
      >
        <h1 className=" font-bold text-4xl bg-gradient-title bg-clip-text text-transparent lg:text-[64px]">
          PORTFOLIO
        </h1>
        <div className=" flex flex-col gap-8 items-center w-full lg:flex-row-reverse lg:gap-[56px]">
          <Image
            alt="myPhoto"
            src={pageProps.home.image}
            width={592}
            height={725}
            className=" brightness-115 saturate-95 rounded-[38px] lg:w-full"
          />
          <div className=" flex flex-col gap-8 items-center w-full">
            <BoldP>
              Hi I&apos;m Dika a [[Full-Stack]] Developer with a strong focus on
              [[Front-End]] development. and a background as a [[3D Artist.]]
            </BoldP>
            <div className=" flex flex-col items-center gap-8 lg:max-w-[368px]">
              <div className=" flex gap-8 relative items-center">
                <div className=" relative">
                  <Image
                    alt="Nextjs"
                    src={"/landingpage/logo/NextjsBlack.png"}
                    width={90.1}
                    height={18.1}
                  />
                </div>
                <div className=" relative">
                  <Image
                    alt="express"
                    src={"/landingpage/logo/expressblack.png"}
                    width={97.7}
                    height={32.5}
                  />
                </div>
                <div className=" relative">
                  <Image
                    alt="nodejs"
                    src={"/landingpage/logo/nodejsBlack.png"}
                    width={100.2}
                    height={30}
                  />
                </div>
              </div>
              <div className=" flex gap-8 items-center relative">
                <div className=" relative">
                  <Image
                    alt="framerMotion"
                    src={"/landingpage/logo/framemotionBlack.png"}
                    width={37.6}
                    height={36.2}
                  />
                </div>
                <div className=" relative">
                  <Image
                    alt="blender"
                    src={"/landingpage/logo/blender.png"}
                    width={135}
                    height={42}
                  />
                </div>
                <div className=" relative">
                  <Image
                    alt="Three.js"
                    src={"/landingpage/logo/Three.js_Icon 1.png"}
                    width={41}
                    height={41}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="front-end"
        className=" w-full flex flex-col items-center gap-20 px-9 py-10 lg:py-18 bg-gradient-section"
      >
        <HeadTitle title="Front-End" subtitle="My Portfolio" />
        <ImageCard imgSrc="/landingpage/newLanding/fashion.jpg">
          I developed [[Fashion Front-End,]] a web Front End to show the catalog
          product. I built [[from figma]] free template. Built with [[Next.js,
          TypeScript, Tailwind CSS]]
        </ImageCard>
        <CarouselVertical
          data={[
            {
              title: "Home",
              imgSrc: "/landingpage/newLanding/fashionMobile.png",
              description: `A clean and responsive landing interface showcasing fashion products with category highlights and featured collections. With [[FramerMotion]] that interface look [[smooth]] and [[modern]] browsing experience.`,
            },
            {
              title: "Detail",
              imgSrc: "/landingpage/newLanding/fashionMobileDetail.png",
              description: `An elegant product view displaying images, sizes, price, and description with a [[minimal layout.]] Designed for [[easy navigation]] and a refined shopping experience that reflects a [[modern fashion brand.]]`,
            },
          ]}
        />
        <div className=" flex flex-col gap-5 items-center">
          <GoToWebBtn href="/fashion" />
          <GoToWebBtn
            github
            href="https://github.com/dikarizki55/mylandingpage/tree/master/app/(Portfolio)/fashion"
          />
        </div>
        <HeadTitle
          title="Revolut Clone"
          subtitle="Front-End"
          subHeading
          subsubHeading
        />
        <ImageCard imgSrc="/landingpage/newLanding/revolutclone.jpg">
          I developed [[Revolut Clone Front-End,]] a web Front End of Landing
          Page. I built with [[Next.js, TypeScript, Tailwind CSS]]
        </ImageCard>
        <div className=" flex flex-col gap-5 items-center">
          <GoToWebBtn href="/revolutclone" />
          <GoToWebBtn
            github
            href="https://github.com/dikarizki55/mylandingpage/tree/master/app/(Portfolio)/revolutclone"
          />
        </div>
        <HeadTitle
          title="3d Weather"
          subtitle="Front-End"
          subHeading
          subsubHeading
        />
        <ImageCard imgSrc="/landingpage/newLanding/weather.jpg">
          I developed [[3d Weather Front-End,]] a web Front End of 3d weather. I
          explore the potential idea that add [[3d Object]] inside a Website. I
          built with [[Next.js, R3F, Three.js, TypeScript, Tailwind CSS]]
        </ImageCard>
        <div className=" flex flex-col items-center gap-5">
          <GoToWebBtn href="/revolutclone" />
          <GoToWebBtn
            github
            href="https://github.com/dikarizki55/webtool3d/tree/main/app/weather"
          />
        </div>
      </section>
      <section className=" w-full " id="full-stack">
        <div className=" w-full px-9 flex flex-col items-center gap-20 py-20 bg-gradient-section">
          <HeadTitle title="Full-Stack" subtitle="My Portfolio" />
          <ImageCard imgSrc="/landingpage/newLanding/cafepos.jpg">
            I developed [[Full-Stack CafePos]], a web Full-Stack to order food
            by [[Scan QR]] on the table. I Built with [[Next.js, TypeScript,
            Tailwind CSS, Prisma, Supabase Database.]]
          </ImageCard>
          <CarouselRadio
            data={[
              {
                title: "Home",
                imgSrc: "/landingpage/newLanding/cafepos/cafepos home.png",
                description:
                  "Fresh Interface and smooth Animation. Easiest way to your customer to order the food",
                iconSvg: <IconHome />,
              },
              {
                title: "Scan QR",
                imgSrc: "/landingpage/newLanding/cafepos/cafepos scan.png",
                description:
                  "Just scan QR on the table and voila! the customers can self order",
                iconSvg: <IconQR />,
              },
              {
                title: "Menu Details",
                imgSrc: "/landingpage/newLanding/cafepos/cafepos detail.png",
                description:
                  "Simple and fully informative details of menu. With interactive interface.",
                iconSvg: <IconMenuProduct />,
              },
              {
                title: "Cart Menu",
                imgSrc: "/landingpage/newLanding/cafepos/cafepos cart.png",
                description:
                  "Organize the order with some short steps and effective.",
                iconSvg: <IconCart />,
              },
              {
                title: "Transaction",
                imgSrc:
                  "/landingpage/newLanding/cafepos/cafepos transaction.png",
                description:
                  "Online receipt that have animated information of status order.",
                iconSvg: <IconWallet />,
              },
            ]}
          />
          <div className=" flex flex-col gap-5 items-center">
            <GoToWebBtn href="https://cafepos-git-main-dika-rizkis-projects.vercel.app/?table=2" />
            <GoToWebBtn
              href="https://cafepos-git-main-dika-rizkis-projects.vercel.app/admin"
              customText="Go to Admin Page"
            />
            <GoToWebBtn github href="https://github.com/dikarizki55/cafepos" />
          </div>
        </div>
        <div className=" w-full bg-gradient-section-inv px-9 py-10 flex flex-col gap-10 items-center">
          <HeadTitle
            title="Money Journal"
            subtitle="Full-Stack"
            subHeading
            subsubHeading
          />
          <ImageCardZigzag
            data={[
              {
                img: "/landingpage/newLanding/moneyjournal/moneyjournal home.jpg",
                description:
                  "Money Journal is a multi-user web application I built to help users track their daily income and expenses efficiently. Developed with [[Next.js (App Router), Tailwind CSS, shadcn/ui, and Supabase]], the app features [[Google OAuth login]] powered by Auth.js.",
              },
              {
                img: "/landingpage/newLanding/moneyjournal/moneyjournal input.jpg",
                description:
                  "Simple and multifunction UI. Minimalist and interactive UI UX with [[Shadcn/ui]]",
              },
              {
                img: "/landingpage/newLanding/moneyjournal/moneyjournal ai.jpg",
                description:
                  " And can easily add data with [[AI]] (add data with JSON type)",
              },
            ]}
          />
          <div className=" flex flex-col gap-5 items-center">
            <GoToWebBtn href="https://moneyjournal-git-main-dika-rizkis-projects.vercel.app/" />
            <GoToWebBtn
              github
              href="https://github.com/dikarizki55/moneyjournal"
            />
          </div>
        </div>
        <div className=" w-full bg-gradient-section px-9 py-10 flex flex-col gap-10 items-center">
          <HeadTitle
            title="Map to 3d"
            subtitle="Full-Stack"
            subHeading
            subsubHeading
          />
          <ImageCardZigzag
            data={[
              {
                img: "/landingpage/newLanding/mapto3d/mapto3d.jpg",
                description:
                  "Map to 3d is a web application I built to generate simple 3D buildings from a selected map area. Developed with [[Next.js (App Router), R3F, Three.JS, Leafletmap, Tailwind CSS]]",
              },
              {
                img: "/landingpage/newLanding/mapto3d/mapto3d draw.jpg",
                description: "Just draw Rectangle Area in the maps",
              },
              {
                img: "/landingpage/newLanding/mapto3d/mapto3d 3d.jpg",
                description:
                  "And it will be generate 3d building. The color of building can change as your preference",
              },
            ]}
          />
          <div className=" flex flex-col gap-5 items-center">
            <GoToWebBtn href="https://webtool3d.vercel.app/maptothreed" />
            <GoToWebBtn
              github
              href="https://github.com/dikarizki55/webtool3d/tree/main/app/maptothreed"
            />
          </div>
        </div>
      </section>
      <section className=""></section>
    </div>
  );
}
