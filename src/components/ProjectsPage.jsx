import { useState } from "react";
import { projects } from "../assets/projectData"
import GalleryGrid from "./misc/GalleryGrid";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 md:pt-32">
          <header className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#fb8500] mb-4">
              Technical Skills
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900">
                Projects<span className="text-[#fb8500]">.</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base max-w-xs md:text-right font-medium leading-snug">
                Personal Projects, freelance work, university assignments
              </p>
            </div>
          </header>
        </div>
      </section>
      <GalleryGrid projects={projects} setSelectedProject={setSelectedProject}/>
      {selectedProject && <ImageModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>}
    </>
  )
}