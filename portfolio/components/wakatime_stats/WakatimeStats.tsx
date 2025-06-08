"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./WakatimeStats.module.scss";
import wakatimeLogo from "@/assets/img/techno/wakatime.png";

interface WakatimeData {
  total_hours: string;
  languages: {
    name: string;
    total_seconds: number;
    percent: number;
  }[];
  last_updated: string;
}

const WakatimeStats: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<WakatimeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWakatimeStats = async () => {
      try {
        console.log("Tentative de chargement des statistiques...");
        const response = await fetch("/wakatime-stats.json", {
          cache: "no-store",
        });

        console.log("Statut de la réponse:", response.status);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Données reçues:", data);
        setStats(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        console.error("Erreur détaillée:", errorMessage);
        setError(errorMessage);
      }
    };
    fetchWakatimeStats();
  }, []);

  // Configuration des couleurs
  const orderedColors = ["#6C8EAD", "#E77563", "#E0CCED", "#5AC9EE", "#EDA551"];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.codeHours}>
        <h3>{t("stats.codeHours")}</h3>
        <span className={styles.subtext}>{t("stats.last7Days")}</span>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : !stats ? (
          <h2 className={styles.hours}>{t("stats.loading")}</h2>
        ) : (
          <h2 className={styles.hours}>
            {Math.round(parseFloat(stats.total_hours))} {t("stats.hours")}
          </h2>
        )}
        {stats && (
          <div className={styles.lastUpdated}>
            <span>
              {t("stats.lastUpdated")}: {stats.last_updated.split(" ")[0]}
            </span>
          </div>
        )}
      </div>
      <div className={styles.languages}>
        <h3>{t("stats.popularLanguages")}</h3>
        <span className={styles.subtext}>{t("stats.last7Days")}</span>
        <div className={styles.languagesList}>
          {error ? (
            <div className={styles.error}>{error}</div>
          ) : !stats ? (
            Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={styles.languageItem}>
                  <div className={styles.languageHeader}>
                    <span className={styles.languageName}>
                      {t("stats.loading")}
                    </span>
                    <span className={styles.languagePercent}>--%</span>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={`${styles.progressBar} ${styles.loading}`}
                      style={{
                        width: "100%",
                        backgroundColor: orderedColors[index],
                        opacity: 0.3,
                      }}
                    />
                  </div>
                </div>
              ))
          ) : (
            stats.languages
              .sort((a, b) => b.percent - a.percent)
              .slice(0, 5)
              .map((lang, index) => (
                <div key={lang.name} className={styles.languageItem}>
                  <div className={styles.languageHeader}>
                    <span className={styles.languageName}>{lang.name}</span>
                    <span className={styles.languagePercent}>
                      {lang.percent.toFixed(1)}%
                    </span>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: orderedColors[index],
                      }}
                    />
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
      <div className={styles.poweredBy}>
        <span>{t("stats.poweredBy")}</span>{" "}
        <a
          href="https://wakatime.com"
          target="_blank"
          rel="noopener noreferrer"
          title="WakaTime"
        >
          <Image
            src={wakatimeLogo}
            alt="WakaTime Logo"
            width={80}
            height={20}
            className={styles.wakatimeLogo}
          />
        </a>
      </div>
    </div>
  );
};

export default WakatimeStats;
