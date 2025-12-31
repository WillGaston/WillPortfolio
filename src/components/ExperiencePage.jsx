import { experiences } from "../assets/experienceData";
import ExperienceCard from "./experiences/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        <header className="mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#fb8500] mb-4">
            Professional History
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900">
              Experience<span className="text-[#fb8500]">.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xs md:text-right font-medium leading-snug">
              Work experience, professional and internship opportunities.
            </p>
          </div>
        </header>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              index={index}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}