"use client";

import React from "react";
import styles from "./experience.module.scss";
import JobCard from "@/components/experience/jobCard";
import { useTranslation } from "react-i18next";

interface Job {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className={styles.experience}>
      <h2 className={styles.experience__title}>{t("experience.title")}</h2>
      <div className={styles.experience__container}>
        {Object.keys(t("experience.jobs", { returnObjects: true })).map(
          (jobKey, index) => {
            const job = t(`experience.jobs.${jobKey}`, {
              returnObjects: true,
            }) as Job;
            return (
              <JobCard
                key={index}
                title={job.title}
                company={job.company}
                startDate={job.startDate}
                endDate={job.endDate}
                description={job.description}
                technologies={job.technologies}
                logo={job.logo}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
