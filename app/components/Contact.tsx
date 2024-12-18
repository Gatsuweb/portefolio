
import styles from "../styles/Contact.module.css"
export default function Contact() {
    return(
        <section className={styles.contactContainer}>
            <div className={styles.contactHero}>
                <div className={styles.contactContent}>
                    <h2>Let&apos;s Talk</h2>
                    <div className={styles.boxContact}>
                        <h4>E-MAIL: </h4>
                        <a id={styles.adress} href="mailto:ivan.duran@outlook.fr"> ivan.duran@outlook.fr</a>
                    </div>
                     <div className={styles.boxContact}>
                        <h5>TELEPHONE: </h5>
                        <p id={styles.tel}>+ 33 6 34 67 07 82</p>
                    </div>
                     <div className={styles.boxContact}>
                        <h6>RESEAUX: </h6>
                        <a className={styles.contactReso} href="https://www.instagram.com/_i.d.e.v/" target="blank">instagram </a>
                        <a className={styles.contactReso} href="https://www.linkedin.com/in/ivandrn/" target="blank">linkedin </a>
                    </div>
                    <div className={styles.boxContact}>
                    <p id={styles.textcontact}>Pour me contacter, vous pouvez m’envoyer un mail avec vos idées, vos projets. Vous pouvez spécifier si vous avec un design ou non.
                    Sinon vous pouvez aussi m’appeler où m’envoyer un message sur mes réseaux sociaux</p>
                    </div>
                </div>
                <div className={styles.titleContact}>
                    <h1>CONTACT</h1>
                    <h1>CONTACT</h1>
                    <h1>CONTACT</h1>
                    <h1>CONTACT</h1>
                </div>
            </div>
            <div className={styles.footerContact}>
                <p><span>Design </span> and <span> developpement </span> by ME / 2024</p>
                <p>Basé en France, Brest, Bretagne</p>
            </div>
        </section>
    )
}