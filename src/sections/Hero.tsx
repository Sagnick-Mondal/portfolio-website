"use client";

import profileImage from "@/assets/images/profile_image.jpg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
import { Component, ComponentIcon, Handshake, MoveDown } from "lucide-react";

export const HeroSection = () => {
  // This function handles the scroll to section logic.
  const handleScrollToSection = (
    sectionId: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const headerOffset = 80;

      window.scrollTo({
        top: sectionTop - headerOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            // grain image to make bg seemless
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/*the rings*/}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/*the floating components in the rings*/}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Component className="size-8 text-rose-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <ComponentIcon className="size-5 text-rose-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-rose-300" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <Component className="size-10 text-rose-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <Component className="size-12 text-rose-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <Component className="size-8 text-rose-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-rose-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <Component className="size-14 text-rose-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-rose-300/30" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <Component className="size-28 text-rose-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex items-center flex-col">
          <div className="relative w-[200px] h-[200px] rounded-full mx-auto">
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-rose-400 opacity-40 blur-2xl animate-pulse -z-10"></div>

            {/* profile image */}
            <Image
              src={profileImage}
              alt="profile photo"
              className="rounded-full border-4 border-rose-400"
              fill
              sizes="(max-width: 768px) 100px, 120px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <br />
          {/* the bar right under image */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-3xl">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-green-500 inset-0 rounded-full absolute animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available to join your team
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Transforming Vision into{" "}
            <span className="text-yellow-400">Digital Reality</span>
          </h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">
            From design to deployment — I build performant, scalable
            applications with a focus on{" "}
            <span className="text-sky-400">user experience</span> and{" "}
            <span className="text-rose-400">code quality</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className=" relative inline-flex gap-2 border border-white items-center rounded-3xl px-6 h-12 hover:bg-white hover:text-black hover:border-black transition-all duration-300">
            <span
              className="font-semibold"
              onClick={(e) => handleScrollToSection("projects", e)} // scroll to projects section
            >
              Checkout My Works
            </span>
            <MoveDown className="size-4" />
          </button>
          <Link
            href="https://www.linkedin.com/in/sagnick-mondal-12487234a/"
            className="relative"
            target="_blank"
          >
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-3xl hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
              <span>
                <Handshake size={20} />
              </span>
              <span className="font-bold">Contact me</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
