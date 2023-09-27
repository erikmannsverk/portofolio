import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetailUtepils from "./pages/ProjectDetailUtepils";
import ProjectDetailCannibal from "./pages/ProjectDetailCannibal";

function App() {

  return (
    <div className='bg-gray-100'>
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Utepils" element={<ProjectDetailUtepils/>}/>
            <Route path="/Cannibal" element={<ProjectDetailCannibal/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
    
  )
}

export default App
