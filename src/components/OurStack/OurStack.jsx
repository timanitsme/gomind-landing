import styles from "./OurStack.module.css"
import {FaJava, FaJs, FaReact} from "react-icons/fa6";
import {SiSpring} from "react-icons/si";

export default function OurStack(){
    const stackItems = [FaJava, FaReact, SiSpring, FaJs, ]

    return(
        <div className={styles.stackContainer}>
            <h3>Для Разработчиков - <b>Наш Стек</b></h3>
            <div className={styles.stackRow}>
                {stackItems.map((Icon, index) =>
                    <div className={styles.card}>
                        <Icon key={index} size={100} color="var(--primary)"/>
                    </div>
                )}
            </div>
        </div>
    )
}