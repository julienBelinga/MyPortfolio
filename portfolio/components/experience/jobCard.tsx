"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./jobCard.module.scss";
import IconSkill from "../icon_skill/iconSkill";

interface JobCardProps {
  title: string;
  company: string;
  logo?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

const getCompanyLogo = (logo: string) => {
  try {
    const logoName = logo.toLowerCase();
    return require(`@/assets/img/companies/${logoName}`).default;
  } catch (error) {
    console.error("Erreur de chargement du logo:", error);
    return null;
  }
};

export default function JobCard({
  title,
  company,
  logo,
  startDate,
  endDate,
  description,
  technologies,
}: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const companyLogo = logo ? getCompanyLogo(logo) : null;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={styles.jobCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.jobCard__header}>
        {companyLogo && (
          <div className={styles.jobCard__logo}>
            <Image
              src={companyLogo}
              alt={`${company} logo`}
              width={50}
              height={50}
            />
          </div>
        )}
        <div
          className={`${styles.jobCard__title} ${
            !companyLogo ? styles.noLogo : ""
          }`}
        >
          <h3>{title}</h3>
          <p>{company}</p>
        </div>
      </div>

      <div className={styles.jobCard__dates}>
        <span>
          {startDate} - {endDate}
        </span>
      </div>

      <div
        className={`${styles.jobCard__description} ${
          isHovered || isMobile ? styles.visible : ""
        }`}
      >
        <p>{description}</p>
      </div>

      <div
        className={`${styles.jobCard__technologies} ${
          isHovered || isMobile ? styles.visible : ""
        }`}
      >
        <h4 className={styles.jobCard__technologiesTitle}>Techno/outils :</h4>
        <div className={styles.jobCard__technologiesGrid}>
          {technologies.map((tech, index) => (
            <IconSkill
              key={index}
              techno={tech}
              isVisible={isHovered || isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
