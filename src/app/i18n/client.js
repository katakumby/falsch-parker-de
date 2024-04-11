'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOriginal,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, locales, localeCookie } from '@/app/i18n/settings';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (lang, namespace) => import(`./locales/${lang}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? locales : [],
  });

const useClientTranslation = (lang, namespace) => {
  const [cookies, setCookie] = useCookies([localeCookie]);
  const result = useTranslationOriginal(namespace);
  const { i18n } = result;

  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
    return result;
  }

  const [activeLang, setActiveLang] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLang === i18n.resolvedLanguage) {
      return;
    }
    setActiveLang(i18n.resolvedLanguage);
  }, [activeLang, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang) {
      return;
    }
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    if (cookies.i18next === lang) {
      return;
    }
    setCookie(localeCookie, lang, { path: '/' });
  }, [lang, cookies.i18next]);

  return result;
};

export { useClientTranslation };
