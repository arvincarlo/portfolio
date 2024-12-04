"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import bookImage from '@/assets/images/book.png'
import mapImage from '@/assets/images/map2.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import NextJs from '@/assets/icons/nextjs.svg'
import Typescript from '@/assets/icons/ts.svg'
import Styled from '@/assets/icons/styled.svg'
import Node from '@/assets/icons/node.svg'







import Tailwind from '@/assets/icons/tailwind.svg'
import Bootstrap from '@/assets/icons/bootstrap.svg'
import PHP from '@/assets/icons/php.svg'
import mysql from '@/assets/icons/mysql.svg'
import redux from '@/assets/icons/redux.svg'
import Angular from '@/assets/icons/angular.svg'
import jquery from '@/assets/icons/jquery.svg'
import arvin from '@/assets/images/testimonials/arvin.jpg'

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Redux",
    iconType: redux,
  },
  {
    title: "PHP",
    iconType: PHP,
  },
  {
    title: "MySQL",
    iconType: mysql,
  },
  {
    title: "NextJS",
    iconType: NextJs,
  },
  {
    title: "Angular",
    iconType: Angular,
  },
  {
    title: "jquery",
    iconType: jquery,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "Styled Components",
    iconType: Styled,
  },
  {
    title: "TailwindCSS",
    iconType: Tailwind,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "NodeJS",
    iconType: Node,
  },
];

const hobbies = [
  {
    title: "Movies",
    emoji: "🎥",
    left: '5%',
    top: '5%',
  },
  {
    title: "Photography",
    emoji: "📸",
    left: '50%',
    top: '5%',
  },
  {
    title: "Hiking",
    emoji: "🌄",
    left: '35%',
    top: '40%',
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: '10%',
    top: '35%',
  },
  {
    title: "Roadtrips",
    emoji: "🚗",
    left: '70%',
    top: '20%',
  },
  {
    title: "Music",
    emoji: "🎧",
    left: '70%',
    top: '45%',
  },
  {
    title: "Fitness",
    emoji: "🏋🏼‍♂️",
    left: '5%',
    top: '65%',
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container" id="about">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me."/>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid sm:grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 after:outline-emerald-300/20">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
              <div className="w-40 mx-auto mt-2 md:mt-0 hover:-rotate-6 duration-300 transition">
                <Image src={bookImage} alt="book cover"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 after:outline-emerald-300/20">
              <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional coding experiences." className=""/>
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"/>
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s] hover:[animation-play-state:paused]"/>
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 after:outline-emerald-300/20">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the coding realm. (Drag Me)" className="px-6 py-6"/>
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="cursor-grab inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left: hobby.left,
                    top: hobby.top,
                  }} 
                  drag
                  dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 after:outline-emerald-300">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={arvin} alt="smile emoji" className="size-20 rounded-full"/>
              </div>
            </Card>
            
          </div>
        </div>
      </div>
    </div>
  );
};
