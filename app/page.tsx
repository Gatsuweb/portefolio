


import styles from "./page.module.css";
import Hero from "./components/Hero";
import TestScroll from "./components/TestScroll";
import About from "./components/About";
import Work from "./components/Work";
import FAQ from "./components/Faq";
import Contact from "./components/Contact";
import SplineMe from "./components/SplineMe";

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.splineBg}>
        <SplineMe />
      </div>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div id="about" className={styles.about}>
        <About />
      </div>
      <TestScroll />
      <div id="work" className={styles.work}>
        <Work />
      </div>
      <FAQ />
      <div id="contact" className={styles.contact}>
        <Contact />
      </div>
    </div>
  );
}
