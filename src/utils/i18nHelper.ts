export function getLocalizedValue<T>(obj: T | undefined | null, lang: string): string {
  if (!obj || typeof obj !== 'object') {
    return '';
  }
  if (obj[lang]) {
    return obj[lang];
  }
  return obj['en'] || '';
}