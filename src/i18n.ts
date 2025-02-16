import data from './assets/data.json';
import { MultiLanguageData, DataType } from './types/dataTypes';
import { Language } from './types/languageTypes'; // 导入 Language 类型

// 强制将导入的 data 转换为 MultiLanguageData 类型
const typedData = data as MultiLanguageData;

let currentLanguage: Language = (localStorage.getItem('language') as Language) || 'en';

// 设置当前语言
export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  // 触发自定义事件
  window.dispatchEvent(new Event('languageChange'));
};

// 获取当前语言
export const getLanguage = (): Language => {
  return currentLanguage;
};

// 获取翻译内容
export const t = <K extends keyof DataType>(key: K): DataType[K] => {
  return typedData[currentLanguage][key];
};