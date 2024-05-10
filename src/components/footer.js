import React from 'react'
import "../styles/Footer/footer.scss"

import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer>
            <p>{t('footer')}</p>
        </footer>
    )
}

export default Footer