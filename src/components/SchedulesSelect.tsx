import { useEffect } from "react";
import { useSchedules } from "../hooks/useSchedules";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface Schedule {
  scheduleId: number;
  dateTime: string;
}

interface SchedulesSelectProps {
  selectSchedule: (scheduleId: number) => void;
}

function SchedulesSelect({ selectSchedule }: SchedulesSelectProps) {
  const { schedules, fetchSchedulesByService } = useSchedules();
  const selectedServiceId = useSelector((state: RootState) => state.service.selectedServiceId);

  useEffect(() => {    
    if (selectedServiceId) {
      fetchSchedulesByService(selectedServiceId);
    }
  }, [selectedServiceId]);

  return (
    <>
      <select
        required
        name="servicios"
        id="servicios"
        className="form-control"
        onChange={(event) => selectSchedule(Number(event.target.value))}
      >
        <option value=""></option>
        {schedules.map((schedule: Schedule, id: number) => (
          <option key={id} value={schedule.scheduleId}>
            {new Date(schedule.dateTime).toLocaleString()}
          </option>
        ))}
      </select>
    </>
  );
}

export default SchedulesSelect;
