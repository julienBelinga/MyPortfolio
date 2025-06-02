import Head from "next/head";
import Script from "next/script";

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title, description }) => {
  return null; // L'API Metadata est maintenant gérée dans le fichier page.tsx
};

export default PageHead;
