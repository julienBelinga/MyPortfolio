import React from "react";
import Image from "next/image";
import styles from "./iconSkill.module.scss";

interface IconSkillProps {
  techno: string;
  isVisible?: boolean;
}

export default function IconSkill({ techno, isVisible }: IconSkillProps) {
  return (
    <div
      className={`${styles.iconContainer} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={require(`@/assets/img/techno/${techno}.png`)}
          alt={`${techno} logo`}
          width={50}
          height={50}
        />
      </div>
      <span className={styles.technoName}>{techno}</span>
    </div>
  );
}
