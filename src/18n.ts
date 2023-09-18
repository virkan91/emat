import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEnglish from "../public/locales/tr/translation.json";
import translationRussian from "../public/locales/en/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  },
};
i18next.use(initReactI18next).init({ resources, lng: "tr" });

export default i18next;
