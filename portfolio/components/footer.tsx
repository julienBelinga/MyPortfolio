"use client";

import Image from "next/image";
import Link from "next/link";
import github from "../assets/img/github.png";
import linkedIn from "../assets/img/linkedIn.png";
import malt from "../assets/img/malt.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <footer>
      <ul>
        <li className="link">
          <Link href="/CV_Julien_Belinga.pdf" target="_blank" download>
            {t("footer.CV")}
          </Link>
        </li>
        <li className="link">
          <Link href="/contact">{t("footer.contact")}</Link>
        </li>
        <li className="link">
          <Link href="/mentions-legales">{t("footer.legal-mentions")}</Link>
        </li>
        <li>
          <ul className="icon-set">
            <li>
              <Link
                href="https://github.com/julienBelinga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="icon"
                  src={github}
                  alt="Github"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/julien-belinga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="icon"
                  src={linkedIn}
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.malt.fr/profile/julienbelinga?overview=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="icon"
                  src={malt}
                  alt="Malt"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
