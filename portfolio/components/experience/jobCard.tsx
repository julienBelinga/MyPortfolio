"use client";
import React, { useState } from "react";
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
    return require(`@/assets/img/companies/${logo}`).default;
  } catch (error) {
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
  const companyLogo = logo ? getCompanyLogo(logo) : null;

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
          isHovered ? styles.visible : ""
        }`}
      >
        <p>{description}</p>
      </div>

      <div
        className={`${styles.jobCard__technologies} ${
          isHovered ? styles.visible : ""
        }`}
      >
        {technologies.map((tech, index) => (
          <IconSkill key={index} techno={tech} isVisible={isHovered} />
        ))}
      </div>
    </div>
  );
}
