import React from "react"
import Projects from "../components/Projects"
import projects from "../constants/project"
import Seo from "../components/Seo"
const ProjectsPage = () => {
  console.log("p", projects)
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}


export default ProjectsPage
