import styles from "./GoMindPage.module.scss"
import QuizPhone from "../../assets/quiz.svg?react"
import RuStoreLogo from "../../assets/rustore-logo.svg?react";
import {useTranslation} from "react-i18next";
import PearIcon from "../../assets/pear-icon.svg?react"

export default function GoMindPage(){
    const {t} = useTranslation()

    return(
        <div className="contentSection">
            <div className={styles.descriptionSection}>
                <div className={styles.col}>
                    <div className={styles.phone}>
                        <QuizPhone/>
                    </div>
                    <a href="https://www.rustore.ru/catalog/app/com.example.gomind"><RuStoreLogo/></a>
                </div>
                <div className={styles.mainContent}>
                    <h1>GoMind</h1>
                    <div className={styles.description}>
                        <p>{t('go-mind-desc')}</p>
                        <p><b>{t('main-functions')}:</b></p>
                        <ul>
                            <li><span className="marker">•</span>{t('main-function-1')}</li>
                            <li><span className="marker">•</span>{t('main-function-2')}</li>
                        </ul>
                    </div>
                    <div className={styles.currency}>
                        <div>
                            <div className={styles.circle}>
                                <PearIcon/>
                            </div>
                        </div>
                        <div className={`${styles.currencyDescription}`}>
                            <h5>{t("go-mind-currency")}</h5>
                            <p>{t("payments-1")}</p>
                            <p><b>{t("usage-features")}:</b></p>
                            <ul>
                                <li><span className="marker">•</span>{t("usage-feature-1")}</li>
                                <li><span className="marker">•</span>{t("usage-feature-2")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}