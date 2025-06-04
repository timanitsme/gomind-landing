import styles from "./OurProjects.module.scss"
import GoMindLogo from "../../assets/gomind-logo.svg?react"
import RuStoreLogo from "../../assets/rustore-logo.svg?react"
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

export default function OurProjects({ref}){
    const {t} = useTranslation()
    const navigate = useNavigate()

    return(
        <div className={styles.projectsContainer} ref={ref}>
            <h3 className="title">{t('our-projects')}</h3>
            <div className={styles.project}>
                <div className={styles.row}>
                    <div className={styles.description}>
                        <h5>GoMind</h5>
                        <p>{t('go-mind-desc')}</p>
                        <p><b>{t('main-functions')}:</b></p>
                        <ul>
                            <li><span className="marker">•</span>{t('main-function-1')}</li>
                            <li><span className="marker">•</span>{t('main-function-2')}</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.projectPicture}>
                            <GoMindLogo/>
                        </div>
                        <a href="https://www.rustore.ru/catalog/app/com.example.gomind"><RuStoreLogo/></a>
                        <button className={styles.moreButton} onClick={() => navigate("/goMind")}>{t("more")}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}