import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2 } from 'lucide-react'
import CourseCard from './courses/CourseCard';
import { courses } from '../assets/courseData'
import { useNavigate } from 'react-router-dom';

import meImage from '../assets/images/me.jpg';

const languages = [
  {language: "C/C++", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
  {language: 'Python', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"},
  {language: "JS/TS", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
  {language: "Java", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
  {language: "PostgreSQL", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"},
];

export default function AboutPage(props) {
  const [activeTab, setActiveTab] = useState('completed');
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortedCourses ,setSortedCourses] = useState(courses);

  const doSort = (itemsToSort) => {
      if (!itemsToSort) return;
      
      const sorted = [...itemsToSort].sort((a, b) => {
      
      switch (sortType) {
      case "GA":
          return Number(a.grade) - Number(b.grade);
      case "GD":
          return Number(b.grade) - Number(a.grade);
      case "RA":
          return Number(a.rating) - Number(b.rating);
      case "RD":
          return Number(b.rating) - Number(a.rating);
      case "DA":
          return a.term.localeCompare(b.term);
      case "DD": {
          return b.term.localeCompare(a.term);
      }
      default:
          return 0;
      }
      });
      return sorted;
  }
  const doSearch = () => {
      const sortedSearched = courses[activeTab].filter((course) => {
              return course.courseCode.toLowerCase().includes(inputText.toLowerCase()) ||
              course.courseTitle.toLowerCase().includes(inputText.toLowerCase());
          });
      const sorted = doSort(sortedSearched);
      setSortedCourses(prev => ({
          ...prev,
          [activeTab]: sorted
      }));
  }
  useEffect(() => {
      doSearch();
  }, [sortType, inputText, activeTab]);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-orange-50">
      <div className="max-w-4xl mx-auto px-8 py-24">
        
        <header className="mb-12">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">Will Gaston</h1>
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-[200px] md:h-[200px] border-solid border-4 border-orange-500">
              <img src={meImage} alt="Your Photo" width = {200} height = {200} className="object-cover w-[200px] h-[200px]" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-md font-bold uppercase tracking-widest text-black">HD - 89.81 WAM</span>
          </div>
          <p className='font-light'>⚲ Sydney, Australia</p>
          <p className="text-lg text-black leading-relaxed max-w-2xl font-light">
            Penultimate <span className="text-orange-500 font-semibold">Computer Science</span> student at <span className="text-orange-500 font-semibold">UNSW</span>. 
          </p>
          <p className='font-light'>Interested in systems programming, fullstack development, and databases.</p>
        </header>

        <div className='flex flex-row gap-4 mb-12'>
          <button 
            className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 font-serif rounded-full text-white hover:shadow-xl hover:scale-105 transition-all shadow-lg bg-[#fb8500] hover:bg-[#e85d04]"
            onClick={() => {
              props.setCurrPage('projects');
              navigate('/projects')}
            }
            target="_blank"
          >
              View Projects
              <MousePointer2 className="w-4 h-4" />
          </button>
          <button 
            className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 font-serif rounded-full text-white hover:shadow-xl hover:scale-105 transition-all shadow-lg bg-[#fb8500] hover:bg-[#e85d04]"
            onClick={() => {
              props.setCurrPage('experience');
              navigate('/experience')}
            }
            target="_blank"
          >
              See Experience
              <MousePointer2 className="w-4 h-4" />
          </button>
        </div>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12 border-b border-black pb-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Languages</h2>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-8 mb-12 pb-4'>
            {languages.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img src={item.imgLink} className="w-8 h-8 object-contain" alt="" />
                  <span className="text-xs font-medium">{item.language}</span>
                </div>
              ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12 border-b border-black pb-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Extracurriculars</h2>
          </div>
          <div className='flex flex-col gap-2 justify-center md:items-center'>
            {['IMC Programming Contest (SPCPA)', 'AllUni Coding Competition', 'IMC Coding Competition (CPMSoc)', 'Various SPAR Contests'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                — {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-black pb-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Academics</h2>
            <div className="flex gap-6">
              {['completed', 'completing', 'planned'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`cursor-pointer mt-2 md:mt-0 text-[11px] font-bold uppercase tracking-widest transition-colors ${
                    activeTab === t ? 'text-[#fb8500] underline' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {t.replace('completing', 'In Progress')}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-3 mb-8'>
            <div className="relative flex-grow">
              <input
                type='text'
                placeholder='Search courses...'
                onChange={(event) => setInputText(event.target.value)}
                className='w-full bg-slate-50 border border-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-700'
              />
            </div>

            <div className="relative">
              <select
                id="sort" 
                name="sort"
                onChange={(event) => setSortType(event.target.value)}
                defaultValue={""}
                className='appearance-none bg-slate-50 border border-slate-500 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-slate-600 focus:outline-none focus:border-orange-500 transition-all cursor-pointer w-full md:w-auto'
              >
                <option value="" disabled>Sort by</option>
                <option value="GA">Grade ↑</option>
                <option value="GD">Grade ↓</option>
                <option value="RA">Rating ↑</option>
                <option value="RD">Rating ↓</option>
                <option value="DA">Date ↑</option>
                <option value="DD">Date ↓</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {sortedCourses[activeTab].map((course, index) => (
                  <CourseCard key={index} course={course} type={activeTab} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}