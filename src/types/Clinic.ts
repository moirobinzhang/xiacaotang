import { Service } from "./Service";
import { Doctor } from "./Doctor";
import { Image } from "./Image";

// 定义数据结构的类型
export interface Clinic {
    name: string;

    address: string;
    street: string;
    city: string;
    province: string;
    postalcode: string;

    phone: string;
    mobile: string;
    addresstext: string;
    phonetext: string;
    mobiletext: string;
    email: string;


    fulldayhours: string;
    halfdayhours: string;
    closedhours: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    appointment: string;
    insurance: string;

    copyright: string;

    carouselImages: Image[];

    description: string;
    learnMore: string;
    servicesTitle: string;
    services: Service[];
    doctorsTitle: string;
    doctors: Doctor[];
    contactTitle: string;



    home: string;
}
  
  