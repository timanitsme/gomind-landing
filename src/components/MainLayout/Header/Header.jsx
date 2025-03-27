import styles from "./Header.module.css"
import GoWorkLogo from "../../../assets/gowork-logo.svg?react"
import LanguageToggle from "../../LanguageToggle/LanguageToggle.jsx";

export default function Header(){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.gridColumn}>
                <GoWorkLogo/>
            </div>
            <div className={`${styles.gridColumn} ${styles.paths}`}>
                <a href="">Проекты</a>
                <a href="">Стек</a>
                <a href="">Команда</a>
            </div>
            <div className={styles.gridColumn}>
                <LanguageToggle/>
            </div>
        </div>
    )
}