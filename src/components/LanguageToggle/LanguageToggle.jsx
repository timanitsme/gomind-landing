import styles from "./LanguageToggle.module.scss"
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function LanguageToggle(){
    const {i18n} = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    return(
        <div className={styles.toggle}>
            <button onClick={() => i18n.language !== "ru" && changeLanguage("ru")} className={`${styles.toggleButton} ${i18n.language === "ru" && styles.selected}`}>RU</button>
            <button onClick={() => i18n.language !== "en" &&  changeLanguage("en")} className={`${styles.toggleButton} ${i18n.language === "en" && styles.selected}`}>EN</button>
        </div>
    )
}