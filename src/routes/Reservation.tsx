import useForm from "../hooks/useForm.js";

function Reservation() {
  const initialForm = {
    cliente: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { cliente } = formState;

  return (
    <div className="card offset-3 col-md-6">
      <div className="card-header">
        <h3>Nueva Reserva</h3>
      </div>
      <div className="card-body">
        <div className="row py-md-1 offset-3">
          <div className="d-flex flex-row">
            <div className="p-2">Servicios</div>
            <select
              name="servicios"
              id="servicios"
              className="form-select w-auto"
            >
              <option value="1">Limpieza</option>
            </select>
          </div>
        </div>

        <div className="row py-md-1 offset-3">
          <div className="d-flex flex-row">
            <div className="p-2">Horarios</div>
            <select
              name="horarios"
              id="horarios"
              className="form-select w-auto"
            >
              <option value="1">08:00</option>
            </select>
          </div>
        </div>

        <div className="row py-md-1 offset-3">
          <div className="d-flex flex-row">
            <div className="p-2">Cliente</div>
            <div>
              <input
                type="text"
                className="form-control"
                name="cliente"
                placeholder="Nombre Cliente"
                value={cliente}
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6"></div>
      <div className="col-md-6"></div>
    </div>
  );
}

export default Reservation;
