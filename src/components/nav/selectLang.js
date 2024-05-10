import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import "../../styles/Header/language.css"

const locales = {
  en: { title: 'English' },
  ua: { title: 'Українська' }
};

const SelectLang = () => {
    const { t, i18n } = useTranslation();
    const [messages, setMessages] = useState(0);
    return (
        <ul id="language-menu">
        <li>
          <button type="button">
            {locales[i18n.language]?.title || 'Select Language'}
          </button>
          <ul>
            {Object.keys(locales).map((locale) => (
              <li key={locale}>
                <button
                  type="submit"
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locales[locale].title}
                </button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    )
}

export default SelectLang