"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "./dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "medready.lang";
const EVENT = "medready:lang";

function readLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "sv" ? "sv" : "en";
  } catch {
    return "en";
  }
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Lang>(subscribe, readLang, () => "en");

  const setLang = useCallback((l: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
      window.dispatchEvent(new Event(EVENT));
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang, setLang],
  );

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageCtx);
  if (!ctx) {
    return { lang: "en", setLang: () => {}, t: dict.en };
  }
  return ctx;
}
