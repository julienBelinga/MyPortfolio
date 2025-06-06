"use client";
import React, { useRef, useState, MouseEvent } from "react";
import styles from "./project.module.scss";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/project_component/projectCard";

interface Project {
  title: string;
  description: string;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className={styles.projectSection}>
      <h2>{t("project.title")}</h2>
      <div
        ref={containerRef}
        className={styles.projectContainer}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <ProjectCard
          title={projects.bar.title}
          description={projects.bar.description}
          technologies={projects.bar.technologies}
          githubLink={projects.bar.githubLink}
          demoLink={projects.bar.demoLink}
        />
        <ProjectCard
          title={projects.einden.title}
          description={projects.einden.description}
          technologies={projects.einden.technologies}
          demoLink={projects.einden.demoLink}
        />
        <ProjectCard
          title={projects.portfolio.title}
          description={projects.portfolio.description}
          technologies={projects.portfolio.technologies}
          githubLink={projects.portfolio.githubLink}
          demoLink={projects.portfolio.demoLink}
        />
        <ProjectCard
          title={projects.touchdown.title}
          description={projects.touchdown.description}
          technologies={projects.touchdown.technologies}
          githubLink={projects.touchdown.githubLink}
          demoLink={projects.touchdown.demoLink}
        />
      </div>
    </section>
  );
}
