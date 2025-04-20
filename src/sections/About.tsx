"use client";

import { Card } from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import nextIcon from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import JavaIcon from "@/assets/icons/java-svgrepo-com.svg";
import pythonIcon from "@/assets/icons/python-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github.svg";
import sqlIcon from "@/assets/icons/mysql-svgrepo-com.svg";
import mongoIcon from "@/assets/icons/mongodb-svgrepo-com.svg";
import CardHeader from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Headphones } from "lucide-react";
import Lottie from "lottie-react";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "NextJs", iconType: nextIcon },
  { title: "Java", iconType: JavaIcon },
  { title: "Python", iconType: pythonIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Sql", iconType: sqlIcon },
  { title: "Mongo DB", iconType: mongoIcon },
];

const hobbies = [
  { title: "Singing", emoji: "🧑‍🎤", left: "5%", top: "5%" },
  { title: "Footballer", emoji: "⚽", left: "50%", top: "5%" },
  { title: "Guitarist", emoji: "🎸", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Fitness", emoji: "🏋️‍♀️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Peek Behind the Pixels"
          description="Get to know the creator behind the craft — what I do, what drives me, and where I'm headed."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-black shadow-2xl border border-white/10 relative overflow-hidden">
              <CardHeader
                title="Mind Space"
                description="Dive into the ideas that shape me."
              />
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-40 h-40 bg-gradient-to-tr from-purple-500 via-indigo-400 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              </div>
              <div className="z-10 relative flex justify-center mt-2 md:mt-0">
                <div className="p-4 bg-white/10 backdrop-blur rounded-full shadow-inner border border-white/10">
                  {/* Optional Lottie animation */}
                </div>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-xl border border-white/10">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-xl border border-white/10">
              <CardHeader
                title="Beyond the Pixels"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div
                className="relative flex-1 overflow-hidden px-2"
                ref={constraintRef}
              >
                <div className="h-full w-full relative">
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-rose-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer touch-none"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                      dragElastic={0.3}
                      dragMomentum={false}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(#00f2fe33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full bg-gradient-to-tr from-rose-500 to-sky-300 shadow-2xl shadow-pink-500/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-sky-300 -z-10 animate-ping [animation-duration:3s] opacity-30"></div>
                <div className="flex items-center justify-center h-full text-black">
                  <Headphones className="w-10 h-10 animate-bounce drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
              <div className="absolute bottom-4 w-full text-center text-white/80 text-m font-sans tracking-wider font-semibold">
                Vibin’ through code & creativity
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
