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

    // Extraire la partie du chemin après la langue
    const pathParts = pathname.split("/");
    const pathWithoutLang =
      pathParts.length > 2 ? `/${pathParts.slice(2).join("/")}` : "";

    // Construire le nouveau chemin avec la nouvelle langue
    const newPathname = `/${newLang}${pathWithoutLang}`;

    // Changer la langue et rediriger
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
