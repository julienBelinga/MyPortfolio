import React from "react";
import styles from "./experience.module.scss";
import JobCard from "@/components/experience/jobCard";

const experienceData = [
  {
    title: "Développeur Full-stack",
    company: "Capgemini",
    startDate: "2022",
    endDate: "2024",
    logo: "capgemini.png",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: ["node", "angular", "android", "firebase", "typescript"],
  },
  {
    title: "Développeur Web",
    company: "Einden",
    startDate: "2021",
    endDate: "2022",
    logo: "einden.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: ["html", "CSS", "javascript", "php"],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.experience__title}>Experience</h2>
      <div className={styles.experience__container}>
        {experienceData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
