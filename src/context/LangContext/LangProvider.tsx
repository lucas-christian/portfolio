/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { LangContext } from "./LangContext";
import { getDictionary, type Lang } from "@utils/langUtils";

export function LangProvider({
  language,
  children,
}: {
  language: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>(language);
  const dictionary = getDictionary(lang);
  const t = (key: string) => key.split('.').reduce((acc: any, part: any) => acc?.[part], dictionary) ?? key;
  const changeLanguage = (lang: Lang) => {
    document.documentElement.lang = lang;
    setLang(lang);
  }

  return (
    <LangContext.Provider value={{ t, lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}