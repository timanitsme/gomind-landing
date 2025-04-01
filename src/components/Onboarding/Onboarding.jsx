import styles from "./Onboarding.module.scss"
import {useTranslation} from "react-i18next";

export default function Onboarding(){
    const {t} = useTranslation()
    return(
        <div className={styles.onboardingContainer}>
            <div className={styles.description}>
                <h4>{t('onboarding-text')}</h4>
            </div>
            <div className={styles.heading}>
                <h1>{t('firm-name')}</h1>
                <div className={styles.whiteBg}>
                    <h3>{t('welcome')}!</h3>
                </div>
            </div>
        </div>
    )
}