import styles from "./OurStack.module.scss"
import {FaFlutter, FaJava, FaJs, FaReact, FaSwift} from "react-icons/fa6";
import {SiKotlin, SiSpring} from "react-icons/si";
import {useTranslation} from "react-i18next";
import Tooltip from "../Tooltip/Tooltip.jsx";

export default function OurStack({ref}){
    //const stackItems = [FaJava, FaReact, SiSpring, FaJs, ]
    const stackItems = [
        {Icon: FaJava, title: "Java", link: "https://www.java.com"},
        {Icon: FaReact, title: "React", link: "https://react.dev/"},
        {Icon: SiSpring, title: "Java Spring", link: "https://spring.io/"},
        {Icon: FaJs, title: "JavaScript", link: "https://www.javascript.com"},
        {Icon: FaSwift, title: "Swift", link: "https://www.swift.org/"},
        {Icon: SiKotlin, title: "Kotlin", link: "https://kotlinlang.org/"},
        {Icon: FaFlutter, title: "Flutter", link: "https://flutter.dev/"},

    ]
    const {t} = useTranslation()
    return(
        <div className={styles.stackContainer} ref={ref}>
            <h3>{t('for-developers')} - <b>{t('our-stack')}</b></h3>
            <div className={styles.stackRow}>
                {stackItems.map((item, index) =>
                    <Tooltip text={item.title}>
                        <div className={styles.card}>
                            <a href={item.link}><item.Icon key={index} size={100} color="var(--primary)"/></a>
                        </div>
                    </Tooltip>
                )}
            </div>
        </div>
    )
}