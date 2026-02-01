// 定义医生信息的类型
export interface Doctor {
  id: string; 
  name: {
    en: string;
    zh: string;
  };
  title: {
    en: string;
    zh: string;
  };
  bio: {
    en: string;
    zh: string;
  };
  image: string;
  fullBio: {
    en: string;
    zh: string;
  };
}