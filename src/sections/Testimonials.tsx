import Image from "next/image";
import { Fragment } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import grainImage from '@/assets/images/grain.jpg'
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Jasmin from '@/assets/images/testimonials/jas.jpg'
import Ian from '@/assets/images/testimonials/ian.jpg'
import Ted from '@/assets/images/testimonials/ted.jpg'
import Gab from '@/assets/images/testimonials/gab.jpg'
import Estee from '@/assets/images/testimonials/estee.jpg'
import Marc from '@/assets/images/testimonials/marc.jpg'
import Jerome from '@/assets/images/testimonials/jerome.jpg'

const testimonials = [
  {
    name: "Ted Miranda",
    position: "Team Leader @ Pacific Sea BPO",
    text: "\"He has a solid work ethic and a good foundation when it comes to web development skills, always eager to contribute and collaborate, making them a valuable asset to any project.\"",
    avatar: Ted,
  },
  {
    name: "Jas Estrella",
    position: "Senior Frontend Developer",
    text: "\"Arvin is a hardworking and reliable colleague, always helping his teammates on projects with his expertise and humor. He's truly someone you can count on to get the job done right, and he knows his work inside out.\"",
    avatar: Jasmin,
  },
  {
    name: "Ian Sumayo",
    position: "Project Lead",
    text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
    avatar: Ian,
  },
  {
    name: "Estee Lim",
    position: "PMO @ Pacific Sea BPO",
    text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
    avatar: Estee,
  },
  {
    name: "Gab Macayan",
    position: "Senior UI Developer @ PSPBPO",
    text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
    avatar: Gab,
  },
  {
    name: "Marc Caratao",
    position: "QA Lead @ PSPBPO",
    text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
    avatar: Marc,
  },
  {
    name: "Jerome Pascua",
    position: "Senior Backend Developer @ PSPBPO",
    text: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"",
    avatar: Jerome,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Colleagues" title="What Colleagues Say about Me" description="Don't just take my word for it. See what my collaborators have to say about my work."/>
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:10s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full rounded-full"/>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-center">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
