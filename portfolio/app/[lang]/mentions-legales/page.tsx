import { Metadata } from "next";
import Mentions from "@components/mentions-legales";
import { generateLegalMetadata } from "@/config/metadata";

interface Props {
  params: {
    lang: "fr" | "en";
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateLegalMetadata(params.lang);
}

export default function MentionsLegales({ params: { lang } }: Props) {
  return <Mentions />;
}
