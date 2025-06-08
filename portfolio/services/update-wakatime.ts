import { config } from "dotenv";
import fs from "fs";
import axios from "axios";

config();

const WAKATIME_API_KEY = process.env.WAKATIME_API_ENDPOINT;
const base64ApiKey = Buffer.from(WAKATIME_API_KEY || "").toString("base64");

interface WakaTimeLanguage {
  name: string;
  total_seconds: number;
  percent: number;
  text: string;
}

interface WakaTimeData {
  languages: WakaTimeLanguage[];
  total_seconds: number;
  human_readable_total: string;
  range: string;
}

interface WakaTimeResponse {
  data: WakaTimeData;
}

interface LanguageMap {
  [key: string]: number;
}

interface Stats {
  total_seconds: number;
  total_hours: string;
  languages: Array<{
    name: string;
    total_seconds: number;
    percent: number;
  }>;
  last_updated: string;
  range: string;
}

const fetchStats = async (): Promise<void> => {
  try {
    console.log("🔄 Début de la récupération des stats WakaTime...");

    const res = await axios.get<WakaTimeResponse>(
      "https://wakatime.com/api/v1/users/current/stats/last_30_days",
      {
        headers: {
          Authorization: `Basic ${base64ApiKey}`,
        },
      }
    );

    const data = res.data.data;
    console.log("📊 Données reçues de l'API WakaTime :", {
      total_seconds: data.total_seconds,
      range: data.range,
      languages_count: data.languages.length,
    });

    // Créer une date avec le fuseau horaire local
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    console.log("⏰ Date actuelle du système :", formatter.format(now));

    const stats: Stats = {
      total_seconds: data.total_seconds,
      total_hours: (data.total_seconds / 3600).toFixed(2),
      languages: data.languages
        .map((lang) => ({
          name: lang.name,
          total_seconds: lang.total_seconds,
          percent: lang.percent,
        }))
        .slice(0, 5),
      last_updated: formatter.format(now),
      range: data.range,
    };

    console.log("📝 Stats formatées :", stats);

    fs.writeFileSync(
      "public/wakatime-stats.json",
      JSON.stringify(stats, null, 2)
    );
    console.log("✅ Stats WakaTime mises à jour avec succès.");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "❌ Erreur lors de la récupération des stats WakaTime:",
        error.message
      );
    } else {
      console.error(
        "❌ Erreur inconnue lors de la récupération des stats WakaTime"
      );
    }
    throw error;
  }
};

fetchStats();
