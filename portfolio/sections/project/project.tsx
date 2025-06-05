"use client";
import React from "react";
import styles from "./project.module.scss";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/project_component/projectCard";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

interface Projects {
  bar: Project;
  einden: Project;
  portfolio: Project;
  touchdown: Project;
}

export default function project() {
  const { t } = useTranslation();
  const projects = t("project.projects", { returnObjects: true }) as Projects;

  return (
    <section className={styles.projectSection}>
      <h2>{t("project.title")}</h2>
      <div className={styles.projectContainer}>
        <ProjectCard
          title={projects.bar.title}
          description={projects.bar.description}
          imageSrc={projects.bar.imageSrc}
          technologies={projects.bar.technologies}
          githubLink={projects.bar.githubLink}
          demoLink={projects.bar.demoLink}
        />
        <ProjectCard
          title={projects.einden.title}
          description={projects.einden.description}
          imageSrc={projects.einden.imageSrc}
          technologies={projects.einden.technologies}
          demoLink={projects.einden.demoLink}
        />
        <ProjectCard
          title={projects.portfolio.title}
          description={projects.portfolio.description}
          imageSrc={projects.portfolio.imageSrc}
          technologies={projects.portfolio.technologies}
          githubLink={projects.portfolio.githubLink}
          demoLink={projects.portfolio.demoLink}
        />
        <ProjectCard
          title={projects.touchdown.title}
          description={projects.touchdown.description}
          imageSrc={projects.touchdown.imageSrc}
          technologies={projects.touchdown.technologies}
          githubLink={projects.touchdown.githubLink}
          demoLink={projects.touchdown.demoLink}
        />
      </div>
    </section>
  );
}
