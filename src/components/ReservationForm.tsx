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

  const [scheduleId, setScheduleId] = useState(1);
  const [serviceId, setServiceId] = useState(1);

  const { postReservation, postMessage, postSuccess } = useReservations();

  const selectSchedule = (scheduleId) => {
    console.log("scheduleId", scheduleId);
    setScheduleId(scheduleId);
  };

  const selectService = (serviceId) => {
    console.log("serviceId", serviceId);
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
      {postSuccess ? (
        <ReservationList></ReservationList>
      ) : (
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
                <span className="text-danger"></span>
              </div>
              <div className="col-2">
                <label className="control-label pt-2">Fecha y Horario</label>
              </div>
              <div className="col-10 pb-3">
                <SchedulesSelect
                  selectSchedule={selectSchedule}
                ></SchedulesSelect>
                <span className="text-danger"></span>
              </div>
              <div className="col-2">
                <label className="control-label pt-2">Cliente</label>
              </div>
              <div className="col-10 pb-3">
                <input
                  className="form-control"
                  name="clientName"
                  value={clientName}
                  onChange={onInputChange}
                />
                <span className="text-danger"></span>
              </div>
              <div className="offset-4 col-4">
                <input
                  type="submit"
                  value="Guardar"
                  className="btn btn-success form-control"
                />
              </div>
              <div className="offset-3 col-6">
                <span className="text-danger">{postMessage}</span>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default ReservationForm;
