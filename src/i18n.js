import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next";
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ru: { translation: ru }
    },
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru', // Язык, который будет использоваться, если перевод отсутствует
    interpolation: {
        escapeValue: false // React уже экранирует значения
    }
});

export default i18n