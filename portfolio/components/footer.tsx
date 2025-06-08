"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const params = useParams();
  const lang = params.lang as string;

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("/CV_julien_belinga.pdf", "_blank");
  };

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link
            href="/CV_julien_belinga.pdf"
            onClick={handleDownloadCV}
            className="footer-link"
          >
            {t("footer.CV")}
          </Link>
          <Link href="mailto:julienbelinga.pro@gmail.com">
            {t("footer.contact")}
          </Link>
          <Link href={`/${lang}/mentions-legales`}>
            {t("footer.legal-mentions")}
          </Link>
        </div>
        <SocialLinks className="social-links" imageSize={30} />
      </div>
    </footer>
  );
};

export default Footer;
