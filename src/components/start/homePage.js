import React from "react"
import Slidee from "./carousel"

import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <main>
                <section className="part">
                    <div className="carousel">
                    <Slidee />
                    </div>
                    <div className="about">
                        <h2>{t('start.head')}<br /> <span>{t('start.dep')} </span> </h2>
                        <p>{t('start.description')}</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePage