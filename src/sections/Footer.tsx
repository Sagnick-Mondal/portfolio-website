import {  ArrowUpRightFromSquare } from "lucide-react";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/Sagnick-Mondal",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/notreallyn1ck/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sagnick-mondal-12487234a/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-rose-900 to bg-sky-900 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/40">&copy; {new Date().getFullYear()}. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightFromSquare className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};