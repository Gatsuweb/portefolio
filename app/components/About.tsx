
import styles from "../styles/About.module.css"
import SplineDesign from "./SplineDesign"

export default function About() {
    return(
        <section className={styles.aboutContainer}>
        <div className={styles.aboutSticky}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutPaint}>
                    <div className={styles.aboutfirst}>
                        <div className={styles.titleCity}>
                                <div className={styles.boxtitle}>
                                    <h1>ABO</h1>
                                    <h1>UT</h1>
                                    <div className={styles.boxtitles}>
                                    <h1>ABO</h1>
                                    <h1>UT</h1>
                                </div>
                                <p>FRANCE, BREST, BRETONS</p>
                            </div>
                     
                            <div className={styles.birthday}>
                                <p>
                                    <span>1</span>
                                    <span>9</span>
                                    <span>9</span>
                                    <span>7</span>
                                    <span>-</span>
                                    <span>2</span>
                                    <span>0</span>
                                    <span>2</span>
                                    <span>4</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.paragraphAbout}>
                        <p>Je m&apos;appelle Ivan DURAN. Je m&apos;intéresse à beaucoup de choses, mais je n&apos;ai jamais eu de passion... jusqu&apos;à novembre 2023, quand j&apos;ai découvert le monde du développement web. Depuis, j&apos;en suis devenu totalement addict.</p>
                        <p>Créatif depuis toujours, j&apos;aime dessiner et la mode. Je pense que ces centres d&apos;intérêt m&apos;ont naturellement poussé à m&apos;orienter vers le développement créatif. Mais je suis aussi un passionné d'échecs, et j&apos;adore me challenger intellectuellement en travaillant sur des projets complexes.</p>
                        <p>J&apos;ai beaucoup voyagé seul et ai toujours rêvé d&apos;apprendre plusieurs langues pour pouvoir communiquer avec tout le monde. Quel rêve ! Je crois que si je suis devenu développeur web, c&apos;est grâce à ce cocktail unique : créativité, logique et esprit d&apos;aventure, qui me définit si bien.</p>

                        </div>
                    </div>
                    <div className={styles.splinedesign}>
                        <SplineDesign />
                    </div>
                </div>
                 {/* <div>
                    <Image src="/japonafoubas.svg" alt="" className={styles.imgAfouAbout} height={800} width={600}/>
                </div> */}
            </div>
            <div className={styles.footerAbout}>
                    <a href="#contact">BOOK+</a>
                    <div className={styles.aboutTextReveal}>
                        <h1>
                            <span>Developpeur</span>
                            <span>Voyageur</span>
                            <span>Gamer</span>
                            <span>Dessinateur</span>
                            <span>Lecteur</span>
                            <span>Mangeur</span>
                        </h1>
                    </div>
                </div>
        </div>
        </section>
    )
}