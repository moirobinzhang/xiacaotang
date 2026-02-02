export function getLocalizedValue<T>(obj: T | undefined | null, lang: string): string {
  console.log('Lang:', lang, 'Field Data:', obj);
  if (!obj || typeof obj !== 'object') {
    return '';
  }
  if (obj[lang]) {
    return obj[lang];
  }
  return obj['en'] || '';
}