import styles from "./Contacts.module.css"
import MailIcon from "../../assets/contacts/mail-icon.svg?react"
import PhoneIcon from "../../assets/contacts/phone-icon.svg?react"
import LocationIcon from "../../assets/contacts/location-icon.svg?react"
import VkIcon from "../../assets/contacts/vk-icon.svg?react"
import TgIcon from "../../assets/contacts/tg-icon.svg?react"
import {useState} from "react";


export default function Contacts(){

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
                    <h3>Свяжитесь с нами</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Введите ваш email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Введите ваше сообщение"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
                <div className={styles.info}>
                    <div className={styles.col}>
                        <div className={styles.contact}>
                            <MailIcon/>
                            <h3>example@mail.com</h3>
                        </div>
                        <div className={styles.contact}>
                            <PhoneIcon/>
                            <h3>+7 (910) 000 00-00</h3>
                        </div>
                        <div className={styles.contact}>
                            <LocationIcon/>
                            <h3>г. Такой-то, Улица такая то, д. 6, пом. 7</h3>
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