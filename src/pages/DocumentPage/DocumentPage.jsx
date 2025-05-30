import styles from "./DocumentPage.module.scss"
import Markdown from "react-markdown";
import userAgreement from "../../assets/docs/userAgreement.js";
import {useNavigate, useParams} from "react-router";
import offer from "../../assets/docs/offer.js";
import {useTranslation} from "react-i18next";
import securityPolicy from "../../assets/docs/securityPolicy.js";

export default function DocumentPage(){
    const {t} = useTranslation()
    const {i18n} = useTranslation()
    const navigate = useNavigate()
    const {alias} = useParams();
    const specs = {
        "user-agreement": {
            title: t("user-agreement"),
            contentFunction: userAgreement
        },
        "offer": {
            title: t("offer"),
            contentFunction: offer
        },
        "security-policy": {
            title: t("security-policy"),
            contentFunction: securityPolicy
        }
    }
    if (!specs?.hasOwnProperty(alias)) {
        navigate("/")
    } else {
        return(
            <div className="contentContainer">
                <div className={styles.headingSection}>
                    <h1>{specs[alias]?.title}</h1>
                </div>
                <div className={styles.markdownSection}>
                    <Markdown>{specs[alias]?.contentFunction(i18n.language)}</Markdown>
                </div>
            </div>
        )
    }


}