interface Method {
    delay: number;
    id: number;
    method: string;
    price: number;
    serviceId: number;
  }
  
  interface Service {
    companyId: number;
    country: string;
    id: number;
    methods: Method[];
  }
  
  interface ICompany {
    id: number;
    name: string;
    visitors: number;
    website: string;
    delivery: number;
    services: Service[];
  }


  interface ImageData {
    img : {
        blurHeight: number;
        blurWidth: number;
        height: number;
        src: string;
        width: number;
    }
    name: string;
  }