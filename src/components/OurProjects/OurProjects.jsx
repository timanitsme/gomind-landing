import styles from "./OurProjects.module.css"
import GoMindLogo from "../../assets/gomind-logo.svg?react"

export default function OurProjects(){

    return(
        <div className={styles.projectsContainer}>
            <h3 className="title">Наши проекты</h3>
            <div className={styles.project}>
                <div className={styles.description}>
                    <h3>GoMind</h3>
                    <p>Мобильное приложение для проведения викторин и публикации рекламы. Инновационный подход: совмещение игры и рекламы с использованием внутренней валюты.</p>
                    <p><b>Основные функции:</b></p>
                    <ul>
                        <li><span className="marker">•</span>Ежечасная викторина для пользователей с начислением очков.</li>
                        <li><span className="marker">•</span>Возможность публикации рекламы через платеж внутренней валюты («груши»).</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <div className={styles.projectPicture}>
                        <GoMindLogo/>
                    </div>
                    <button className={styles.projectButton}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}