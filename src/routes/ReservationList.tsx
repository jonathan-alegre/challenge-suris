import { Link } from "react-router-dom";
import service from "../components/ReservationsDT";
import ReservationsDT from "../components/ReservationsDT";

function ReservationList() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row-reverse">
          <Link to="/reservation">
            <button >Nueva Reserva</button>
          </Link>
        </div>
        <ReservationsDT></ReservationsDT>
      </div>
    </>
  );
}

export default ReservationList;
