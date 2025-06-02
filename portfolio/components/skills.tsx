"use client";

import Image from "next/image";
import React from "react";
import logo from "../assets/img/codelogo.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <>
      <div id="skills-presentation">
        <h3>{t("skills.title1")}</h3>
        <p>
          {t("skills.presentation")}
          <br />
        </p>
        <h3>{t("skills.title2")}</h3>
        <p>
          {t("skills.text-part1")}
          <br />
          {t("skills.text-part2")}
        </p>
      </div>
      <article id="skills-skill">
        <Image
          src={logo}
          alt="Logo compétences"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h2>{t("skills.title3")}</h2>
        <div className="left">
          <h4>{t("skills.subtitle1")}</h4>
          <p>{t("skills.skills")}</p>
          <h4>{t("skills.subtitle2")}</h4>
          <p>{t("skills.softskills")}</p>
          <h4>{t("skills.subtitle3")}</h4>
          <p>{t("skills.tools")}</p>
        </div>
      </article>
    </>
  );
};

export default Skills;
