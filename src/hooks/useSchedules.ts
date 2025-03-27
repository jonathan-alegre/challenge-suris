import { useState } from "react";

export const useSchedules = () => {
  const port = "7152";

  const [schedules, setSchedules] = useState([]);

  const fetchSchedulesByService = async (serviceId) => {
    console.log('fetch schedule', serviceId);

    if (serviceId != '') {
      try {
        const urlGetSchedules = `https://localhost:${port}/api/schedule/GetByService/${serviceId}`;
        const response = await fetch(urlGetSchedules);
        const data = await response.json();
        if (data.length > 0) {
          console.log("data schedules", data);
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
