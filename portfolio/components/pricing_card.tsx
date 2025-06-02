"use client";

import Image from "next/image";
import React from "react";
import check from "@assets/img/checkmark.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface PricingCardProps {
  promote?: boolean;
  title: string;
  price: string;
  info1: React.ReactNode;
  info2: React.ReactNode;
  info3: React.ReactNode;
  info4: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
  promote,
  title,
  price,
  info1,
  info2,
  info3,
  info4,
}) => {
  const { t } = useTranslation();
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div id="vitrine" className={promote ? "promote" : ""}>
      <div className="header-container">
        <p className="popular">
          <strong>{t("pricing.popular")}</strong>
        </p>
        <h3>{title}</h3>
        <p>
          {t("pricing.starting-price")}
          <br />
          <strong>{price}</strong>
        </p>
        <hr />
      </div>
      <ul>
        <li>
          <Image
            src={check}
            width={20}
            height={20}
            alt="Marque de validation"
          />
          {info1}
        </li>
        <li>
          <Image
            src={check}
            width={20}
            height={20}
            alt="Marque de validation"
          />
          {info2}
        </li>
        <li>
          <Image
            src={check}
            width={20}
            height={20}
            alt="Marque de validation"
          />
          {info3}
        </li>
        <li>
          <Image
            src={check}
            width={20}
            height={20}
            alt="Marque de validation"
          />
          {info4}
        </li>
      </ul>
      <div id="button-container">
        <Link className="button" href="/contact">
          <button>{t("pricing.button")}</button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
