import { Metadata } from "next";
import translationEN from "@/public/locales/en/translation.json";
import translationFR from "@/public/locales/fr/translation.json";

type Translations = {
  fr: typeof translationFR;
  en: typeof translationEN;
};

const translations: Translations = {
  fr: translationFR,
  en: translationEN,
};

export function generateMetadata(lang: "fr" | "en" = "fr"): Metadata {
  const t = translations[lang];

  return {
    title: {
      default: `${t.presentation.name} - ${t.presentation.title}`,
      template: `%s | ${t.presentation.name}`,
    },
    description: t.project.projects.portfolio.description,
    keywords: [
      "développeur web",
      "freelance",
      "Paris",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "DevOps",
      "fullstack",
      "full-stack",
      "développeur paris",
      "développeur web paris",
      "développeur web freelance paris",
      "développeur web freelance",
    ],
    authors: [{ name: t.presentation.name }],
    creator: t.presentation.name,
    publisher: t.presentation.name,
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }],
      apple: [{ url: "/favicon.ico" }],
      shortcut: [{ url: "/favicon.ico" }],
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      siteName: `${t.presentation.name} - Portfolio`,
      title: `${t.presentation.name} - ${t.presentation.title}`,
      description: t.project.projects.portfolio.description,
      images: [
        {
          url: "/pp_entier.png",
          width: 1200,
          height: 630,
          alt: t.presentation.name,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.presentation.name} - ${t.presentation.title}`,
      description: t.project.projects.portfolio.description,
      images: ["/pp_entier.png"],
      creator: "@julienbelinga",
    },
  };
}

// Métadonnées spécifiques pour la page d'accueil
export function generateHomeMetadata(lang: "fr" | "en" = "fr"): Metadata {
  const t = translations[lang];
  return {
    ...generateMetadata(lang),
    title: `${t.presentation.name} - ${t.presentation.title} ${
      lang === "fr" ? "à" : "in"
    } Paris`,
    description: t.project.projects.portfolio.description,
    alternates: {
      canonical: "https://julien-belinga.fr",
    },
  };
}

// Métadonnées pour la page des mentions légales
export function generateLegalMetadata(lang: "fr" | "en" = "fr"): Metadata {
  const t = translations[lang];
  return {
    ...generateMetadata(lang),
    title: t.footer["legal-mentions"],
    description: t.legalMentions.copyright.content,
    alternates: {
      canonical: "https://julien-belinga.fr/fr/mentions-legales",
    },
    robots: {
      index: true,
      follow: false,
    },
  };
}
