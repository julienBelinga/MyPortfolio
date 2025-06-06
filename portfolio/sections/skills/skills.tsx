"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import { useTranslation } from "react-i18next";
import IconSkill from "@/components/icon_skill/iconSkill";

export default function Skills() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.skillsSection}>
      <h2>{t("skills.title")}</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <h3>{t("skills.skill1")}</h3>
          <div className={styles.iconGrid}>
            <div style={{ animationDelay: "0.1s" }}>
              <IconSkill techno="react" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.2s" }}>
              <IconSkill techno="next" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <IconSkill techno="typescript" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.4s" }}>
              <IconSkill techno="html" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <IconSkill techno="CSS" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.6s" }}>
              <IconSkill techno="javascript" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <IconSkill techno="SCSS" isVisible={isVisible} size={50} />
            </div>
          </div>
        </div>
        <div className={styles.skill}>
          <h3>{t("skills.skill2")}</h3>
          <div className={styles.iconGrid}>
            <div style={{ animationDelay: "0.8s" }}>
              <IconSkill techno="flutter" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <IconSkill techno="dart" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.0s" }}>
              <IconSkill
                techno="androidStudio"
                isVisible={isVisible}
                size={50}
              />
            </div>
          </div>
        </div>
        <div className={styles.skill}>
          <h3>{t("skills.skill3")}</h3>
          <div className={styles.iconGrid}>
            <div style={{ animationDelay: "1.1s" }}>
              <IconSkill techno="node" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.2s" }}>
              <IconSkill techno="sql" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.3s" }}>
              <IconSkill techno="java" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.4s" }}>
              <IconSkill techno="firebase" isVisible={isVisible} size={50} />
            </div>
          </div>
        </div>
        <div className={styles.skill}>
          <h3>{t("skills.skill4")}</h3>
          <div className={styles.iconGrid}>
            <div style={{ animationDelay: "1.4s" }}>
              <IconSkill techno="github" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.5s" }}>
              <IconSkill techno="git" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.6s" }}>
              <IconSkill techno="figma" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.7s" }}>
              <IconSkill techno="vscode" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.8s" }}>
              <IconSkill techno="vercel" isVisible={isVisible} size={50} />
            </div>
            <div style={{ animationDelay: "1.9s" }}>
              <IconSkill techno="cursor" isVisible={isVisible} size={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
