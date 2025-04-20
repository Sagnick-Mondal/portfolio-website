"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = (
    sectionId: string,
    event: React.MouseEvent<HTMLAnchorElement>
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-xl">
        {navItems.map(({ label, id }) => (
          <a
            key={id}
            href="#"
            onClick={(e) => handleScrollToSection(id, e)}
            className={`nav-item ${
              activeSection === id
                ? "bg-white text-black"
                : "text-white hover:bg-white/20 hover:text-white"
            } transition-all duration-300 px-4 py-2 rounded-full`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
