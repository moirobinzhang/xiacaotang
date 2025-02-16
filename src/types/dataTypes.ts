// 定义服务项的类型
export type ServiceType = {
    title: string;
    description: string;
  };
  
  // 定义医生信息的类型
  export type DoctorType = {
    id: string;
    name: string;
    title: string;
    bio: string;
    image: string;
    fullBio: string;
  };
  
  // 定义数据结构的类型
  export type DataType = {
    clinicName: string;
    welcome: string;
    description: string;
    learnMore: string;
    servicesTitle: string;
    services: ServiceType[];
    doctorsTitle: string;
    doctors: DoctorType[];
    contactTitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    insurance: string;
    footerText: string;
    carouselImages: string[];
    home: string;
  };
  
  // 定义多语言数据的类型
  export type MultiLanguageData = {
    en: DataType;
    zh: DataType;
  };