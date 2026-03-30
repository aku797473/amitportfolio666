import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects"; // ✅ missing import
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Skills from "../Pages/Skills";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element ={<Skills/>}/>
    </Routes>
  );
};

export default AppRoutes;