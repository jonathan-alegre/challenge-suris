import useForm from "../hooks/useForm.js";
import ServicesSelect from "./ServicesSelect.js";
import SchedulesSelect from "./SchedulesSelect.js";
import { useEffect, useState } from "react";
import { useReservations } from "../hooks/useReservations.js";
import loading from "../assets/loading.gif";
import ReservationList from "../routes/ReservationList.js";

function ReservationForm() {
  const initialForm = {
    clientName: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { clientName } = formState;

  const [scheduleId, setScheduleId] = useState();
  const [serviceId, setServiceId] = useState();

  const { postReservation, postMessage, postSuccess, isLoading } =
    useReservations();

  const selectSchedule = (scheduleId) => {    
    setScheduleId(scheduleId);
  };

  const selectService = (serviceId) => {    
    setServiceId(serviceId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      serviceId: serviceId,
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
              <ServicesSelect selectService={selectService}></ServicesSelect>              
            </div>
            <div className="col-2">
              <label className="control-label pt-2">Fecha y Horario</label>
            </div>
            <div className="col-10 pb-3">
              <SchedulesSelect
                selectSchedule={selectSchedule}
                serviceId={serviceId}
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
              {postSuccess != true ? (
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
