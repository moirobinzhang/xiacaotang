
import data from './assets/data.json';
import { Clinic } from './types/Clinic';
import { ClinicList } from './types/ClinicList';
import { LanguageType } from './types/LanguageType'; // 导入 Language 类型

// 强制将导入的 data 转换为 MultiLanguageData 类型
const typedData = data as ClinicList;

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
export const t = <K extends keyof Clinic>(key: K): Clinic[K] => {
  return typedData[currentLanguage][key];
};