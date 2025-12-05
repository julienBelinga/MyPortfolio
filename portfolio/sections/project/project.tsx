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
  category: string;
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
  const cardWidth = 400; // largeur de la carte + gap
  const gap = 32; // 2rem en px

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

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollDistance = cardWidth + gap;
      const targetScroll =
        direction === "left"
          ? containerRef.current.scrollLeft - scrollDistance
          : containerRef.current.scrollLeft + scrollDistance;

      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className={styles.projectSection}>
      <h2>{t("project.title")}</h2>
      <div className={styles.projectWrapper}>
        <button
          className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
          onClick={() => scroll("left")}
          aria-label="Scroll projects left"
        >
          ❮
        </button>
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
              category={project.category.toLowerCase()}
            />
          ))}
        </div>
        <button
          className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
          onClick={() => scroll("right")}
          aria-label="Scroll projects right"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
