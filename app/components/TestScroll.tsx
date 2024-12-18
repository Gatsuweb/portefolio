import Image from "next/image"
import styles from "../styles/TestScroll.module.css"
export default function TestScroll() {
    return(
        <div className={styles.testcontainer}>
            <div className={styles.boxscroll}>
                <h1>FRONTEND</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                    <h1><span>REACT</span></h1>
                    <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                    <h1>NEXTJS</h1>
                    <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                    <h1>FRONTEND</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                    <h1><span>REACT</span></h1>
                    <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                    <h1>NEXTJS</h1>

            </div>
            <div className={styles.boxscroll}>
                <h1><span>3D</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>THREEJS</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>SPLINE</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1><span>3D</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>THREEJS</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>SPLINE</h1>
            </div>
            <div className={styles.boxscroll}>
                <h1>GSAP</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1><span>FRAMER MOTION</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>FIGMA</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>GSAP</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1><span>FRAMER MOTION</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>FIGMA</h1>

            </div>
            <div className={styles.boxscroll}>
                <h1><span>DESIGN</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>DEVELOPPEMENT</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>REFERENCEMENT</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1><span>DESIGN</span></h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>DEVELOPPEMENT</h1>
                <Image src="/emoji.svg" alt="Emoji" width={150} height={150} />
                <h1>REFERENCEMENT</h1>

            </div>

        </div>
    )
}