import { useState } from "react";

export const useReservations = () => {  
  const port = "7152";
  
  const urlGetReservations = `https://localhost:${port}/api/reservation/Get`;  
  
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchReservations = async () => {
    try {
      setIsLoading(true);      
      const response = await fetch(urlGetReservations);      
      const data = await response.json();      
      if (data.length > 0) {
        console.log('data', data);        
        setReservations(data);        
      } 
      setIsLoading(false);
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
   
  return {
    reservations,
    fetchReservations,    
    isLoading
  };
};
