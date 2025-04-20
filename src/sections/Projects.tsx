import promptShareImage from "@/assets/images/book-cover.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { Result } from "postcss";

const portfolioProjects = [
  {
    company: "Ziska IDE",
    year: "2024",
    title: "Online SaaS Code Editor",
    description:
      "Developed a cloud-based code editor with advanced features for seamless code writing, sharing, and execution.",
    results: [
      {
        title:
          "Implemented advanced Next.js features for enhanced performance and scalability",
      },
      {
        title:
          "Integrated third-party authentication using Clerk for secure user management",
      },
      {
        title:
          "Designed and developed a scalable, user-friendly interface for seamless interaction",
      },
    ],
    Link: "#",
    image: promptShareImage,
  },
  {
    company: "Hospital Management System",
    year: "2025",
    title: "Real-Time Hospital Management System",
    description:
      "Developed a real-time hospital management system for efficient patient, staff, and resource management. Designed to be scalable, user-friendly, and provide real-time data for improved healthcare services.",
    results: [
      {
        title:
          "Developed a real-time management system for hospital operations",
      },
      { title: "Built a scalable and robust application to handle high loads" },
      {
        title: "Enhanced the user experience with a seamless and intuitive UI",
      },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
  // if more projects, just add them here
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-rose-300 to-sky-400 text-transparent bg-clip-text text-center">
            My best Projects
          </p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4 lg:text-xl">
          A collection of my projects, showcasing my skills.
        </p>
        {/*<div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-rose-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <p className="flex gap-2 text-sm md:text-base text-white/50 items-center max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.description}</p>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.length > 0 ? (
                      project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50 items-center max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="overflow-hidden text-ellipsis">
                            {result.title}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li className="text-white/50 text-sm md:text-base">
                        Project not yet completed
                      </li>
                    )}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 border border-black h-12 w-full rounded-3xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 hover:bg-transparent hover:text-white hover:border-white transition-all duration-400 ease-in-out">
                      Demo Site
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>*/}
        <br />
        <h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-rose-300 to-sky-400 text-transparent bg-clip-text text-center text-3xl">
          Coming Soon
        </h3>
      </div>
    </section>
  );
};
