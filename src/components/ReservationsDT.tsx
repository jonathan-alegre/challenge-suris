import { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useReservations } from "../hooks/useReservations";
import loading from "../assets/loading.gif";

function ReservationsDT() {
  DataTable.use(DT);

  const [tableData, setTableData] = useState([]);

  const { reservations, fetchReservations, isLoading } = useReservations();

  useEffect(() => {
       fetchReservations();    
  }, []);

  useEffect(() => {    
      setTableData(reservations.map((service) => [
        service.service.name,
        service.schedule.dateTime,
        service.clientName
      ]));    
  }, [reservations])

  return (
    <>
      {isLoading && (
        <div className="text-center">
          <img src={loading} alt="Cargando..." width={40} height={40} />
        </div>
      )}
      <DataTable data={tableData} className="display">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Horario</th>
            <th>Cliente</th>
          </tr>
        </thead>
      </DataTable>
    </>
  );
}

export default ReservationsDT;
