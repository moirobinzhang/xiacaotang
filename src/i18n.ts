import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../public/locales/en/translation.json';
import translationZH from '../public/locales/zh/translation.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      zh: { translation: translationZH },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    load: 'languageOnly', // Ensures 'en-US' resolves to 'en'
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

import { LanguageType } from './types/LanguageType'; // 导入 Language 类型
import i18nEn from '../public/locales/en/translation.json';
import i18nZh from '../public/locales/zh/translation.json';

interface TranslationData {
  [key: string]: string | TranslationData;
}

const i18nData: Record<LanguageType, TranslationData> = { en: i18nEn, zh: i18nZh };

let currentLanguage: LanguageType = (localStorage.getItem('language') as LanguageType) || 'en';

// 设置当前语言
export const setLanguage = (lang: LanguageType) => {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  // 触发自定义事件
  window.dispatchEvent(new Event('languageChange'));
};

// 获取当前语言
export const getLanguage = (): LanguageType => {
  return currentLanguage;
};

// 获取翻译内容
export const t = (key: string): string => {
  const keys = key.split('.');
  let value: TranslationData | string = i18nData[currentLanguage];
  for (const k of keys) {
    if (typeof value === 'object' && value !== null) {
      value = value[k];
    } else {
      return key; // Return the key if translation is missing
    }
  }
  return typeof value === 'string' ? value : key;
};

// 获取本地化值
// 获取本地化值
export const getLocalizedValue = <T>(field: { en: T; zh: T } | undefined, language: string): T => {
  if (!field) return '' as unknown as T;
  const langKey = (language === 'zh' ? 'zh' : 'en') as keyof typeof field;
  return field[langKey] || field['en'];
};