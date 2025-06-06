import React from "react";
import styles from "./experience.module.scss";
import JobCard from "@/components/experience/jobCard";

const experienceData = [
  {
    title: "Propriétaire",
    company: "BJJ Insight",
    startDate: "2024",
    endDate: "Present",
    description:
      "Création d'une application de services sportive dédiée au Brazilian Jiu-Jitsu. Développement full-stack d'une plateforme innovante pour la communauté BJJ.",
    technologies: [
      "flutter",
      "dart",
      "stripe",
      "react",
      "node",
      "typescript",
      "firebase",
    ],
  },
  {
    title: "Développeur full-stack",
    company: "Capgemini",
    startDate: "2022",
    endDate: "2024",
    logo: "capgemini.png",
    description:
      "En tant que développeur Java au sein de Capgemini à Nantes, j'ai participé au développement et à la maintenance d'applications d'entreprise, en utilisant les dernières technologies et méthodologies agiles.",
    technologies: [
      "java",
      "spring",
      "angular",
      "typescript",
      "jenkins",
      "jira",
      "git",
      "api",
      "gitlab",
      "jest",
    ],
  },
  {
    title: "Développeur Web",
    company: "Einden",
    startDate: "2021",
    endDate: "2022",
    logo: "einden.png",
    description:
      "Création et intégration de sites web connectés à des logiciels via API. Développement de fonctionnalités sur mesure et maintenance d'applications web existantes.",
    technologies: ["html", "CSS", "javascript", "php", "mysql", "api"],
  },
  {
    title: "Développeur Web",
    company: "AvanceNet",
    startDate: "09/2020",
    endDate: "09/2020",
    logo: "avancenet.png",
    description:
      "Développement d'un site vitrine avec le CMS Drupal. Mise en place de fonctionnalités personnalisées et intégration de contenu dynamique.",
    technologies: ["drupal", "php", "html", "CSS", "javascript"],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.experience__title}>Expérience</h2>
      <div className={styles.experience__container}>
        {experienceData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
