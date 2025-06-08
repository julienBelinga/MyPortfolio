"use client";

import Image from "next/image";
import logo from "@assets/img/logo.png";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./navbar/language_btn_component";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href}>{children}</Link>
);

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (navLinksContainerRef.current && window.innerWidth > 900) {
        navLinksContainerRef.current.style.transition = "none";
        setNavOpen(false);
      } else if (navLinksContainerRef.current) {
        navLinksContainerRef.current.style.transition =
          "transform 0.4s ease-out";
      }
    };

    window.addEventListener("resize", handleResize);
    setIsHydrated(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const { t } = useTranslation();

  if (!isHydrated) return null;

  return (
    <div id="nav-container">
      <div id="nav-bg"></div>
      <nav>
        <Link
          href="/"
          className="nav-icon"
          aria-label="homepage"
          aria-current="page"
        >
          <Image src={logo} alt="logo" priority />
        </Link>
        <div className="main-navlinks">
          <button
            type="button"
            className={`hamburger ${navOpen ? "open" : ""}`}
            onClick={toggleNav}
            aria-label="Toggle Navigation"
            aria-expanded={navOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            id="navitems-container"
            className={`navlinks-container ${navOpen ? "open" : ""}`}
          >
            <div className="navlink-container" ref={navLinksContainerRef}>
              <NavLink href="/#herobanner">{t("navbar.link1")}</NavLink>
              <NavLink href="/#projects">{t("navbar.link2")}</NavLink>
              <NavLink href="/#skills">{t("navbar.link3")}</NavLink>
              <NavLink href="/#experience">{t("navbar.link4")}</NavLink>
              <NavLink href="/#contact">{t("navbar.link5")}</NavLink>
            </div>
            <div id="flags">
              <LanguageButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
