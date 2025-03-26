import { useState } from "react";
import DataTable from "datatables.net-react";
import DT from 'datatables.net-dt';

function ServiceReservationDT() {
  DataTable.use(DT);

  const [tableData, setTableData] = useState([
    ["Electricidad", "14:00", "Jonathna Alegre"],
    ["Fontaneria", "15:00", "Agustina Alegre"],
    // ...
  ]);

  return (
    <>      
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

export default ServiceReservationDT;
