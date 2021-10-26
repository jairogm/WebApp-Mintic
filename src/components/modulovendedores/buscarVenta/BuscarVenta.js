import { Paper } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import "../../css/buscar-venta.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import usePopUp from "./../../../hooks/usePopUp";
import BuscarVentaPopup from "./BuscarVentaPopup"

function BuscarVenta({ventaEstado,setVentaEstado, setStates}) {
  const [isOpenModal, openModal, closeModal] = usePopUp();
  const [rows, setRows] = useState([]);
  const [idSearch,setIdSearch] = useState("");
  const [idClientSearch,setIdClientSearch] = useState("");
  const [nameClientSearch,setNameClientSearch] = useState("");
  const [wasFound,setWasfound] = useState(true)
  

  const getRows = async () => {
    const res = await axios.get(
      "https://readme-store-api.herokuapp.com/api/sales?sellerid=" +
        localStorage.getItem("userid")
    );
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
    { field: "id", headerName: "ID Venta", flex: 1, minWidth: 200 },
    { field: "name", headerName: "Nombre Cliente", flex: 1, minWidth: 200 },
    {
      field: "total",
      headerName: "Total venta",
      type: "number",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "date",
      headerName: "Fecha",
      type: "date",
      flex: 1,
      minWidth: 200,
    },
  ];

  const getTotal = (detail) => {
    let total = 0;
    detail.map((row) => {
      total += row.price * row.stock;
    });
    // Constante de envío (Ejemplo)
    total += 2000;
    return total;
  };

 const Search = async() => {
      
      const res = await axios.get("https://readme-store-api.herokuapp.com/api/sales?id=" + idSearch + "&clientid=" + idClientSearch + "&clientname=" + nameClientSearch + "&sellerid="+localStorage.getItem("userid"))
      .catch(()=>{
        setWasfound(false)
        openModal()
      })

      if(res){
        if(res.data.length <= 0){
          setWasfound(false)
        }else{
          setVentaEstado(res.data[0])
          setWasfound(true)
        }
      }
      openModal()
  }

  const close = (isModify) => {
    closeModal();
    if (isModify) {
      setStates(false, false, false, true)
    }
}

  return (
    <section>
      <div className="Buscar-venta-form">
        <Paper
          style={{
            margin: "10px 10%",
            padding: "25px 50px",
            width: "350px",
            height: "350px",
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <TextField
              id="idVenta-search"
              label="Buscar por Id de venta"
              type="search"
              onChange={(e)=>setIdSearch(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="idcliente-search"
              label="Buscar por Id del cliente"
              type="search"
              onChange={(e)=>setIdClientSearch(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="nombreCliente-search"
              label="Buscar por Nombre del cliente"
              type="search"
              onChange={(e)=>setNameClientSearch(e.target.value)}
            />
            <br />
            <br />
            <Button variant="contained" onClick={Search}>Buscar</Button>
            <BuscarVentaPopup isOpen={isOpenModal} WasFound={wasFound} close={close} data={ventaEstado} />
          </div>
        </Paper>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </section>
  );
}

export default BuscarVenta;
