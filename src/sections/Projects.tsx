import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import voyage from "@/assets/images/voyage.png";
import pizza from "@/assets/images/pizza.png";
import ShoeValley from "@/assets/images/shoe-valley.png";
import wildOasis from "@/assets/images/wild-oasis.png";
import quiz from "@/assets/images/quiz.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import travel_list from "@/assets/images/travel-list.png";
import eat_n_split from "@/assets/images/eatnsplit.png";
import expenses_tracker from "@/assets/images/expenses-tracker.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Pacific Sea BPO.",
    year: "2024",
    title: "The Wild Oasis",
    results: [
      { title: "State management using React Query" },
      { title: "Routing using React Router" },
      { title: "Styled Components for the styling" },
      { title: "Interactive charts using Recharts" },
    ],
    link: "https://sunny-wild-oasis.netlify.app/",
    image: wildOasis,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2024",
    title: "Cheezy Dreams Pizza Co.",
    results: [
      { title: "Managing States with Redux Toolkit" },
      { title: "Handling Forms using React Hook Form" },
      { title: "TailwindCSS for Styling" },
    ],
    link: "https://cheezy-dreams.vercel.app/",
    image: pizza,
  },
  {
    company: "",
    year: "2024",
    title: "ShoeValley Shop",
    results: [
      { title: "User-Friendly Interface" },
      { title: "CSS for styling" },
      { title: "Built using Vue.js" },
    ],
    link: "https://shoe-valley.vercel.app/",
    image: ShoeValley,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2024",
    title: "PinVoyage",
    results: [
      { title: "State Management with ContextAPI" },
      { title: "Routing using React Router" },
      { title: "React Leaflet library for the interactive map" },
    ],
    link: "https://pin-voyage.vercel.app/",
    image: voyage,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2023",
    title: "React TestZone Application",
    results: [
      { title: "State Management with ContextAPI" },
      { title: "Single page application" },
    ],
    link: "https://reactiq-quiz.vercel.app/",
    image: quiz,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2023",
    title: "Eat n Split",
    results: [
      { title: "State management with useReducer" },
      { title: "Expense Tracking" },
      { title: "Easy Bill Splitting" },
    ],
    link: "https://eat-n-split-omega-two.vercel.app/",
    image: eat_n_split,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2023",
    title: "BudgetBuddy",
    results: [
      { title: "User-Friendly Interface" },
      { title: "Income and Expenses Tracking" },
      { title: "Transaction Management" },
    ],
    link: "https://track-your-expenses-omega.vercel.app/",
    image: expenses_tracker,
  },
  {
    company: "Pacific Sea BPO.",
    year: "2023",
    title: "Traveler's List",
    results: [
      { title: "State management with useReducer" },
      { title: "Single page application" },
      { title: "Customizable Checklists" },
    ],
    link: "https://travelers-list.vercel.app",
    image: travel_list,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."></SectionHeader>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky top-16" style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span className="">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Site</span>
                      <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
