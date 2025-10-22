import styles from "./ProfilePage.module.scss"
import {useTranslation} from "react-i18next";
import PearIcon from "../../assets/pear-icon.svg?react"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/services/authSlice.js";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

export default function ProfilePage(){
    const { isAuthorized, userProfile, isLoading: profileIsLoading } = useSelector((state) => state.auth);
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

    if (!isAuthorized && !profileIsLoading && !userProfile){
        navigate("/login");
    }

    console.log(JSON.stringify(userProfile))


    return(
        <div className={`contentContainer ${styles.bottomTop}`}>
            {isAuthorized && !profileIsLoading &&
                <>
                    <h1>{t("profile")}</h1>
                    <div className="hrtLine"/>
                    <div className={styles.flexRow}>
                        <div className={styles.balance}>
                            <p>{t("balance")}</p>
                            <h1>{userProfile?.pears}</h1>
                            <div className={styles.circle}>
                                <PearIcon/>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h4>{t("information")}</h4>
                            <div className={styles.characteristic}>
                                <p className={styles.title}>Email</p>
                                <p className={styles.bold}>{userProfile?.email}</p>
                                <div className={styles.line}/>
                            </div>
                            <div className={styles.characteristic}>
                                <p className={styles.title}>{t("nickname")}</p>
                                <p className={styles.bold}>{userProfile?.nickname}</p>
                                <div className={styles.line}/>
                            </div>
                            <button className={styles.logoutButton} onClick={handleExit}>{t("logout")}</button>
                        </div>
                        <div className={styles.deleteBox}>
                            <h4>{t("deletePage.profileSection.title")}</h4>
                            <p>{t("deletePage.profileSection.description")}</p>
                            <div className={styles.bottom}><button onClick={() => navigate("/account-delete")}>{t("deletePage.profileSection.button")}</button></div>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}