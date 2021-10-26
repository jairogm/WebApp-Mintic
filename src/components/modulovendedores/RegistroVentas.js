import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function RegistroVentas() {
  const [rows, setRows] = useState([]);

  const getRows = async () => {
    const res = await axios.get(
      "https://readme-store-api.herokuapp.com/api/sales?sellerid=" +
        localStorage.getItem("userid")
    );
    console.log(res.data);
    const gettedRows = res.data.map((row) => {
      return {
        id: row._id,
        name: row.clientname,
        total: getTotal(row.detail),
        date: row.date.slice(4, 16),
      };
    });
    setRows(gettedRows);
  };

  useEffect(() => {
    getRows();
  }, []);

  const columns = [
    { field: "id", headerName: "ID Venta", flex: 1, minWidth:200 },
    { field: "name", headerName: "Nombre Cliente", flex: 1, minWidth:200 },
    { field: "total", headerName: "Total venta", type: "number", flex: 1, minWidth:200},
    { field: "date", headerName: "Fecha", type: "date", flex: 1, minWidth:200 },
  ];

  const getTotal = (detail) => {
    let total = 0;
    detail.map((row) => {
      total += row.price * row.stock;
    });
    // Constante de envío (Ejemplo)
    total += 2000
    return total;
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default RegistroVentas;
