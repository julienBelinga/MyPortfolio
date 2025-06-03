import { useTranslation } from "react-i18next";
import Image from "next/image";
import fr from "@assets/img/flag_fr.png";
import en from "@assets/img/flag_en.png";
import styles from "./language_btn_component.module.scss";
import { usePathname } from "next/navigation";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";

    // Gérer le cas où nous sommes à la racine
    let newPathname;
    if (pathname === "/") {
      newPathname = `/${newLang}`;
    } else {
      // Si le pathname contient déjà une langue, la remplacer
      const pathWithoutLang = pathname.split("/").slice(2).join("/");
      newPathname = `/${newLang}${
        pathWithoutLang ? `/${pathWithoutLang}` : ""
      }`;
    }

    i18n.changeLanguage(newLang);
    window.location.href = newPathname;
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
