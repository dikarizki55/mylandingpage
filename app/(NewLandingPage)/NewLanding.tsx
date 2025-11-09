import React from "react";
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
  IconGithub,
  IconHome,
  IconLinkedin,
  IconMail,
  IconMenuProduct,
  IconQR,
  IconWallet,
} from "./component/ui/Icon";
import ImageCardZigzag from "./component/ImageCardZigzag";
import Section from "./component/Section";
import Link from "next/link";

export default function NewLanding() {
  return (
    <div className="font-inter">
      <Navbar />
      <Section
        id="thumbnail"
        className="!gap-0 !lg:gap-0 relative !pt-20 !px-0"
      >
        <HeadTitle title="PORTFOLIO" subtitle="Thumbnail" />
        <Thumbnail />
      </Section>
      <Section id="profile" invBg>
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
      </Section>

      <Section id="front-end">
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
      </Section>
      <Section cont invBg>
        <HeadTitle title="Revolut Clone" subtitle="Front-End" subHeading />
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
      </Section>
      <Section cont>
        <HeadTitle title="3d Weather" subtitle="Front-End" subHeading />
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
      </Section>
      <Section id="full-stack">
        <HeadTitle title="Full-Stack" subtitle="My Portfolio" />
        <ImageCard imgSrc="/landingpage/newLanding/cafepos.jpg">
          I developed [[Full-Stack CafePos]], a web Full-Stack to order food by
          [[Scan QR]] on the table. I Built with [[Next.js, TypeScript, Tailwind
          CSS, Prisma, Supabase Database.]]
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
              imgSrc: "/landingpage/newLanding/cafepos/cafepos transaction.png",
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
      </Section>
      <Section invBg cont>
        <HeadTitle title="Money Journal" subtitle="Full-Stack" subHeading />
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
      </Section>
      <Section cont>
        <HeadTitle title="Map to 3d" subtitle="Full-Stack" subHeading />
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
      </Section>
      <Section customBg="bg-black" id="3d-artist">
        <HeadTitle
          title="3d-Artist"
          subtitle="My Portfolio"
          customColor="bg-gradient-white-red bg-clip-text text-transparent"
          darkMode
        />
        <ImageCard
          darkMode
          video
          imgSrc="https://zgqwlzpqthoiuspzjnin.supabase.co/storage/v1/object/public/mylandingpage/portfolio/watch.mp4"
        >
          I created a 3D product visualization of the [[Patek Philippe Aquanaut
          5968A-001]] as a practice in realistic modeling and rendering. This
          project was done entirely in [[Blender]], using the [[Cycles Render
          Engine]] to achieve accurate lighting, materials, and overall realism.
          The process involved detailed modeling based on the real product,
          custom texturing, and careful lighting setup to highlight the
          watch&apos;s [[iconic design and luxurious]] feel. My goal was to
          capture the essence of the original timepiece and present it in a
          clean, [[photorealistic]] visual.
        </ImageCard>
      </Section>
      <Section>
        <HeadTitle title="Woman Character" subtitle="My Portfolio" />
        <div className=" w-full lg:w-[500px]">
          <ImageCard
            video
            imgSrc="https://zgqwlzpqthoiuspzjnin.supabase.co/storage/v1/object/public/mylandingpage/portfolio/Woman%20Blender%20Character.mp4"
          >
            I developed [[3d Weather Front-End,]] a web Front End of 3d weather.
            I explore the potential idea that add [[3d Object]] inside a
            Website. I built with [[Next.js, R3F, Three.js, TypeScript, Tailwind
            CSS]]
          </ImageCard>
        </div>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">Contact me</h1>
        <div className=" px-8 py-6 rounded-[20px] flex flex-col gap-5 bg-white">
          {[
            {
              text: "dika55rizki@gmail.com",
              link: "mailto:dika55rizki@gmail.com",
              icon: <IconMail />,
            },
            {
              text: "github.com/dikarizki55",
              link: "https://github.com/dikarizki55",
              icon: <IconGithub />,
            },
            {
              text: "Dika Rizki",
              link: "https://www.linkedin.com/in/dika-rizki-7051061b0/",
              icon: <IconLinkedin />,
            },
          ].map((item, i) => (
            <Link key={i} href={item.link} className=" flex gap-5 items-center">
              {React.cloneElement(item.icon, {
                className: "aspect-square w-6",
              })}
              {item.text}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
