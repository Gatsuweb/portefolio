"use client"
import { useState } from "react"
import styles from "../styles/Hero.module.css"
import Image from "next/image";
export default function Hero() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [lightMode, setLightMode] = useState(false);

    const toggleDark = () => {
        setLightMode(false);
        document.body.setAttribute("data-theme", "dark");
    };

    const toggleLight = () => {
        setLightMode(true);
        document.body.setAttribute("data-theme", "light");
    };
    return(

     <section className={styles.herocontainer}>
            <div className={styles.headerHero}>
                <li>i&apos;dev</li>
                <div className={styles.spanTextContainer}>
                    <div className={styles.spanTextEffect}>
                        <span>Bienvenue </span> 
                        <span>Welcome </span> 
                    </div>
                <li>TO MY STUDIO</li>
                </div>
                <li>FR</li>
            </div>
            <div className={styles.middleHero}>
                    <div className={styles.reso}>
                        <a href="https://www.instagram.com/_i.d.e.v/" target="blank">INS</a>
                        <a href="https://www.linkedin.com/in/ivandrn/" target="blank">LIN</a>
                    </div>

            <div className={styles.navbarHero}>
                <div className={styles.box}>
                    <a href="#about">
                    <li>ABOUT</li>
                    </a>
                </div>
                <div className={styles.box}>
                    <a href="#work">
                    <li>WORK</li>
                    </a>
                </div>
                <div className={styles.box}>
                    <a href="#contact">
                    <li>CONTACT</li>
                    </a>
                </div>
                </div>
            </div>
            <div className={styles.footerHero}>
                <div>
                    <p>Donnez vie à votre<span> site web</span></p>
                    <div className={styles.titlesHero}>
                    <h1 >
                        <span>CREATIF </span>
                        <span>WEB </span>
                        <span>DESIGN </span>
                        <span>WEB </span>
                    </h1>
                    <h1> Developpement</h1>
                    </div>
                </div>
                <div  className={styles.btnLightcontainer}>
                    <button
                        onClick={toggleLight}
                        className={styles.circleLight}
                    >
                        <Image src="/light.svg" alt="" height={24} width={24} />
                    </button>
                    <button
                        onClick={toggleDark}
                        className={styles.circleDark}
                    >
                          <Image src="/dark.svg" alt="" height={24} width={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}