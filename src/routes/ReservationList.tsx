import { Link } from "react-router-dom";
import ServiceReservationDT from "../components/ServiceReservationDT";
import service from "../components/ServiceReservationDT";

function ReservationList() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row-reverse">
          <Link to="/reservation">
            <button >Nueva Reserva</button>
          </Link>
        </div>
        <ServiceReservationDT></ServiceReservationDT>
      </div>
    </>
  );
}

export default ReservationList;
