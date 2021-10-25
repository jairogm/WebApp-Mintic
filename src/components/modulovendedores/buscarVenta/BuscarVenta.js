import { Paper } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import "../../css/buscar-venta.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { height } from "@mui/system";

function BuscarVenta() {
    const [rows, setRows] = useState([]);

    const getRows = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/sales?sellerid=" +
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
    <section>
      <div className="Buscar-venta-form">
        <Paper
          style={{
            margin: "10px 10%",
            padding: "25px 50px",
            width: "350px",
            height:"350px"
          }}
        >
          <form style={{ marginTop: "20px" }}>
            <TextField
              id="idVenta-search"
              label="Buscar por Id de venta"
              type="search"
            />
             <br/>
             <br/>
            <TextField
              id="idcliente-search"
              label="Buscar por Id del cliente"
              type="search"
            />
             <br/>
             <br/>
            <TextField
              id="nombreCliente-search"
              label="Buscar por Nombre del cliente"
              type="search"
            />
            <br/>
            <br/>
            <Button variant="contained">Buscar</Button>
          </form>
        </Paper>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[5]}
        />
      </div>
    </section>
  );
}

export default BuscarVenta;
