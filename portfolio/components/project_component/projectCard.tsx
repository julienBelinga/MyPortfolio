import React from "react";
import styles from "./projectCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import IconSkill from "@/components/icon_skill/iconSkill";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.image}
          objectFit="cover"
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
              <Image
                src={require("@/assets/img/folder.png")}
                alt="Demo Link"
                width={24}
                height={24}
              />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} className={styles.link} target="_blank">
              <Image
                src={"@/assets/img/techno/github.png"}
                alt="GitHub"
                width={24}
                height={24}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
