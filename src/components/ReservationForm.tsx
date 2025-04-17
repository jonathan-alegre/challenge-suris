import useForm from "../hooks/useForm";
import ServicesSelect from "./ServicesSelect";
import SchedulesSelect from "./SchedulesSelect";
import { useState, FormEvent } from "react";
import { useReservations } from "../hooks/useReservations";
import { Reservation } from "../interfaces/Reservation";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function ReservationForm() {
  const initialForm = {
    clientName: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { clientName } = formState;

  const [scheduleId, setScheduleId] = useState<number | undefined>();
  const selectedServiceId = useSelector((state: RootState) => state.service.selectedServiceId);

  const { postReservation, postMessage, postSuccess } = useReservations();

  const selectSchedule = (scheduleId: number) => {    
    setScheduleId(scheduleId);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!scheduleId || !selectedServiceId) return;

    const reservation: Reservation = {
      serviceId: selectedServiceId,
      scheduleId: scheduleId,
      clientName: clientName,
    };

    postReservation(reservation);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container border p-3">
          <h1 className="text-center">Nueva Reserva</h1>
          <hr />
          <div className="row">
            <div className="col-2">
              <label className="control-label pt-2">Servicio</label>
            </div>
            <div className="col-10 pb-3">
              <ServicesSelect></ServicesSelect>              
            </div>
            <div className="col-2">
              <label className="control-label pt-2">Fecha y Horario</label>
            </div>
            <div className="col-10 pb-3">
              <SchedulesSelect
                selectSchedule={selectSchedule}
              ></SchedulesSelect>            
            </div>
            <div className="col-2">
              <label className="control-label pt-2">Cliente</label>
            </div>
            <div className="col-10 pb-3">
              <input
                required 
                className="form-control"
                name="clientName"
                value={clientName}
                onChange={onInputChange}
              />              
            </div>
            <div className="offset-4 col-4">
              <input
                type="submit"
                value="Reservar"
                className="btn btn-success form-control"
              />
            </div>
            <div className="offset-3 col-6">
              {postSuccess !== true ? (
                <span className="text-danger">{postMessage}</span>
              ) : (
                <span className="text-success">Reserva generada.</span>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ReservationForm;
