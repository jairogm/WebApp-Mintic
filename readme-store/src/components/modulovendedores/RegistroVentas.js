import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function RegistroVentas() {
    const columns = [
        { field: 'id', headerName: 'ID Venta', width: 150 },
        { field: 'name', headerName: 'Nombre Cliente', width: 230 },
        { field: 'total', headerName: 'Total venta', type: 'number', width: 150},
        { field: 'date', headerName: 'Fecha', type: 'date', width: 150}
       
      ];
      
      const rows = [
        { id: 1, name: 'Jon Snow', total: 35000, date: 20102021 },
        { id: 2, name: '', total: '', date: '20102021' }
      ];
      


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        />
    </div>
  );
}

export default RegistroVentas;
