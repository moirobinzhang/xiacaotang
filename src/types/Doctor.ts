// 定义医生信息的类型
export interface Doctor {
  name: {
    en: string;
    zh: string;
  };
  titles: {
    en: string[];
    zh: string[];
  };
  bio: {
    en: string;
    zh: string;
  };
  image: string;
  specialties: {
    en: string[];
    zh: string[];
  };
}