import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ currPage, setCurrPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "Experience", path: "/experience", id: "experience" },
  ];

  return (
    <>
      <header className="w-screen min-w-0 h-16 fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          <Link
            to="/"
            onClick={() => {setCurrPage("main"); setIsOpen(false);}}
            className={`text-xl font-bold tracking-tighter text-slate-900 z-50 hover:text-slate-500 ${
                  currPage === 'main' ? "text-[#fb8500] underline" : "text-black hover:text-slate-500"
                }`}
          >
            W<span className="text-orange-500 text-2xl md:text-xl">.</span>
            <span className="hidden md:inline"> Gaston</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setCurrPage(link.id)}
                className={`text-sm font-semibold transition-all duration-300 ${
                  currPage === link.id ? "text-[#fb8500] underline" : "text-black hover:text-slate-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-slate-400 ml-2" />
            <div className="flex gap-4">
              <a href="https://github.com/WillGaston" target="_blank" rel="noreferrer" className="text-black hover:text-black transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/willgaston1/" target="_blank" rel="noreferrer" className="text-black hover:text-[#0077b5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </nav>

          <button 
            className="md:hidden z-50 p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className='cursor-pointer' /> : <Menu size={24} className='cursor-pointer' />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => {
                  setCurrPage(link.id);
                  setIsOpen(false);
                }}
                className={`text-3xl font-bold ${
                  currPage === link.id ? "text-[#fb8500] underline" : "text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-8 mt-4">
              <a href="https://github.com/WillGaston" className="text-slate-900" target='_blank'><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/willgaston1/" className="text-slate-900" target='_blank'><Linkedin size={32} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}