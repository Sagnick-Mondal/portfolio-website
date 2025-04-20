import grainImage from "@/assets/images/grain.jpg";
import { MoveRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-rose-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-30">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&#39;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring some coolness to the project? Let&#39;s connect
                and discuss how I can help you achieve your goals.
              </p>
            </div>
            <a
              href="mailto:sagnickm.official@gmail.com"
              className="mt-8 md:mt-0"
            >
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-3xl gap-2 w-max border border-gray-900 cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                <span className="font-semibold">Contact Me</span>
                <MoveRight className="size-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
