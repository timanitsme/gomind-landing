import styles from "./Onboarding.module.css"

export default function Onboarding(){
    return(
        <div className={styles.onboardingContainer}>
            <div className={styles.description}>
                <h3>Мы компания с инновационными мобильными решениями которая облегчает вашу жизнь и дополняет ее цифровыми благами</h3>
            </div>
            <div>
                <h1>Go Work LLC</h1>
                <div className={styles.whiteBg}>
                    <h3>Добро пожаловать!</h3>
                </div>
            </div>
        </div>
    )
}