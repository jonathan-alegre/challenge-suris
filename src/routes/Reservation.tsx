import { Link } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import ServicesSelect from "../components/ServicesSelect.js";
import SchedulesSelect from "../components/SchedulesSelect.js";
import { useEffect, useState } from "react";
import { useServices } from "../hooks/useServices";

function Reservation() {
  const initialForm = {
    cliente: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { cliente } = formState;

  const [scheduleId, setScheduleId] = useState(1);
  const [serviceId, setServiceId] = useState(1);

  function selectSchedule(scheduleId) {
    console.log("scheduleId", scheduleId);
    setScheduleId(scheduleId);
  }

  function selectService(serviceId) {
    console.log("serviceId", serviceId);
    setServiceId(serviceId);
  }

  return (
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
          <SchedulesSelect selectSchedule={selectSchedule}></SchedulesSelect>
          <span className="text-danger"></span>
        </div>
        <div className="col-2">
          <label className="control-label pt-2">Cliente</label>
        </div>
        <div className="col-10 pb-3">
          <input
            className="form-control"
            name="cliente"
            value={cliente}
            onChange={onInputChange}
          />
          <span className="text-danger"></span>
        </div>
        <div className="col-5 offset-2">
          <Link to="/reservations">
            <button
              className="btn-primary btn form-control "
              asp-controller="Coupon"
              asp-action="CouponIndex"
            >
              Volver a Reservas
            </button>
          </Link>
        </div>
        <div className="col-5">
          <input
            type="submit"
            value="Guardar"
            className="btn btn-success form-control"
          />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
