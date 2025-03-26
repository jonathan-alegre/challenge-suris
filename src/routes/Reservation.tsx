import useForm from "../hooks/useForm.js";
import { NewsList } from "../components/NewsList.jsx";


function Reservation() {
  const initialForm = {
    fechaDesde: "",
    fechaHasta: "",
    palabrasClave: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { fechaDesde, fechaHasta, palabrasClave } = formState;

  return (
    <div className="container">      
      <hr />
      <form className="row g-3">
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            name="fechaDesde"
            placeholder="Fecha Desde"
            value={fechaDesde}
            onChange={onInputChange}
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            name="palabrasClave"
            placeholder="Palabras Claves"
            value={palabrasClave}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="fechaHasta"
            placeholder="Fecha Hasta"
            value={fechaHasta}
            onChange={onInputChange}
          />
        </div>
      </form>      
    </div>
  );
};


export default Reservation;