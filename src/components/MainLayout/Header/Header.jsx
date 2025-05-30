import styles from "./Header.module.scss"
import GoWorkLogo from "../../../assets/gowork-logo.svg?react"
import LanguageToggle from "../../LanguageToggle/LanguageToggle.jsx";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from "react-router";

export default function Header({refs}){
    const {t} = useTranslation()
    const location = useLocation()

    const handleScroll = (targetRef) => {
        if (targetRef.current) {
            const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };
    const navigate = useNavigate()

    return(
        <div className={styles.headerContainer}>
            <div className={styles.gridColumn}>
                <GoWorkLogo onClick={() => navigate("/")}/>
            </div>
            <div className={`${styles.gridColumn} ${styles.paths}`}>
                <Link to="/">{t('main')}</Link>
                {location.pathname === "/" &&
                    <>
                        <a onClick={() => handleScroll(refs[0])}>{t('projects')}</a>
                        <a onClick={() => handleScroll(refs[1])}>{t('stack')}</a>
                    </>
                }
                <a onClick={() => handleScroll(refs[2])}>{t('contacts')}</a>
                <Link to="/payments">{t('payments')}</Link>
            </div>
            <div className={styles.gridColumn}>
                <LanguageToggle/>
            </div>
        </div>
    )
}