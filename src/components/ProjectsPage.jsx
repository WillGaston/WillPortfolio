import { useState } from "react";
import { projects } from "../assets/projectData"
import GalleryGrid from "./GalleryGrid";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <GalleryGrid projects={projects} setSelectedProject={setSelectedProject}/>
      {selectedProject && <ImageModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>}
    </>
  )
}