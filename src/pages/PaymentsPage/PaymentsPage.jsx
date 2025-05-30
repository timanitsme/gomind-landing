import styles from "./PaymentsPage.module.scss"
import {useTranslation} from "react-i18next";
import PearIcon from "../../assets/pear-icon.svg?react";

export default function PaymentsPage(){
    const {t} = useTranslation()

    return(
        <div className={`contentSection ${styles.center}`}>
            <div className={styles.projectsContainer}>
                <h3 className="title">{t('payments')}</h3>
                <div className={styles.project}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.projectPicture}>
                                <PearIcon/>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h5>{t("pears")}</h5>
                            <p>{t("payments-1")}</p>
                            <p><b>{t("usage-features")}:</b></p>
                            <ul>
                                <li><span className="marker">•</span>{t("usage-feature-1")}</li>
                                <li><span className="marker">•</span>{t("usage-feature-2")}</li>
                            </ul>
                            <p style={{marginTop: "25px", marginBottom: "10px"}}><b>{t("exchange-rate")}</b></p>
                            <div className={styles.exchangeSection}>
                                <div className={styles.exchangeCol}>
                                    <p>{t("buy")}</p>
                                    <p><b>1 {t("pear")} = 100₽</b></p>
                                </div>
                                <div className={styles.exchangeCol}>
                                    <p>{t("sell")}</p>
                                    <p><b>1 {t("pear")} = 10₽</b></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.projectsContainer}>
                <div className={styles.purposeSection}>
                    <h4>{t("pears-purpose-1")}</h4>
                    <p>
                        {t("pears-purpose-2")}:
                    </p>
                    <ul>
                        <li>
                            <span className="marker">•</span> {t("pears-purpose-3")}
                        </li>
                        <li>
                            <span className="marker">•</span> {t("pears-purpose-4")}
                        </li>
                        <li>
                            <span className="marker">•</span> {t("pears-purpose-5")}
                        </li>
                    </ul>
                    <p>
                        {t("pears-purpose-6")}
                    </p>
                </div>
            </div>
        </div>
    )
}