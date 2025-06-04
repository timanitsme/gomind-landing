import styles from "./LanguageToggle.module.scss"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export default function LanguageToggle(){
    const {i18n} = useTranslation()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    return(
        <div className={styles.toggle}>
            {/* Отображаем только одну кнопку на мобильных устройствах */}
            {isMobile ? (
                i18n.language === "ru" ? (
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`${styles.toggleButton}`}
                    >
                        EN
                    </button>
                ) : (
                    <button
                        onClick={() => changeLanguage("ru")}
                        className={`${styles.toggleButton}`}
                    >
                        RU
                    </button>
                )
            ) : (
                <>
                    <button
                        onClick={() => i18n.language !== "ru" && changeLanguage("ru")}
                        className={`${styles.toggleButton} ${i18n.language === "ru" && styles.selected}`}
                    >
                        RU
                    </button>
                    <button
                        onClick={() => i18n.language !== "en" && changeLanguage("en")}
                        className={`${styles.toggleButton} ${i18n.language === "en" && styles.selected}`}
                    >
                        EN
                    </button>
                </>
            )}
        </div>
    )
}