
import Hero from "../components/Hero"
import { HorizontalCard } from "../components/Card"
import projectData from "../data/projectData.json"
import { NavbarDefault } from "../components/NavbarDefault"
import Footer from "../components/Footer"

function Home() {
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