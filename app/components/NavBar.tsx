import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return(
        <div className={styles.secondNav}>
            <p>I&apos;DEV</p>
            <ul>
                <li>ABOUT</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}