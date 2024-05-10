import React from "react"
import { Link } from "react-router-dom"
import depLogo from "../img/main/department21 logo.png"
import ciscoLogo from "../img/main/cisco logo.png"
import "../styles/Registration/registration.scss"

import { useTranslation } from 'react-i18next';

const Reg = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="reg">
            {/* Left side - about site */}
            <div className="reg__greeting">
                <div class="reg__greeting__logo">
                    <img src={depLogo} alt="department21 logo"/>
                </div>
                <h1>{t('registration.head')}<br/> <span>{t('registration.department21')}</span></h1>
                <p>{t('registration.description')} - <a href="#">{t('registration.details')}</a></p>
                <div class="reg__greeting__partners">
                    <img src={ciscoLogo} alt="cisco logo"/>
                </div>
            </div>
            {/* Right side - registration form */}
            <div className="reg__form">
                <form action="" method="">
                    <h3>{t('registration.form.signIn')}</h3>
                    <input type="text" placeholder={t('registration.form.username')}/>
                    <input type="password" placeholder={t('registration.form.password')}/>
                    <button type="submit" class="send">{t('registration.form.signIn')}</button>
                    <div class="devider">
                        <div></div>
                        <div>{t('registration.form.or')}</div>
                        <div></div>
                    </div>
                    <button class="guest"><Link to="/">{t('registration.form.guest')}</Link></button>
                </form>
            </div>
            {/* Partners */}
            <div class="reg__partners">
                <img src={ciscoLogo} alt="cisco logo"/>
            </div>
        </div>
    )
};

export default Reg