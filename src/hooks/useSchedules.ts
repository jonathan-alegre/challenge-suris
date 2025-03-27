import { useState } from "react";

export const useSchedules = () => {  
  const port = "7152";
  
  const urlGetSchedules = `https://localhost:${port}/api/schedule/Get`;  
  
  const [schedules, setSchedules] = useState([]);  

  const fetchSchedules = async () => {
    try {      
      const response = await fetch(urlGetSchedules);      
      const data = await response.json();      
      if (data.length > 0) {
        console.log('data schedules', data);        
        setSchedules(data);        
      }       
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
   
  return {
    schedules,
    fetchSchedules,        
  };
};
