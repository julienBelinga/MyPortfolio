"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import i18next from "./client";
import { I18nextProvider } from "react-i18next";

export default function I18nProvider({ children }: PropsWithChildren) {
  const params = useParams();
  const lang = params.lang as string;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    i18next.changeLanguage(lang);
    setMounted(true);
  }, [lang]);

  if (!mounted) return null;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
