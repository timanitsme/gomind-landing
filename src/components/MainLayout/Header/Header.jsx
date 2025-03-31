import styles from "./Header.module.scss"
import GoWorkLogo from "../../../assets/gowork-logo.svg?react"
import LanguageToggle from "../../LanguageToggle/LanguageToggle.jsx";
import {useTranslation} from "react-i18next";

export default function Header({refs}){
    const {t} = useTranslation()

    const handleScroll = (targetRef) => {
        if (targetRef.current) {
            const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };

    return(
        <div className={styles.headerContainer}>
            <div className={styles.gridColumn}>
                <GoWorkLogo/>
            </div>
            <div className={`${styles.gridColumn} ${styles.paths}`}>
                <a onClick={() => handleScroll(refs[0])}>{t('projects')}</a>
                <a onClick={() => handleScroll(refs[1])}>{t('stack')}</a>
                <a onClick={() => handleScroll(refs[2])}>{t('contacts')}</a>
            </div>
            <div className={styles.gridColumn}>
                <LanguageToggle/>
            </div>
        </div>
    )
}