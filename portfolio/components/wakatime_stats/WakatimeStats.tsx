"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./WakatimeStats.module.scss";

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

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!stats) {
    return <div className={styles.loading}>{t("stats.loading")}</div>;
  }

  // Trier les langages par pourcentage décroissant et prendre les 5 premiers
  const sortedLanguages = [...stats.languages]
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5)
    .reverse(); // Inverser l'ordre pour l'affichage de bas en haut

  // Préparation des données pour le graphique
  const chartData = sortedLanguages.map((lang) => ({
    language: lang.name,
    value: lang.percent,
    background: 100, // Valeur pour la barre de fond
    formattedValue: `${lang.percent.toFixed(1)}%`,
  }));

  // Configuration des couleurs ordonnées (inversées pour correspondre à l'ordre d'affichage)
  const orderedColors = ["#6C8EAD", "#E77563", "#E0CCED", "#5AC9EE", "#EDA551"];

  return (
    <div className={styles.statsContainer}>
      <div className={styles.codeHours}>
        <h3>{t("stats.codeHours")}</h3>
        <p className={styles.hours}>
          {Math.round(parseFloat(stats.total_hours))} {t("stats.hours")}
        </p>
        <span className={styles.subtext}>{t("stats.last7Days")}</span>
        <div className={styles.lastUpdated}>
          <span>
            {t("stats.lastUpdated")}:{" "}
            {new Date(stats.last_updated).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className={styles.languages}>
        <h3>{t("stats.popularLanguages")}</h3>
        <div className={styles.chart}>
          <ResponsiveBar
            data={chartData}
            keys={["value", "background"]}
            indexBy="language"
            layout="horizontal"
            margin={{ top: 10, right: 10, bottom: 20, left: 120 }}
            padding={0.45}
            valueScale={{ type: "linear", max: 100 }}
            layers={[
              "grid",
              ({ bars }) => {
                return bars.map((bar) => {
                  if (bar.key === "background") {
                    return (
                      <rect
                        key={`${bar.key}.${bar.index}`}
                        x={bar.x}
                        y={bar.y}
                        width={bar.width}
                        height={bar.height}
                        fill="#E5E5E5"
                        rx={4}
                        ry={4}
                      />
                    );
                  }
                  return null;
                });
              },
              "bars",
              ({ bars }) => {
                return bars.map((bar) => {
                  if (bar.key === "value") {
                    return (
                      <g key={`label-${bar.key}.${bar.index}`}>
                        <text
                          x={bar.x + bar.width + 5}
                          y={bar.y + bar.height / 2}
                          textAnchor="start"
                          dominantBaseline="middle"
                          style={{
                            fill: "#666",
                            fontSize: "12px",
                          }}
                        >
                          {bar.data.formattedValue}
                        </text>
                      </g>
                    );
                  }
                  return null;
                });
              },
              "axes",
            ]}
            colors={({ id, indexValue, data }) => {
              if (id === "background") return "transparent";
              const index = chartData.findIndex(
                (d) => d.language === indexValue
              );
              return orderedColors[index];
            }}
            borderRadius={4}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
            }}
            enableGridY={false}
            enableLabel={false}
            role="application"
            ariaLabel="Languages chart"
            barAriaLabel={(e) => `${e.indexValue}: ${e.value}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default WakatimeStats;
