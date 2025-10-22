import styles from "./AccountDeletePage.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {goMindApi, useDeleteAccountMutation} from "../../store/services/goMind.js";
import {logout, setUserProfile} from "../../store/services/authSlice.js";
import {toast} from "react-toastify";
import {useState} from "react";
import SimpleModal from "../../components/SimpleModal/SimpleModal.jsx";
import {useTranslation} from "react-i18next";

export default function AccountDeletePage(){
    const { isAuthorized, userProfile, isLoading: profileIsLoading } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const [deleteAccount, {isDeleteLoading}] = useDeleteAccountMutation()
    const [isModal, setIsModal] = useState(false)
    const {t} = useTranslation()

    const handleDelete = async () => {
        if (userProfile.id){
            try {
                const response = await deleteAccount({userId: userProfile.id}).unwrap();
                if (response) {
                    toast.success(t("deletePage.page.success"))
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }

            } catch (err) {
                console.error(`deleteAccountError error: ${JSON.stringify(err)}`)
                toast.error(t("deletePage.page.err"));
            }
        }
    }


    return(
        <div className={`contentContainer ${styles.deleteSection}`}>
            <div className={styles.description}>
                <h4>{t("deletePage.page.title")}</h4>
                <p>{t("deletePage.page.description")}</p>
                <p>{t("deletePage.page.point-1")}  <b>{t("deletePage.page.point-1-2")}</b>.</p>
                <p>{t("deletePage.page.point-2")} <a href="mailto:Vlad72229@yandex.ru">Vlad72229@yandex.ru</a>. {t("deletePage.page.point-2-2")}</p>
                <p>{t("deletePage.page.point-3")}</p>
                {isAuthorized && userProfile &&
                    <button className={styles.deleteButton} onClick={() => setIsModal(true)}>{t("deletePage.page.button")}</button>
                }
                {!isAuthorized && !profileIsLoading && !userProfile &&
                    <button className={styles.deleteButton} onClick={() => navigate("/login")}>{t("deletePage.page.button-auth")}</button>
                }
            </div>
            <SimpleModal show={isModal} setShow={setIsModal} title={t("deletePage.page.title")}><div className={styles.deleteContent}><p>{t("deletePage.page.modal-warn")}</p><button className={styles.yes} onClick={() => {setIsModal(false); handleDelete()}}>{t("deletePage.page.modal-yes")}</button><button className={styles.no} onClick={() => setIsModal(false)}>{t("deletePage.page.modal-no")}</button></div></SimpleModal>
        </div>
    )
}