import { useTranslation } from "react-i18next";
import Image from "next/image";
import fr from "@assets/img/flag_fr.png";
import en from "@assets/img/flag_en.png";
import styles from "./language_btn_component.module.scss";
import { i18n } from "../../i18n.js";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className={styles.langButton}
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLang === "fr" ? "English" : "French"}`}
    >
      <Image
        src={currentLang === "fr" ? en : fr}
        alt={currentLang === "fr" ? "English flag" : "Drapeau français"}
        width={30}
        height={30}
      />
    </button>
  );
};

export default LanguageButton;
