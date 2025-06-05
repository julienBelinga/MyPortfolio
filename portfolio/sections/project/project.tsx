"use client";
import React from "react";
import styles from "./project.module.scss";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/project_component/projectCard";

export default function project() {
  const { t } = useTranslation();
  return (
    <section className={styles.projectSection}>
      <h2>{t("project.title")}</h2>
      <div className={styles.projectContainer}>
        <ProjectCard
          title="Aux plaisirs démodées"
          description="Caliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
          imageSrc={require("@/assets/img/bar1.jpg")}
          technologies={["html", "CSS", "javascript", "vercel"]}
          githubLink="https://github.com/julienBelinga/Aux-plaisirs-demodes"
          demoLink="https://auxplaisirsdemodes.fr/"
        />
      </div>
    </section>
  );
}
