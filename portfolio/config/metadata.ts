import { Metadata } from "next";

// Configuration de base des métadonnées
const baseMetadata: Metadata = {
  title: {
    default: "Julien Belinga - Développeur Freelance",
    template: "%s | Julien Belinga",
  },
  description:
    "Portfolio de Julien Belinga, développeur web freelance basé à Nantes. Spécialisé en développement Front-end, Back-end et DevOps.",
  keywords: [
    "développeur web",
    "freelance",
    "Nantes",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Julien Belinga" }],
  creator: "Julien Belinga",
  publisher: "Julien Belinga",
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
    locale: "fr_FR",
    url: "https://julien-belinga.fr",
    siteName: "Julien Belinga - Portfolio",
    title: "Julien Belinga - Développeur Freelance",
    description:
      "Portfolio de Julien Belinga, développeur web freelance basé à Nantes. Spécialisé en développement Front-end, Back-end et DevOps.",
    images: [
      {
        url: "@assets/img/pp_entier.png",
        width: 800,
        height: 800,
        alt: "Julien Belinga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien Belinga - Développeur Freelance",
    description:
      "Portfolio de Julien Belinga, développeur web freelance basé à Nantes. Spécialisé en développement Front-end, Back-end et DevOps.",
    images: ["@assets/img/pp_entier.png"],
    creator: "@julienbelinga",
  },
};

// Métadonnées spécifiques pour la page d'accueil
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: "Julien Belinga - Développeur Web Freelance à Nantes",
  description:
    "Développeur web freelance à Nantes spécialisé en React, Next.js et Node.js. Création de sites web et applications sur mesure.",
  alternates: {
    canonical: "https://julien-belinga.fr",
  },
};

// Métadonnées pour la page des mentions légales
export const legalMetadata: Metadata = {
  ...baseMetadata,
  title: "Mentions Légales",
  description:
    "Mentions légales du Portfolio de Julien Belinga, développeur web freelance à Nantes. Informations légales, droits d'auteur et hébergement.",
  alternates: {
    canonical: "https://julien-belinga.fr/fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: false,
  },
};

// Export par défaut pour les métadonnées de base
export default baseMetadata;
