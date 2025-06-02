"use client";

import Presentation from "@components/presentation";
import Skills from "@components/skills";
import Project from "@components/project";
import PricingMultiple from "@components/pricing_multiple";
import einden_phone_screen from "@assets/img/einden_phone_screen.png";
import einden_laptop_screen from "@assets/img/einden_laptop_screen.png";
import project_phone_screen from "@assets/img/project_phone_screen.jpg";
import project_desktop_screen from "@assets/img/project_desktop_screen.jpg";
import touchdown_phone_screen from "@assets/img/touchdown_phone_screen.png";
import touchdown_laptop_screen from "@assets/img/touchdown_laptop_screen.png";
import bar from "@assets/img/bar1.jpg";
import bar2 from "@assets/img/bar2.jpg";
import bar_phone_screen from "@assets/img/bar_phone.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function HomeContent() {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const description_einden = <p>{t("project.description1")}</p>;
  const description_portfolio = <p>{t("project.description2")}</p>;
  const description_getTouchdown = <p>{t("project.description3")}</p>;
  const description_bar = <p>{t("project.description4")}</p>;

  return (
    <>
      <Script
        src="https://use.fontawesome.com/e073950383.js"
        strategy="lazyOnload"
      />
      <Presentation />
      <Skills />
      <section id="project-container">
        <Project
          even={true}
          title={t("project.title4")}
          description={description_bar}
          img1={bar_phone_screen}
          img2={bar}
          img3={bar2}
        />
        <Project
          even={false}
          title={t("project.title1")}
          description={description_einden}
          img1={einden_phone_screen}
          img2={einden_laptop_screen}
          legend={t("project.legend1")}
        />
        <Project
          even={true}
          title={t("project.title2")}
          description={description_portfolio}
          img1={project_phone_screen}
          img2={project_desktop_screen}
        />
        <Project
          even={false}
          title={t("project.title3")}
          description={description_getTouchdown}
          img1={touchdown_phone_screen}
          img2={touchdown_laptop_screen}
        />
      </section>
      <PricingMultiple />
    </>
  );
}
