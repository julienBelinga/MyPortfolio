"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import github from "@/assets/img/github.png";
import linkedIn from "@/assets/img/linkedIn.png";
import malt from "@/assets/img/malt.png";
import styles from "./social-links.module.scss";

interface SocialLinksProps {
  className?: string;
  imageSize?: number;
}

const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/julienBelinga",
    image: github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/julien-belinga/",
    image: linkedIn,
  },
  {
    name: "Malt",
    url: "https://www.malt.fr/profile/julienbelinga?overview=true",
    image: malt,
  },
];

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  imageSize = 30,
}) => {
  return (
    <div className={`${styles.socialLinksContainer} ${className}`}>
      {socialLinksData.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <Image
            className={styles.socialImage}
            src={social.image}
            alt={social.name}
            width={imageSize}
            height={imageSize}
            style={{ filter: "none" }}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
