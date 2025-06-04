import styles from "./AuthorizationPage.module.scss"
import {useState} from "react";
import {useNavigate} from "react-router";
import TextInput from "../../components/Inputs/TextInput/TextInput.jsx";
import PasswordInput from "../../components/Inputs/PasswordInput/PasswordInput.jsx";
import {toast} from "react-toastify";
import {goMindApi, useLoginMutation} from "../../store/services/goMind.js";
import {logout, setUserProfile} from "../../store/services/authSlice.js";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function AuthorizationPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    const validateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.trim().length === 0 || email.trim().length === 0){
            toast.error(t("fill-in-fields"))
        }
        else if (!validateEmail()){
            toast.error(t("incorrect-email"))
        }
        else{
            try {
                const response = await login({email: email, password: password}).unwrap();
                const profileResponse = await dispatch(goMindApi.endpoints.getUserProfile.initiate());
                if (profileResponse.data && response) {
                    await dispatch(setUserProfile(profileResponse.data));
                    navigate("/")
                    toast.success(t("auth-success"))
                }

            } catch (err) {
                console.error(`login error: ${JSON.stringify(err)}`)
                toast.error('Неверный email или пароль');
                dispatch(logout());
            }
        }
    }

    return(
        <div className={`contentSection ${styles.authSection}`}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
                <h3 style={{color: "var(--fg)"}}>{t("authorization")}</h3>
                <div className={styles.inputContainer}>
                    <p style={{color: "var(--fg)"}}>Email</p>
                    <TextInput
                        inputValue={email}
                        setInputValue={setEmail}
                        placeholder={t("enter-email")}
                    ></TextInput>
                </div>
                <div className={styles.inputContainer}>
                    <p style={{color: "var(--fg)"}}>{t("password")}</p>
                    <PasswordInput
                        placeholder={t("enter-password")}
                        setInputValue={setPassword}
                        inputValue={password}
                    ></PasswordInput>
                </div>

                <button type="submit" className={styles.formButton}>
                    {t("log")}
                </button>
            </form>
        </div>
    )
}