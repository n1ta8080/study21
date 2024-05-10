import React from "react"
import depLogo from "../../img/main/department21 logo.png"
import { Link } from "react-router-dom"
import "../../styles/Header/nav.scss"

import { useTranslation } from 'react-i18next';
import SelectLang from "./selectLang"

const Nav = () => {
    const { t } = useTranslation();
    return (
        <nav>
            <div className="left-side">
                <Link to="/"  className="link">
                    <img src={depLogo} alt="department21 logo" />
                </Link>
                <Link to="/"  className="link">
                    Study21
                </Link>
            </div>
            <div className="center">
                <ul id="navigation-menu">
                    <li><Link to="/services" className="link">{t('nav.services')}</Link>
                    <ul>
                        <li>
                            <Link to="https://gitlab.k21" className="link">GitLab</Link>
                        </li>
                        <li>
                            <Link to="https://dls.viti.edu.ua/"  className="link">Moodle</Link>
                        </li>
                        <li>
                            <Link to="https://schedule.mitit/"  className="link">Timetable</Link>
                        </li>
                        <li>
                            <Link to="https://www.netacad.com/"  className="link">Netacad</Link>
                        </li>
                        <li>
                            <Link to="https://drive.k21"  className="link">Drive</Link>
                        </li>
                        <li>
                            <Link to="https://journal.viti.edu.ua/"  className="link">Journal</Link>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <Link to="/services" className="link">{t('nav.lab')}</Link>
                        <ul>
                             <li>
                                <Link to="/136classroom"  className="link">Classroom 136</Link>
                            </li>
                            <li>
                                <Link to="/138classroom"  className="link">Classroom 138</Link>
                            </li>
                            <li>
                                <Link to="/144classroom"  className="link">Classroom 144</Link>
                            </li>
                        </ul>
                    </li>
                    <li>{t('nav.about')}</li>
                </ul>
            </div>
            <div className="right-side">
                <div>
                    <SelectLang />
                </div>
                <div>
                    <Link className="login" to="/login">{t('nav.login')}</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav