import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

import sunny from "@/assets/images/sunny-oasis.png";
import voyage from "@/assets/images/voyage.png";
import pizza from "@/assets/images/pizza.png";
import ShoeValley from "@/assets/images/shoe-valley.png";
import wildOasis from "@/assets/images/wild-oasis.png";
import quiz from "@/assets/images/quiz.png";
import travel_list from "@/assets/images/travel-list.png";
import eat_n_split from "@/assets/images/eatnsplit.png";
import movies from "@/assets/images/movies.png";
import expenses_tracker from "@/assets/images/expenses-tracker.png";

const CHUNK_SIZE = 5;

const portfolioProjects = [
    {
      company: "Pacific Sea BPO.",
      year: "2025",
      title: "The Wild Oasis",
      results: [
        { title: "Data Fetching and Server Actions" },
        { title: "Client and Server Components" },
        { title: "Auth.js for authentication" },
      ],
      link: "https://sunny-wild-oasis.netlify.app/",
      image: sunny,
    },
    {
      company: "Pacific Sea BPO.",
      year: "2024",
      title: "The Wild Oasis",
      results: [
        { title: "State management with React Query" },
        { title: "Routing using React Router" },
        { title: "Styled Components for the styling" },
      ],
      link: "https://sunny-wild-oasis.netlify.app/",
      image: wildOasis,
    },
    {
      company: "Pacific Sea BPO.",
      year: "2024",
      title: "Cheezy Dreams Pizza",
      results: [
        { title: "Managing States with Redux Toolkit" },
        { title: "Form handling with React Hook Form" },
        { title: "TailwindCSS for Styling" },
      ],
      link: "https://cheezy-dreams.vercel.app/",
      image: pizza,
    },
    {
      company: "Pacific Sea BPO.",
      year: "2024",
      title: "PinVoyage",
      results: [
        { title: "State Management with ContextAPI" },
        { title: "Routing using React Router" },
        { title: "React Leaflet for the interactive map" },
      ],
      link: "https://pin-voyage.vercel.app/",
      image: voyage,
    },
    {
      company: "",
      year: "2023",
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
      year: "2023",
      title: "React TestZone",
      results: [
        { title: "State Management with ContextAPI" },
        { title: "React Hooks" },
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
      title: "Magic Flix",
      results: [
        { title: "State management using useReducer" },
        { title: "useEffect and useRef Hooks" },
        { title: "Movie database api" },
      ],
      link: "https://magic-flix-lac.vercel.app/",
      image: movies,
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
      year: "2022",
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

function chunkArray(array:any, chunkSize:any) {
  const result = [];
  
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

const chunkedProjects = chunkArray(portfolioProjects, CHUNK_SIZE);

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."></SectionHeader>
        {chunkedProjects.slice(0,4).map((projects, index) => (
          <div key={index} className="flex flex-col mt-10 gap-20 md:mt-20">
            {projects.map((project: any, projectIndex: number) => (
              <Card key={project.title} className={`px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky top-16`} style={{
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
                      {project.results.map((result:any) => (
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
        ))}
        
      </div>
    </section>
  );
};
