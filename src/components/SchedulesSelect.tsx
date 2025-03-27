import { useEffect } from "react";
import { useSchedules } from "../hooks/useSchedules";
import useForm from "../hooks/useForm.js";

function SchedulesSelect({ selectSchedule }) {
  const { schedules, fetchSchedules } = useSchedules();

  useEffect(() => {
    fetchSchedules();
  }, []);
  

  return (
    <>
      <select
        required
        name="servicios"
        id="servicios"
        className="form-control"      
        onChange={(event)=> selectSchedule(event.target.value)}        
      >
        <option value=""></option>
        {schedules.map((schedule, id) => (
          <option key={id} value={schedule.scheduleId}>
            {new Date(schedule.dateTime).toLocaleString()}
          </option>
        ))}
      </select>
    </>
  );
}

export default SchedulesSelect;
