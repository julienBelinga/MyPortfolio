"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions } from "./settings";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      if (language === "fr") {
        return import("../../public/locales/fr/translation.json");
      } else if (language === "en") {
        return import("../../public/locales/en/translation.json");
      } else if (language === "en-US") {
        return import("../../public/locales/en-US/translation.json");
      }
      return import("../../public/locales/fr/translation.json");
    })
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: ["fr", "en", "en-US"],
    fallbackLng: "fr",
    debug: true,
  });

export default i18next;
