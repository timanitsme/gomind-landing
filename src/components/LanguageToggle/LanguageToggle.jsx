import styles from "./LanguageToggle.module.css"
import {useState} from "react";

export default function LanguageToggle(){
    const [selectedLanguage, setSelectedLanguage] = useState("RU")

    return(
        <div className={styles.toggle}>
            <button onClick={() => selectedLanguage !== "RU" && setSelectedLanguage("RU")} className={`${styles.toggleButton} ${selectedLanguage === "RU" && styles.selected}`}>RU</button>
            <button onClick={() => selectedLanguage !== "EN" &&  setSelectedLanguage("EN")} className={`${styles.toggleButton} ${selectedLanguage === "EN" && styles.selected}`}>EN</button>
        </div>
    )
}