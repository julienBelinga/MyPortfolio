"use client";

import Image from "next/image";
import Link from "next/link";
import github from "@assets/img/github.png";
import linkedIn from "@assets/img/linkedIn.png";
import malt from "@assets/img/malt.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const params = useParams();
  const lang = params.lang as string;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/CV_Julien_Belinga.pdf" target="_blank" download>
            {t("footer.CV")}
          </Link>
          <Link href="mailto:julienbelinga.pro@gmail.com">
            {t("footer.contact")}
          </Link>
          <Link href={`/${lang}/mentions-legales`}>
            {t("footer.legal-mentions")}
          </Link>
        </div>
        <div className="social-links">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
