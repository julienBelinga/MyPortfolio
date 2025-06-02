"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`../../public/locales/${language}/${namespace}.json`);
    })
  )
  .init({
    debug: false,
    fallbackLng: "fr",
    supportedLngs: ["fr", "en", "en-US"],
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
