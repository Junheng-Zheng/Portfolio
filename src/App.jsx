import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./Components/About/About"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
export default App
