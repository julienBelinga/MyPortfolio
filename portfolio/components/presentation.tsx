"use client";

import Image from "next/image";
import pp_entier from "@assets/img/pp_entier.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Role {
  key: string;
  translation: string;
}

const Presentation: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  const roles: Role[] = [
    { key: "role1", translation: t("presentation.role1") },
    { key: "role2", translation: t("presentation.role2") },
    { key: "role3", translation: t("presentation.role3") },
    { key: "role4", translation: t("presentation.role4") },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div id="presentation">
      <div>
        <div id="bg-title">{t("presentation.title")}</div>
      </div>
      <div id="info-container">
        <div id="presentation-info">
          <div>
            <h1>{t("presentation.name")}</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="wrapper-txt">
                <p className="static-txt">{t("presentation.description")}</p>
                <ul className="dynamic-txts">
                  {roles.map((role) => (
                    <li key={role.key}>
                      <span>{role.translation}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link id="contact-button" href="/contact">
                {t("presentation.contact")}
              </Link>
            </div>
          </div>
        </div>
        <div id="profil">
          <div id="profile-mobile-bg"></div>
          <Image
            id="pp"
            src={pp_entier}
            alt="Photo de profil"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
