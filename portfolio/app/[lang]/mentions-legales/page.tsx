import { Metadata } from "next";
import Mentions from "@components/mentions-legales";
import { legalMetadata } from "@/config/metadata";

export const metadata: Metadata = legalMetadata;

export default function MentionsLegales() {
  return <Mentions />;
}
