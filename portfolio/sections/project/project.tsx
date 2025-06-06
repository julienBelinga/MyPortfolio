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
  [key: string]: Project;
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
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
}
