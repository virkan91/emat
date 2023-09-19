import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationTurkish from "../public/locales/tr/translation.json";
import translationEnglish from "../public/locales/en/translation.json";

const resources = {
  tr: {
    translation: translationTurkish,
  },
  en: {
    translation: translationEnglish,
  },
};
i18next.use(initReactI18next).init({ resources, lng: "tr" });

export default i18next;
