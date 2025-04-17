import { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useReservations } from "../hooks/useReservations";
import loading from "../assets/loading.gif";

function ReservationsDT() {
  DataTable.use(DT);

  const [tableData, setTableData] = useState<(string | number)[][]>([]);

  const { reservations, fetchReservations, isLoading } = useReservations();

  useEffect(() => {
       fetchReservations();    
  }, []);

  useEffect(() => {    
    if (reservations.length > 0) {
      setTableData(reservations.map((service) => [
        service.service.name,
        new Date(service.schedule.dateTime).toLocaleString(),
        service.clientName,        
        new Date(service.creationDate).toLocaleString(),
      ]));    
    }
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
            <th className="text-center">Servicio</th>
            <th  className="text-center">Día y Horario</th>
            <th  className="text-center">Cliente</th>
            <th  className="text-center">Fecha Alta</th>
          </tr>
        </thead>
      </DataTable>
    </>
  );
}

export default ReservationsDT;
