import { Service } from "./Service";
import { Doctor } from "./Doctor";
import { Image } from "./Image";

// 定义数据结构的类型
export interface Clinic {
    name: {
        en: string;
        zh: string;
    };

    address: {
        en: string;
        zh: string;
    };
    street: {
        en: string;
        zh: string;
    };
    city: {
        en: string;
        zh: string;
    };
    province: {
        en: string;
        zh: string;
    };
    postalcode: string;

    phone: string;
    mobile: string;
    addresstext: {
        en: string;
        zh: string;
    };
    phonetext: {
        en: string;
        zh: string;
    };
    mobiletext: {
        en: string;
        zh: string;
    };
    email: string;


    fulldayhours: string;
    halfdayhours: string;
    closedhours: string;
    monday: {
        en: string;
        zh: string;
    };
    tuesday: {
        en: string;
        zh: string;
    };
    wednesday: {
        en: string;
        zh: string;
    };
    thursday: {
        en: string;
        zh: string;
    };
    friday: {
        en: string;
        zh: string;
    };
    saturday: {
        en: string;
        zh: string;
    };
    sunday: {
        en: string;
        zh: string;
    };
    appointment: {
        en: string;
        zh: string;
    };
    insurance: {
        en: string;
        zh: string;
    };

    copyright: string;

    carouselImages: Image[];

    description: {
        en: string;
        zh: string;
    };
    learnMore: string;
    servicesTitle: string;
    services: Service[];
    doctorsTitle: string;
    doctors: Doctor[];
    contactTitle: string;



    home: string;
}

