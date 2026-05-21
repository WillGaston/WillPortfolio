import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2 } from 'lucide-react'
import CourseCard from './courses/CourseCard';
import { courses } from '../assets/courseData'
import { useNavigate } from 'react-router-dom';

import meImage from '../assets/images/me.jpg';
import { ArrowUpRight, Search, SlidersHorizontal, MapPin } from 'lucide-react';

const languages = [
  { language: "C/C++", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { language: 'Python', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { language: "JS/TS", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { language: "Java", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { language: "PostgreSQL", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
];

export default function AboutPage(props) {
  const [activeTab, setActiveTab] = useState('completed');
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortedCourses, setSortedCourses] = useState(courses);

  const doSort = (itemsToSort) => {
    if (!itemsToSort) return [];
    return [...itemsToSort].sort((a, b) => {
      switch (sortType) {
        case "GA": return Number(a.grade) - Number(b.grade);
        case "GD": return Number(b.grade) - Number(a.grade);
        case "RA": return Number(a.rating) - Number(b.rating);
        case "RD": return Number(b.rating) - Number(a.rating);
        case "DA": return a.term.localeCompare(b.term);
        case "DD": return b.term.localeCompare(a.term);
        default: return 0;
      }
    });
  };

  const doSearch = () => {
    const currentTabCourses = courses[activeTab] || [];
    const filtered = currentTabCourses.filter((course) => {
      return course.courseCode.toLowerCase().includes(inputText.toLowerCase()) ||
             course.courseTitle.toLowerCase().includes(inputText.toLowerCase());
    });
    setSortedCourses(prev => ({
      ...prev,
      [activeTab]: doSort(filtered)
    }));
  };

  useEffect(() => {
    doSearch();
  }, [sortType, inputText, activeTab]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased selection:bg-amber-100">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        
        <header className="mb-16">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Will Gaston
              </h1>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Sydney, Australia</span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r align-middle from-amber-500 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative rounded-full overflow-hidden w-28 h-28 md:w-32 md:h-32 border-4 border-white bg-white shadow-md">
                <img src={meImage} alt="Will Gaston" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">HD — 89.16 WAM</span>
          </div>

          <div className="space-y-4 text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            <p>
              Final year <span className="text-slate-900 font-semibold decoration-4 underline-offset-2">Computer Science</span> student at <span className="text-slate-900 font-semibold">UNSW</span>. 
            </p>
            <p className="text-base text-slate-500">
              Interested in systems and full-stack programming, and databases.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4 mb-20 max-w-md">
          <button 
            className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold rounded-xl text-white shadow-md shadow-orange-600/10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            onClick={() => { props.setCurrPage('projects'); navigate('/projects'); }}
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button 
            className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold rounded-xl text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            onClick={() => { props.setCurrPage('experience'); navigate('/experience'); }}
          >
            <span>See Experience</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Core Stack</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:border-slate-300 transition-colors">
                <img src={item.imgLink} className="w-5 h-5 object-contain" alt="" />
                <span className="text-sm font-medium text-slate-700">{item.language}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Competitive & Extracurricular</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {['IMC Programming Contest (SPCPA)', 'AllUni Coding Competition', 'IMC Coding Competition (CPMSoc)', 'Various SPAR Contests'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-white rounded-xl border border-slate-150 shadow-sm text-sm font-medium text-slate-700 flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Academics Portfolio</h2>
            <div className="flex gap-2 p-1 bg-slate-200/60 rounded-lg self-start sm:self-auto">
              {['completed', 'completing', 'planned'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`cursor-pointer px-3 py-1.5 text-xs font-semibold rounded-md uppercase tracking-wider transition-all duration-150 ${
                    activeTab === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {t === 'completing' ? 'In Progress' : t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search course code or name..."
                onChange={(event) => setInputText(event.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400 shadow-sm"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                id="sort" 
                name="sort"
                onChange={(event) => setSortType(event.target.value)}
                defaultValue=""
                className="appearance-none bg-white border border-slate-200 rounded-xl pl-10 pr-10 py-2.5 text-sm font-medium text-slate-600 focus:outline-none focus:border-amber-500 transition-all cursor-pointer w-full sm:w-44 shadow-sm"
              >
                <option value="" disabled>Sort by</option>
                <option value="GD">Grade ↓</option>
                <option value="GA">Grade ↑</option>
                <option value="RD">Rating ↓</option>
                <option value="RA">Rating ↑</option>
                <option value="DD">Date ↓</option>
                <option value="DA">Date ↑</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                {(sortedCourses[activeTab] || []).map((course, index) => (
                  <CourseCard 
                    key={index} 
                    course={course} 
                    type={activeTab} 
                    onSelect={() => setSelectedCourse(course)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
      
    </div>
  );
}