"use client";

import Image from "next/image";

import { useSingleIntersectionObserver } from "@/hooks/useSingleIntersectionObserver";
import { useMoveBoxHighlight } from "@/hooks/useMoveBoxHighlight";
import Carousel from "./Carousel";
import Contact from "./Contact";
import { PageProps } from "../page";

export default function Home({ ...sharedProps }: PageProps) {
  const { elementRef, visibleId } = useSingleIntersectionObserver();
  const { boxStyle, navRef } = useMoveBoxHighlight(visibleId, 40);

  const navItems = ["Home", "About Me", "Portfolio", "Contact"];

  return (
    <div>
      <nav
        style={{
          top: visibleId === "home" ? "calc((100vh - 580px) / 2)" : "43px",
          left: visibleId === "home" ? "calc((100vw - 1110px) / 2)" : "50vw",
          transform: visibleId === "home" ? "" : "translate(-50%,0)",
        }}
        className=" fixed z-20 gap-14 list-none flex font-bold text-base text-white top-[95px] transition-all duration-1000"
      >
        <div
          className=" absolute top-0 border w-[92px] h-[30px] transition-all duration-750 rounded-full bg-[rgba(255,255,255,0.1)] -z-10 backdrop-blur-sm"
          style={{
            left: boxStyle.left,
            width: boxStyle.width,
            top: "53%",
            transform: "translate(0,-50%)",
          }}
        ></div>
        {navItems.map((name) => {
          const slug = name.toLowerCase().replace(/\s+/g, "");
          return (
            <li
              className=" relative z-10"
              key={slug}
              ref={(el) => {
                navRef.current[slug] = el;
              }}
            >
              <a href={`#${slug}`}>{name}</a>
            </li>
          );
        })}
      </nav>
      <section
        id="home"
        className=" w-full h-screen bg-[#1A1A1A] flex items-center justify-center"
        ref={(el) => {
          elementRef.current[0] = el;
        }}
      >
        <div className=" absolute left-0 top-0 w-[50%] -z-0 h-full bg-[linear-gradient(to_right,rgba(71,71,71,0.5),rgba(71,71,71,0))]"></div>
        <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
        <div className="relative z-1 w-[1140px] h-[582px] flex">
          <div className=" w-full h-full flex flex-col justify-between">
            <div></div>
            <p className=" text-white font-bold text-5xl leading-normal">
              {sharedProps.home.title}
            </p>
            <div className="w-[330px] flex flex-col gap-8">
              <div className="flex justify-between">
                <img
                  alt="nextjs"
                  src="/landingpage/Next js logo.png"
                  className=" w-[80px] h-auto object-contain"
                />
                <img
                  alt="express"
                  src="/landingpage/express logo 1.png"
                  className=" w-[80px] h-auto object-contain"
                />
                <img
                  alt="nodejs"
                  src="/landingpage/nodejsLight 1.png"
                  className=" w-[80px] h-auto object-contain"
                />
              </div>
              <div className="w-full flex justify-center">
                <img
                  alt="blender"
                  src="/landingpage/blender logo.png"
                  className=" w-[135px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className=" relative w-[745] h-[582] rounded-[63] overflow-hidden">
            <Image
              priority={true}
              src={sharedProps.home.image}
              alt="myphoto"
              fill
              sizes="max-width: 768px"
              className=" object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="aboutme"
        className=" w-full h-[200vh] bg-[#1A1A1A]"
        ref={(el) => {
          elementRef.current[1] = el;
        }}
      >
        <div className=" w-full h-screen flex justify-center items-center">
          <div className=" absolute w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <div className=" relative w-[1162] h-[536] flex flex-col gap-10 items-center z-10">
            <div className="w-full h-full flex items-center justify-center gap-[75px]">
              <div className="w-[500px] h-[460px] rounded-[31px] mt-4 overflow-hidden relative">
                <Image
                  src={sharedProps.aboutme.fullstack.image}
                  alt="fullstackabout"
                  fill
                  sizes="max-width: 768px"
                  className="object-cover object-left"
                />
              </div>
              <div className=" text-white flex flex-col gap-12 w-[681]">
                <h1 className=" font-bold text-[49px]">
                  {sharedProps.aboutme.fullstack.title}
                </h1>
                <p className=" font-light text-[#AFAFAF] text-[20px] leading-[24px]">
                  {sharedProps.aboutme.fullstack.description}
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-[670]">
                <Image
                  height={40}
                  width={110}
                  alt="nextjs"
                  src="/landingpage/Next js logo.png"
                  style={{ width: "auto" }}
                  className="h-auto object-contain"
                />
                <Image
                  width={110}
                  height={40}
                  alt="express"
                  src="/landingpage/express logo 1.png"
                  style={{ width: "auto" }}
                  className="h-auto object-contain"
                />
                <Image
                  width={110}
                  height={40}
                  alt="nodejs"
                  src="/landingpage/nodejsLight 1.png"
                  style={{ width: "auto" }}
                  className="h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-screen flex justify-center items-center">
          <div className=" absolute w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <div className=" relative z-10 w-[1162] h-[536] mt-10 flex flex-col items-center">
            <div className="w-full h-full flex justify-center gap-[75px]">
              <div className="w-[500px] h-[460px] rounded-[31px] mt-4 overflow-hidden relative bg-black">
                <Image
                  src={sharedProps.aboutme.artist.image}
                  alt="fullstackabout"
                  fill
                  sizes="max-width: 768px"
                  className=" object-cover"
                />
              </div>
              <div className=" text-white flex flex-col gap-12 w-[681]">
                <h1 className=" font-bold text-[49px]">
                  {sharedProps.aboutme.artist.title}
                </h1>
                <p className=" font-light text-[#AFAFAF] text-[20px] leading-[24px]">
                  {sharedProps.aboutme.artist.description}
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-center w-[670]">
                <Image
                  width={150}
                  height={40}
                  alt="blender"
                  src="/landingpage/blender logo.png"
                  style={{ width: "auto" }}
                  className="h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className=" w-full  bg-[#1A1A1A]"
        ref={(el) => {
          elementRef.current[2] = el;
        }}
      >
        <div className="relative w-full h-screen flex items-center justify-center z-0">
          <div className=" absolute left-0 top-0 w-[50%] -z-0 h-full bg-[linear-gradient(to_right,rgba(71,71,71,0.5),rgba(71,71,71,0))]"></div>
          <div className="relative z-10 w-full h-[550] flex flex-col gap-12">
            <h1 className=" text-white font-bold text-[50px] text-center">
              {sharedProps.portfolio.fullstack.title}
            </h1>
            <Carousel
              width={600}
              height={400}
              items={sharedProps.portfolio.fullstack.items}
            ></Carousel>
          </div>
        </div>
        <div className="relative w-full h-screen flex items-center justify-center z-0">
          <div className=" absolute left-0 top-0 w-[50%] -z-0 h-full bg-[linear-gradient(to_right,rgba(71,71,71,0.5),rgba(71,71,71,0))]"></div>
          <div className="relative z-10 w-full h-[550] flex flex-col gap-12">
            <h1 className=" text-white font-bold text-[50px] text-center">
              {sharedProps.portfolio.artist.title}
            </h1>
            <Carousel
              width={350}
              height={500}
              items={sharedProps.portfolio.artist.items}
            ></Carousel>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className=" relative w-full h-screen bg-[#1A1A1A] flex items-center justify-center"
        ref={(el) => {
          elementRef.current[3] = el;
        }}
      >
        <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
        <Contact></Contact>
      </section>
    </div>
  );
}
