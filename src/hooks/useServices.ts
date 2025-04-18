import { useState } from "react";

interface Service {
  serviceId: number;
  name: string;
}

export const useServices = () => {  
  const port = "7152";
  
  const urlGetServices = `https://localhost:${port}/api/service/Get`;  
  
  const [services, setServices] = useState<Service[]>([]);  

  const fetchServices = async () => {
    try {      
      const response = await fetch(urlGetServices);      
      const data = await response.json();      
      if (data.length > 0) {        
        setServices(data);        
      }       
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
   
  return {
    services,
    fetchServices,        
  };
};
