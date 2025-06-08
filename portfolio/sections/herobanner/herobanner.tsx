"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./herobanner.module.scss";
import WakatimeStats from "@components/wakatime_stats/WakatimeStats";
import Typewriter from "@components/typewritter/Typewritter";
import profilePic from "@assets/img/pp_entier.png";

export default function HeroBanner() {
  const { t } = useTranslation();

  const roles = [
    t("presentation.role1"),
    t("presentation.role2"),
    t("presentation.role3"),
    t("presentation.role4"),
  ];

  return (
    <section id="herobanner" className={styles.heroBanner}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>
            <span className={styles.fullstack}>
              <Typewriter
                staticText={t("presentation.description")}
                textArray={roles}
              />
            </span>
            <span className={styles.developer}>{t("presentation.name")}</span>
          </h1>
          <WakatimeStats />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.circleContainer}>
            <Image
              src={profilePic}
              alt="Profile picture"
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
