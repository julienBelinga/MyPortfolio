import { Metadata } from "next";
import { default as ContactComp } from "@components/contact";

export const metadata: Metadata = {
  title: "Contact - Julien Belinga",
  description:
    "Page de contact du Portfolio de Julien Belinga, développeur web freelance Nantais.",
};

export default function Contact() {
  return <ContactComp />;
}
