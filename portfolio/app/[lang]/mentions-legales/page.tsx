import { Metadata } from "next";
import Mentions from "@components/mentions-legales";

export const metadata: Metadata = {
  title: "Mentions Légales - Julien Belinga",
  description:
    "Mentions légales du Portfolio de Julien Belinga, développeur web freelance Nantais.",
};

export default function MentionsLegales() {
  return <Mentions />;
}
