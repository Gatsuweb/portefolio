
import Projet from "../components/Projet"
import styles from "../styles/Work.module.css"

export default function Work() {
    return(
        <>
            <div className={styles.worktitlecontainer}>
                <section className={styles.worktitlecontent}>
                    <div className={styles.boxWork}>
                        <div className={styles.worktitle}>
                                <h1>WO</h1>
                                <h1>RK</h1>
                            <div className={styles.worktitles}>
                                <h1>WO</h1>
                                <h1>RK</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.workContainer}>
                    <div className={styles.projetContainer}>
                    <Projet />
                    </div>
                </section>

            </div>

        </>
    )

}