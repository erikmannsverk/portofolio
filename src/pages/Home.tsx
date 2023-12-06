
import Hero from "../components/Hero"
import { HorizontalCard } from "../components/Card"
import projectData from "../data/projectData.json"
import { NavbarDefault } from "../components/NavbarDefault"
import Footer from "../components/Footer"

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function Home() {

  useEffect(() => {
    hotjar.initialize(3780129, 6)
  }, [])

  return (
    <>
    <NavbarDefault/>
    <div className="flex justify-center">
      <div className="w-3/5">
        <Hero/>
        {projectData.map((project) => (
          <HorizontalCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home