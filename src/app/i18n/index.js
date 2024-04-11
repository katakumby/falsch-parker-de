import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const initI18next = async (lang, namespace) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lang, namespace) => import(`./locales/${lang}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, namespace));

  return i18nInstance;
};

const useServerTranslation = async (lang, namespace) => {
  const i18nextInstance = await initI18next(lang, namespace);
  return {
    t: i18nextInstance.getFixedT(lang, namespace),
    i18n: i18nextInstance,
  };
};

export { useServerTranslation };
