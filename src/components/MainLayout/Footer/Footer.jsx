import styles from "./Footer.module.scss"
import MailIcon from "../../../assets/contacts/mail-icon.svg?react";
import PhoneIcon from "../../../assets/contacts/phone-icon.svg?react";
import VkIcon from "../../../assets/contacts/vk-icon.svg?react";
import TgIcon from "../../../assets/contacts/tg-icon.svg?react";
import LocationIcon from "../../../assets/contacts/location-icon.svg?react";
import {useTranslation} from "react-i18next";

export default function Footer({ref}){
    const {t} = useTranslation()
    return(
        <div className={styles.footerContainer} ref={ref}>
            <div className={styles.preFooter}>
                <div className={`${styles.footerCol} ${styles.description}`}>
                    <h5>GoWork LLC</h5>
                    <p className={`${styles.secondary}`}>{t('onboarding-text')}</p>
                </div>
                <div className={styles.footerCol} style={{width: "fit-content"}}>
                    <h5>{t('contacts')}</h5>
                    <div className={styles.contact}>
                        <MailIcon/>
                        <p>info@gwork.press</p>
                    </div>
                    <div className={styles.contact}>
                        <PhoneIcon/>
                        <p>+7 (929) 970 47-77</p>
                    </div>
                    {/*<div className={styles.socials}>
                        <VkIcon/>
                        <TgIcon/>
                    </div>*/}
                </div>
                <div className={`${styles.footerCol} ${styles.widthFour} ${styles.description}`}>
                    <h5>{t("where-to-find-us")}</h5>
                    <div className={styles.contact}>
                        <LocationIcon/>
                        <p><b>{t("legal-address-name")}:</b> {t("legal-address")}</p>
                    </div>
                    <div className={styles.contact}>
                        <LocationIcon/>
                        <p><b>{t("postal-address-name")}:</b> {t("postal-address")}</p>
                    </div>
                </div>
                <div className={styles.footerCol}>
                    <h5>{t("info")}</h5>
                    <div className={styles.contact}>
                        <p><b>{t("ogrn")}:</b> 1212000002928</p>
                    </div>
                    <div className={styles.contact}>
                        <p><b>{t("inn")}:</b> 2012009837</p>
                    </div>
                    <div className={styles.contact}>
                        <p><b>{t("kpp")}:</b> 201201001</p>
                    </div>
                </div>
                <div className={`${styles.footerCol} ${styles.widthFour} ${styles.mobile}`}>
                    <h5>{t("where-to-find-us")}</h5>
                    <div className={styles.contact}>
                        <p><b>{t("legal-address-name")}:</b> {t("legal-address")}</p>
                    </div>
                    <div className={styles.contact}>
                        <p><b>{t("postal-address-name")}:</b> {t("postal-address")}</p>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <p>© 2025 Gwork LLC. All rights reserved</p>
            </div>
        </div>
    )
}