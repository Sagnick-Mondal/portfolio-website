import hospitalLandingPage from "@/assets/images/hospital-landing-page.png";
import resumePortLandingPage from "@/assets/images/resumeport-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { Result } from "postcss";

const portfolioProjects = [
  {
    company: "Medtek-Hospital Appointment System",
    year: "2025",
    title: "Hospital Management System",
    description:
      "Architected and deployed a robust real-time hospital system to modernize appointments, and logistics.",
    results: [
      {
        title:
          "Engineered a full-stack real-time hospital platform using Next.js and Appwrite",
      },
      {
        title:
          "Implemented secure OTP login and real-time SMS alerts via Twilio for critical workflows",
      },
      {
        title:
          "Integrated Sentry for error tracking, threat detection, and system observability",
      },
      {
        title:
          "Crafted an elegant, responsive, and intuitive UI ensuring seamless interaction for patients and hospital staff",
      },
    ],
    link: "https://medtek-appointment-app.vercel.app/",
    image: hospitalLandingPage,
  },
  {
    company: "ResumePort - AI Resume Analyzer",
    year: "2025",
    title: "AI-Powered Resume Analysis Platform",
    description:
      "Developed an AI-enhanced platform that intelligently scans, evaluates, and improves resumes using GPT and DALL·E, combined with secure cloud features via Puter.js.",
    results: [
      {
        title:
          "Built a fully responsive resume analysis app using React, TypeScript, and React Router",
      },
      {
        title:
          "Leveraged GPT for ATS-based scoring and personalized resume improvement suggestions",
      },
      {
        title:
          "Used DALL·E for creative enhancement mockups and layout insights",
      },
      {
        title:
          "Integrated Puter.js for free cloud storage and third-party authentication",
      },
      {
        title:
          "Enabled seamless navigation, data deletion, and secure file management with high efficiency",
      },
    ],
    link: "https://resumeport-blush.vercel.app/",
    image: resumePortLandingPage,
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
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
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
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <p className="flex gap-2 text-sm md:text-base text-white/50 items-center max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.description}
                  </p>
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
        </div>
        <br />
        {/*<h3 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-rose-300 to-sky-400 text-transparent bg-clip-text text-center text-3xl">
          Coming Soon
        </h3>*/}
      </div>
    </section>
  );
};
