import { useState } from "react";

interface Schedule {
  scheduleId: number;
  dateTime: string;
}

export const useSchedules = () => {
  const port = "7152";

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const fetchSchedulesByService = async (serviceId: number) => {    
    if (serviceId !== 0) {
      try {
        const urlGetSchedules = `https://localhost:${port}/api/schedule/GetByService/${serviceId}`;
        const response = await fetch(urlGetSchedules);
        const data = await response.json();
        if (data.length > 0) {          
          setSchedules(data);
        }
      } catch (error) {
        console.error("Ha ocurrido un error", error);
      }
    } else {
      setSchedules([]);
    }
  };

  return {
    schedules,
    fetchSchedulesByService,
  };
};
