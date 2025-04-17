import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useGetSchedulesByServiceQuery } from "../store/apiSlice";

interface SchedulesSelectProps {
  selectSchedule: (scheduleId: number) => void;
}

function SchedulesSelect({ selectSchedule }: SchedulesSelectProps) {
  const selectedServiceId = useSelector((state: RootState) => state.service.selectedServiceId);
  const { data: schedules, isFetching, error } = useGetSchedulesByServiceQuery(selectedServiceId!, {
    skip: !selectedServiceId,
  });

  if (isFetching) return <div>Cargando horarios...</div>;
  if (error) return <div>Error al cargar horarios</div>;
  if (!schedules) return <div>No hay horarios disponibles</div>;

  return (
    <select
      className="form-control"
      onChange={(e) => selectSchedule(Number(e.target.value))}
    >
      <option value=""></option>
      {schedules.map((schedule) => (
        <option key={schedule.id} value={schedule.id}>
          {new Date(schedule.dateTime).toLocaleString()}
        </option>
      ))}
    </select>
  );
}

export default SchedulesSelect;
