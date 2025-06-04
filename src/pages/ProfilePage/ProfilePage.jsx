import styles from "./ProfilePage.module.scss"
import {useTranslation} from "react-i18next";
import PearIcon from "../../assets/pear-icon.svg?react"
import {useDispatch} from "react-redux";
import {logout} from "../../store/services/authSlice.js";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

export default function ProfilePage(){
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleExit = () => {
        try {
            dispatch(logout())
            navigate("/")
            toast.success(t("logout-success"))
        }
        catch (e){
            console.log(`logout error: ${e}`)
            toast.error(t("logout-error"))
        }
    }

    return(
        <div className={`contentContainer ${styles.bottomTop}`}>
            <h1>{t("profile")}</h1>
            <div className="hrtLine"/>
            <div className={styles.flexRow}>
                <div className={styles.balance}>
                    <p>{t("balance")}</p>
                    <h1>450</h1>
                    <div className={styles.circle}>
                        <PearIcon/>
                    </div>
                </div>
                <div className={styles.info}>
                    <h4>{t("information")}</h4>
                    <div className={styles.characteristic}>
                        <p className={styles.title}>Email</p>
                        <p className={styles.bold}>example@mail.ru</p>
                        <div className={styles.line}/>
                    </div>
                    <div className={styles.characteristic}>
                        <p className={styles.title}>{t("nickname")}</p>
                        <p className={styles.bold}>Иванов Иван</p>
                        <div className={styles.line}/>
                    </div>
                    <button className={styles.logoutButton} onClick={handleExit}>{t("logout")}</button>
                </div>


            </div>
        </div>
    )
}