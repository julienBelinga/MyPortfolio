"use client";

import { PropsWithChildren, useEffect } from "react";
import { useParams } from "next/navigation";
import i18next from "./client";

export default function I18nProvider({ children }: PropsWithChildren) {
  const params = useParams();
  const lang = params.lang as string;

  useEffect(() => {
    i18next.changeLanguage(lang);
  }, [lang]);

  return children;
}
