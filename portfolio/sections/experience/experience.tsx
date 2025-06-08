"use client";

import React, { useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add(styles.visible);
        }
      },
      {
        threshold: 0.17,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className={styles.experience}>
      <h2 className={styles.experience__title}>{t("experience.title")}</h2>
      <div className={styles.experience__wrapper}>
        <div className={styles.experience__container}>
          {Object.keys(t("experience.jobs", { returnObjects: true })).map(
            (jobKey, index) => {
              const job = t(`experience.jobs.${jobKey}`, {
                returnObjects: true,
              }) as Job;
              return (
                <div key={index} className={styles.experience__row}>
                  <div
                    className={`${styles.experience__card} ${
                      index % 2 === 0 ? styles.left : styles.right
                    }`}
                  >
                    <JobCard
                      title={job.title}
                      company={job.company}
                      startDate={job.startDate}
                      endDate={job.endDate}
                      description={job.description}
                      technologies={job.technologies}
                      logo={job.logo}
                    />
                  </div>
                  <div className={styles.experience__dot}></div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
