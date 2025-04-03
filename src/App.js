import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"; // Hover effect version
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Scene from "./components/Scene";
import "./styles/global.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Scene />
      </Canvas>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <About />
        <Projects /> {/* Hover Effect Version */}
        <Skills />
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;
