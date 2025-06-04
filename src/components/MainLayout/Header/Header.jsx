import styles from "./Header.module.scss"
import GoWorkLogo from "../../../assets/gowork-logo.svg?react"
import LanguageToggle from "../../LanguageToggle/LanguageToggle.jsx";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import {FaLock, FaUser} from "react-icons/fa6";
import {useSelector} from "react-redux";
import {IoMenu} from "react-icons/io5";
import {useState} from "react";

export default function Header({refs}){
    const {t} = useTranslation()
    const location = useLocation()
    const { isAuthorized, userProfile, isLoading: profileIsLoading } = useSelector((state) => state.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleScroll = (targetRef) => {
        if (targetRef.current) {
            const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };
    const navigate = useNavigate()

    return(
        <div className={styles.headerContainer}>
            <div className={`${styles.gridColumn} ${styles.mobile}`}>
                <div className={styles.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMenu />
                </div>
            </div>
            <div className={styles.gridColumn}>
                <GoWorkLogo onClick={() => navigate("/")}/>
            </div>
            <div className={`${styles.gridColumn} ${styles.paths}`}>
                <Link to="/">{t('main')}</Link>
                {location.pathname === "/" &&
                    <>
                        <a onClick={() => handleScroll(refs[0])}>{t('projects')}</a>
                        <a onClick={() => handleScroll(refs[1])}>{t('stack')}</a>
                    </>
                }
                <a onClick={() => handleScroll(refs[2])}>{t('contacts')}</a>
                <Link to="/payments">{t('payments')}</Link>
            </div>
            <div className={styles.gridColumn}>
                <LanguageToggle/>
            </div>
            <div className={styles.gridColumn}>
                {isAuthorized && !profileIsLoading &&
                    <button className={styles.authButton} onClick={() => navigate("/profile")}><div><FaUser/><p>{t("profile")}</p></div></button>
                }
                {!isAuthorized && !profileIsLoading &&
                    <button className={styles.authButton} onClick={() => navigate("/login")}><div><FaLock/><p>{t("auth")}</p></div></button>
                }
            </div>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuContent}>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            {t("main")}
                        </Link>
                        {location.pathname === "/" && (
                            <>
                                <a onClick={() => {handleScroll(refs[0]); setIsMenuOpen(false)}}>{t("projects")}</a>
                                <a onClick={() => {handleScroll(refs[1]); setIsMenuOpen(false)}}>{t("stack")}</a>
                            </>
                        )}
                        <a onClick={() => {handleScroll(refs[2]); setIsMenuOpen(false)}}>{t("contacts")}</a>
                        <Link to="/payments" onClick={() => setIsMenuOpen(false)}>
                            {t("payments")}
                        </Link>

                    </div>
                </div>
            )}
        </div>
    )
}