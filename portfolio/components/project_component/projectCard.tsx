import React from "react";
import styles from "./projectCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import IconSkill from "@/components/icon_skill/iconSkill";
import github from "@/assets/img/techno/github.png";
import folder from "@/assets/img/link.png";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const getProjectImage = (title: string) => {
  // Convertir le titre en minuscules et remplacer les espaces par des tirets
  const imageName = title.toLowerCase().replace(/\s+/g, "");
  // Construire le chemin de l'image
  return require(`@/assets/img/projects/${imageName}.jpg`).default;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  const projectImage = getProjectImage(title);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={projectImage}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <IconSkill key={index} techno={tech} isVisible={true} size={40} />
          ))}
        </div>
        <div className={styles.links}>
          {demoLink && (
            <Link href={demoLink} className={styles.link} target="_blank">
              <Image src={folder} alt="Demo Link" width={24} height={24} />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} className={styles.link} target="_blank">
              <Image src={github} alt="GitHub" width={24} height={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
