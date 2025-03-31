import styles from "./Contacts.module.scss"
import MailIcon from "../../assets/contacts/mail-icon.svg?react"
import PhoneIcon from "../../assets/contacts/phone-icon.svg?react"
import LocationIcon from "../../assets/contacts/location-icon.svg?react"
import VkIcon from "../../assets/contacts/vk-icon.svg?react"
import TgIcon from "../../assets/contacts/tg-icon.svg?react"
import {useState} from "react";
import {useTranslation} from "react-i18next";


export default function Contacts(){
    const {t} = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();


        setFormData({
            name: '',
            email: '',
            message: ''
        });

        alert('Сообщение успешно отправлено!');
    };
    return(
        <div className={styles.contactsContainer}>
            <h3 className="title">Контакты</h3>
            <div className={styles.contactsCard}>
                <div className={styles.form}>
                    <h5>{t('contact-us')}</h5>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t('enter-name')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t('enter-email')}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder={t('enter-message')}
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">{t('send')}</button>
                    </form>
                </div>
                <div className={styles.info}>
                    <div className={styles.col}>
                        <div className={styles.contact}>
                            <MailIcon/>
                            <h5>info@gwork.press</h5>
                        </div>
                        <div className={styles.contact}>
                            <PhoneIcon/>
                            <h5>+7 (929) 970 47-77</h5>
                        </div>
                        <div className={styles.contact}>
                            <LocationIcon/>
                            <h5>г. Такой-то, Улица такая то, д. 6, пом. 7</h5>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.socialsRow}>
                            <VkIcon/>
                            <TgIcon/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}