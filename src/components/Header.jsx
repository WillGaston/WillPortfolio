import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export default function Header(props) {
  return (
    <header className="w-full h-[60px] fixed top-0 z-20 bg-white/90 backdrop-blur-md shadow-md flex items-center justify-between px-6 md:px-12 lg:px-16">
      <div className="flex flex-row lg:ml-[5%]">
        <Link
          className={`text-1xl md:text-2xl lg:text-3xl font-serif font-medium text-gray-800 hover:text-gray-600 transition-colors ${
            props.currPage === "main" ? "underline underline-offset-4" : ""
          }`}
          to="/"
          onClick={() => props.setCurrPage("main")}
        >
          Will Gaston
        </Link>
        <nav className="flex flex-row font-serif text-base md:text-lg lg:text-xl gap-2 md:gap-4 md:gap-8 ml-2 md:ml-8 md:mt-[3px] lg:mt-[6px]">
          <Link
            className={`hover:text-gray-600 transition-colors ${
              props.currPage === "aboutme"
                ? "text-gray-800 underline underline-offset-4"
                : "text-gray-500"
            }`}
            to="/aboutme"
            onClick={() => props.setCurrPage("aboutme")}
          >
            About Me
          </Link>
          <Link
            className={`hover:text-gray-600 transition-colors ${
              props.currPage === "projects"
                ? "text-gray-800 underline underline-offset-4"
                : "text-gray-500"
            }`}
            to="/projects"
            onClick={() => props.setCurrPage("projects")}
          >
            Projects
          </Link>
          <Link
            className={`hover:text-gray-600 transition-colors ${
              props.currPage === "experience"
                ? "text-gray-800 underline underline-offset-4"
                : "text-gray-500"
            }`}
            to="/experience"
            onClick={() => props.setCurrPage("experience")}
          >
            Experience
          </Link>
        </nav>
      </div>
      <div className="flex flex-row gap-4 lg:mr-[5%]">
        <a 
          href="https://www.instagram.com/avosfilm/" 
          target="_blank" 
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/odelia-lim-68795725b/?originalSubdomain=sg" 
          target="_blank" 
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </div>
    </header>
  );
}