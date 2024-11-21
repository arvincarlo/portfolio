"use client"

import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

import { Reveal } from '@/features/Reveal';

export const HeroSection = () => {

  const handleScroll = (element: string) => {
    const target = document?.querySelector(element) as HTMLElement;
    window.scrollTo({
      top: target?.offsetTop,
      behavior: "smooth",
    })
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <HeroOrbit size={380} rotation={-75} shouldOrbit orbitDuration='60s' shouldSpin spinDuration='3s'>
          <StarIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={400} rotation={140} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-5 text-sky-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={480} rotation={153} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='4s'>
          <SparkleIcon className="size-6 text-sky-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={540} rotation={-79} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='4s'>
          <SparkleIcon className="size-10 text-sky-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={570} rotation={-150} shouldOrbit orbitDuration='42s' shouldSpin spinDuration='8s'>
          <StarIcon className="size-12 text-sky-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={630} rotation={-35} shouldOrbit orbitDuration='40s'>
          <div className="size-2 bg-sky-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className="size-3 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-90} shouldOrbit orbitDuration='48s'>
          <div className="size-4 bg-sky-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={780} rotation={-32} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='12s'>
          <StarIcon className="size-16 text-sky-300"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={860} rotation={72} shouldOrbit orbitDuration='52s' shouldSpin spinDuration='12s'>
          <SparkleIcon className="size-16 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={900} rotation={-152} shouldOrbit orbitDuration='50s' shouldSpin spinDuration='10s'>
          <StarIcon className="size-20 text-emerald-300"/>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person Peeking from behind"/>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
            </div>
            <div className="text-sm font-medium">PRG-Arvin - Available for new projects</div>
          </div>
        </div>
          <div className='max-w-lg mx-auto'>
            <Reveal>
              <>
                <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">Building Exceptional User Experiences</h1>
                <p className="mt-4 text-center text-white/60 md:text-lg">
                    <span>
                      Hi, I&apos;m Arvin. I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.
                    </span>
                </p>
              </>
            </Reveal>
          </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Reveal>
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold" onClick={() => handleScroll("#projects")}>Explore My Work</span>
              <ArrowDown className="size-4"/>
            </button>
          </Reveal>
          <Reveal>
            <button className="inline-flex items-center gap-2 border bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>🤝🏼</span>
              <a href="https://www.linkedin.com/in/arvin-carlo-cris-a2412511a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className='font-semibold'>Let&apos;s Connect</a>
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
