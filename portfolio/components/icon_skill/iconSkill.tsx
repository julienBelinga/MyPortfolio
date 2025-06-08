import React from "react";
import Image from "next/image";
import styles from "./iconSkill.module.scss";

interface IconSkillProps {
  techno: string;
  isVisible?: boolean;
  size?: number;
}

export default function IconSkill({
  techno,
  isVisible,
  size = 22,
}: IconSkillProps) {
  return (
    <div
      className={`${styles.iconContainer} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={require(`@/assets/img/techno/${techno}.png`)}
          alt={`${techno} logo`}
          width={size}
          height={size}
        />
      </div>
      <span className={styles.technoName}>{techno}</span>
    </div>
  );
}
