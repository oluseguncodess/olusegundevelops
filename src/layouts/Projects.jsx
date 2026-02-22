import { projectData } from "../store/projectData";
import githubImg from "../assets/github.svg";
import webImg from "../assets/web.svg";
import webLightImg from "../assets/web-white.svg";

import { useContext } from "react";
import { ThemeContext } from "../store/themeContext";

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="w-full md:max-w-[1400px] mx-auto py-5 mt-16" id="projects">
      <span className="text-center">
        <h2 className="text-[16vmin] md:[20vmin] font-bold text-black inline-block bg-clip-text bg-gradient-to-r from-[#fafafa99] to-[#fafafa99] [text-wrap:nowrap] [letter-spacing:calc(1em/16)] [padding:calc(1em/32)] [-webkit-text-stroke-width:calc(1em/16)] [-webkit-text-stroke-color:transparent] relative w-full md:mt-20 mt-13 justify-center text-center text-9xl">
          Projects
        </h2>
        <p className="my-10 px-1 md:px-0">
          Here are some of the exciting projects I&apos;ve worked on.
        </p>
      </span>
      <div className="border w-full py-5 md:py-10 px-5 rounded-lg flex items-stretch justify-center flex-wrap gap-10">
        {projectData.map((project) => {
          return (
            <div
              className="md:max-w-[450px] border border-red-800 rounded-md outline-none"
              key={project.id}
            >
             <div className="w-full h-[200px] md:h-[300px]">
               <img
                src={project.img}
                alt="project-image"
                className="h-full w-full md:object-fill"
              />
             </div>
              <div className="p-3 md:p-5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <span className="flex items-center gap-2">
                    <span className="bg-green-600 h-3 w-3 block rounded-full animate-pulse"></span>
                    <p className="text-sm">{project.status}</p>
                  </span>
                </div>
                <p
                  className={`${
                    theme === "light"
                      ? "text-black"
                      : "text-[hsla(0,0%,98%,0.6)]"
                  } max-w-[500px] mb-6`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((stack) => {
                    return (
                      <span
                        key={`${project.id}-${stack}`}
                        className={`${
                          theme === "light" ? "border-black" : "border-white"
                        } block rounded-full border px-3 py-1 text-xs`}
                      >
                        {stack}
                      </span>
                    );
                  })}
                </div>
                <div className="flex gap-2 items-center mt-10">
                  <a
                    href={project.github}
                    className="flex gap-1 items-center justify-center"
                  >
                    <img
                      src={githubImg}
                      alt="github-image"
                      width={15}
                      height={15}
                    />
                    <span className="text-sm">Github</span>
                  </a>
                  <a
                    href={project.liveSite}
                    className="flex gap-1 items-center justify-center"
                  >
                    <img
                      src={theme === "light" ? webImg : webLightImg}
                      alt="web-image"
                      width={15}
                      height={15}
                    />
                    <span className="text-sm">Live Site</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
