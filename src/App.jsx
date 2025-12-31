import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ExperiencePage from './components/ExperiencePage'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'

function App() {
  const [currPage, setCurrPage] = useState("main");

  useEffect(() => {
    const updateCurrPage = () => {
      const path = location.pathname.slice(1);
      setCurrPage(path || 'main');
    }
    updateCurrPage();
  }, [location.pathname]);

  return (
    <>
      <div className='w-full min-h-screen flex flex-col'>
        <Header setCurrPage={setCurrPage} currPage={currPage}/>
        <div className='flex-1'>
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  key="main"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <AboutPage setCurrPage={setCurrPage}/>
                </motion.div>
              }
            />
            <Route 
              path="/projects" 
              element={
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <ProjectsPage />
                </motion.div>
              }
            />
            <Route 
              path="/experience" 
              element={
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <ExperiencePage />
                </motion.div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
