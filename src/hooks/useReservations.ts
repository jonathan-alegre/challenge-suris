import { useState } from "react";
import { IReservation } from "../interfaces/IReservation";

export const useReservations = () => {
  const port = "7152";

  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postMessage, setPostMessage] = useState(""); 
  const [postSuccess, setPostSuccess] = useState(false);

  const fetchReservations = async () => {
    const urlGetReservations = `https://localhost:${port}/api/reservation/Get`;

    try {
      setIsLoading(true);
      const response = await fetch(urlGetReservations);
      const data = await response.json();

      if (data.length > 0) {
        console.log("data", data);
        setReservations(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };

  const postReservation = async (reservation: IReservation) => {
    const urlPostReservation = `https://localhost:${port}/api/reservation/Post`;

    try {      
      setIsLoading(true);
      fetch(urlPostReservation, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          setPostMessage(data.message);    
          setPostSuccess(data.isSuccess);
        });
        
        setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    reservations,
    fetchReservations,
    postReservation,
    postMessage,
    postSuccess,
    isLoading  
  };
};
