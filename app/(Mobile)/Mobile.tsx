"use client";

import { useMoveBoxHighlight } from "@/hooks/useMoveBoxHighlight";
import { useSingleIntersectionObserver } from "@/hooks/useSingleIntersectionObserver";
import Image from "next/image";
import CarouselMobile from "./CarouselMobile";
import ContactMobile from "./ContactMobile";

const page = () => {
  const { elementRef, visibleId } = useSingleIntersectionObserver();
  const { boxStyle, navRef } = useMoveBoxHighlight(visibleId, 40);

  const navItems = [
    { section: "home", src: "/landingpage/mobile/home.svg" },
    { section: "aboutme", src: "/landingpage/mobile/aboutme.svg" },
    { section: "portfolio", src: "/landingpage/mobile/portfolio.svg" },
    { section: "contact", src: "/landingpage/mobile/contact.svg" },
  ];

  return (
    <div className=" text-white">
      <section
        id="home"
        ref={(el) => {
          elementRef.current[0] = el;
        }}
        className=" relative w-full min-h-[800px] h-screen bg-[#1a1a1a] flex flex-col gap-16 items-center justify-center"
      >
        <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
        <div className=" w-2xs flex flex-col gap-9 -mt-10">
          <div className=" relative w-full h-[360px] overflow-hidden rounded-[40px]">
            <Image
              priority={true}
              src="/landingpage/myphotos.png"
              alt="myphoto"
              fill
              sizes="max-width: 300px"
              className="object-cover"
            />
          </div>
          <h1 className=" font-bold text-2xl">
            Hi, I'm Dika – <br />
            a Full Stack Developer <br />& 3D Artist.
          </h1>
        </div>
        <div className=" flex flex-col gap-6 items-center">
          <div className=" flex gap-7 justify-center items-center">
            <div className=" relative w-20 h-5">
              <Image
                src="/landingpage/Next js logo.png"
                alt="nextjs"
                sizes="max-width: 200px"
                fill
                className=" object-contain"
              ></Image>
            </div>
            <div className=" relative w-[75px] h-10">
              <Image
                src="/landingpage/express logo 1.png"
                alt="express"
                sizes="max-width: 200px"
                fill
                className=" object-contain"
              ></Image>
            </div>
            <div className=" relative w-[75px] h-10">
              <Image
                src="/landingpage/nodejsLight 1.png"
                alt="nodejs"
                sizes="max-width: 200px"
                fill
                className=" object-contain"
              ></Image>
            </div>
          </div>
          <div className=" relative w-[135px] h-[60px]">
            <Image
              src="/landingpage/blender logo.png"
              alt="blender"
              sizes="max-width: 200px"
              fill
              className=" object-contain"
            ></Image>
          </div>
        </div>
      </section>
      <section
        id="aboutme"
        ref={(el) => {
          elementRef.current[1] = el;
        }}
        className=" relative bg-[#1a1a1a]"
      >
        <div className=" relative w-full flex flex-col gap-8 items-center py-12">
          <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <div className=" relative w-[315px] h-[370px] rounded-[40px] overflow-hidden flex-none">
            <Image
              src="/landingpage/fullstacktest.png"
              alt="fullstack"
              fill
              sizes="max-height: 380px"
              className=" object-cover"
            ></Image>
          </div>
          <div className=" relative text-white w-[320px]">
            <h1 className=" text-3xl font-bold">Full Stack Developer</h1>
            <p className=" font-light text-sm text-[#afafaf] mt-4 leading-4">
              Hi, I'm Dika Rizki, a passionate Full Stack Developer with a fresh
              perspective and a strong drive to build meaningful web
              experiences. I specialize in modern JavaScript technologies like
              Next.js, React, and Express, and I enjoy crafting scalable and
              visually clean web applications. <br /> <br />
              Though I'm a fresh graduate, I've built several portfolio projects
              including SaaS-style websites that reflect both technical
              structure and design thinking. I love working remotely and
              constantly push myself to learn new technologies and stay
              up-to-date with the web ecosystem. <br /> <br />
              My approach combines logical architecture with visual
              clarity—bridging the gap between frontend experience and backend
              performance.
            </p>
          </div>
          <div className=" relative flex gap-8">
            <div className=" relative w-19 h-5">
              <Image
                src="/landingpage/Next js logo.png"
                alt="nextjs"
                sizes="max-width: 80px"
                fill
                className=" object-contain"
              ></Image>
            </div>
            <div className="relative w-19 h-7">
              <Image
                src="/landingpage/express logo 1.png"
                alt="express"
                sizes="max-width: 200px"
                fill
                className=" object-contain"
              ></Image>
            </div>
            <div className="relative w-19 h-7">
              <Image
                src="/landingpage/nodejsLight 1.png"
                alt="nodejs"
                sizes="max-width: 200px"
                fill
                className=" object-contain"
              ></Image>
            </div>
          </div>
        </div>
        <div className=" relative w-full flex flex-col gap-8 items-center py-12">
          <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <div className=" relative w-[315px] h-[370px] rounded-[40px] overflow-hidden flex-none">
            <Image
              src="/landingpage/fullstacktest.png"
              alt="fullstack"
              fill
              sizes="max-height: 380px"
              className=" object-cover"
            ></Image>
          </div>
          <div className=" relative text-white w-[320px]">
            <h1 className=" text-3xl font-bold">3d Artist</h1>
            <p className=" font-light text-sm text-[#afafaf] mt-4 leading-4">
              I'm Dika Rizki, a 3D Artist with hands-on experience in both
              motion graphics and architectural visualization. Using Blender as
              my main tool, I bring concepts to life through storytelling-driven
              visuals that connect with audiences.
              <br /> <br />
              I work remotely, collaborating on projects that require both
              creative direction and technical execution. Whether it’s animating
              dynamic scenes or designing immersive environments, I aim to craft
              visuals that feel intentional and engaging.
              <br /> <br />
              Currently, I’m focused on sharpening my skills and exploring new
              storytelling techniques through 3D.
            </p>
          </div>
          <div className=" relative flex gap-8">
            <div className=" relative w-[135px] h-[35px] -mt-3">
              <Image
                src="/landingpage/blender logo.png"
                alt="blender"
                sizes="max-width: 150px"
                fill
                className=" object-contain"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        ref={(el) => {
          elementRef.current[2] = el;
        }}
        className=" relative bg-[#1a1a1a]"
      >
        <div className=" relative w-full h-screen  min-h-[800px] pt-20">
          <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <h1
            style={{ marginLeft: "calc((100vw - 310px) / 2)" }}
            className=" text-white font-bold text-5xl"
          >
            Fullstack Developer
          </h1>
          <CarouselMobile
            items={[
              {
                src: "/landingpage/fullstacktest.png",
                title: "satu",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij\n\nanvwo\nreig\njfer\nog ewjogijreo",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "dua",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "tiga",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "fullstacktest",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
            ]}
          ></CarouselMobile>
        </div>
        <div className=" relative w-full h-screen  min-h-[800px] pt-20">
          <div className=" absolute left-0 top-0 w-full -z-0 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(50,50,50,0.8))]"></div>
          <h1
            style={{ marginLeft: "calc((100vw - 310px) / 2)" }}
            className=" text-white font-bold text-5xl"
          >
            3d Artist
          </h1>
          <CarouselMobile
            items={[
              {
                src: "/landingpage/fullstacktest.png",
                title: "satu",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij\n\nanvwo\nreig\njfer\nog ewjogijreo",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "dua",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "tiga",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
              {
                src: "/landingpage/fullstacktest.png",
                title: "fullstacktest",
                description:
                  "ewajgoiejwejgbreighu\noerigiurhgssiurh\n\njewpaogijreoij",
                link: "/dicoba",
              },
            ]}
          ></CarouselMobile>
        </div>
      </section>

      <section
        id="contact"
        ref={(el) => {
          elementRef.current[3] = el;
        }}
        className=" w-full bg-[#1a1a1a]"
      >
        <ContactMobile></ContactMobile>
      </section>

      <nav className=" fixed bottom-0 h-19 rounded-t-2xl w-full bg-[#ffffff0d] backdrop-blur-sm flex justify-center items-center gap-12">
        <div
          className=" absolute border border-white rounded-full transition-all duration-1000"
          style={{
            width: boxStyle.width - 20,
            height: boxStyle.width - 20,
            left: boxStyle.left + 10,
            top: "52%",
            transform: "translate(0,-50%)",
          }}
        ></div>
        {navItems.map((name) => {
          return (
            <div
              className=" relative z-10"
              key={name.section}
              ref={(el) => {
                navRef.current[name.section] = el;
              }}
            >
              <a href={`#${name.section}`}>
                {" "}
                <div className=" relative w-[25px] h-[25px]">
                  <Image
                    src={name.src}
                    alt={name.section}
                    fill
                    sizes="max-width: 30px"
                    className="object-contain"
                  ></Image>
                </div>
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default page;
