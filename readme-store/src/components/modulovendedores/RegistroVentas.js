import React, { useState, useEffect, Component, setTimeout } from "react";
import GestionVentaspopup from '../moduloadmin/gestionventas/GestionVentasPopup';
import "../css/GestionVentas.css"
import usePopUp from "../../hooks/usePopUp";
import axios from 'axios';



function RegistroVentas({ setStates, setVentaEstado, renderAgain, SetRenderAgain }) {
    const [isOpenModal, openModal, closeModal] = usePopUp();
    const [sales, setSales] = useState([])
    const [idSearch, setIdSearch] = useState("")
    const [IdClSearch, setIdClSearch] = useState("")
    const [NameClSearch, setNameClSearch] = useState("")
    const [DateSearch, setDateSearch] = useState("")
    const [WasFound, setWasFound] = useState(true)
    const [saleData, setSaleData] = useState({})

    const getSales = async () => {
        const res = await axios.get("https://readme-store-api.herokuapp.com/api/sales")
        const salesGetted = res.data.map(sale => {
            return {
                id: sale._id,
                clientid: sale.clientid,
                clientname: sale.clientname,
                date: sale.date
            }
        });
        setSales(salesGetted)
    }

    useEffect(() => {
        getSales();
        if (renderAgain) {
            SetRenderAgain(false);
            setStates(false,false,true,false,false)
        }
    }, []);

    const close = (isModidy) => {
        closeModal();
        if (isModidy) {
            setVentaEstado(saleData)
            setStates(false,false,false,false,true)
        } else {
            setWasFound(true)
        }
    }

    const printSales = () => {
        let row = "row-pair";
        return <>
            {sales.map((sale) => {
                row = row === "row-odd" ? "row-pair" : "row-odd"
                return <RegistroVentas key={sale.id} sale={sale} row={row} />
            })}
        </>
    }

    const notParams = () => {
        if (idSearch === "" && NameClSearch === "" && IdClSearch === "" && DateSearch === "") {
            return true;
        }
        return false;
    }

    const Search = async () => {
        let res = ""
        if (notParams()) {

            setWasFound(false);

        } else {

            res = await axios.get("https://readme-store-api.herokuapp.com/api/sales?id=" + idSearch + "&clientid=" + IdClSearch + "&clientname=" + NameClSearch + "&date=" + DateSearch)

            if (res.data.length === 0) {
                setWasFound(false)
            } else {
                setSaleData(res.data[0])
            }

        }
        openModal()
    }

    return (
        <div>

            <section className="gest-ven-section-1-container">
                <div className="gest-ven-search-box">
                    <div className="gest-ven-search-row">
                        <p className="gest-ven-p-search">Buscar ID:</p>
                        <input type="text" className="gest-ven-search-input" placeholder="ID" onChange={(e) => setIdSearch(e.target.value)} value={idSearch} />
                    </div>
                    <div className="gest-ven-search-row">
                        <p className="gest-ven-p-search">ID Cliente:</p>
                        <input type="text" className="gest-ven-search-input" placeholder="ID Cliente" onChange={(e) => setIdClSearch(e.target.value)} value={IdClSearch} />
                    </div>
                    <div className="gest-ven-search-row">
                        <p className="gest-ven-p-search">Nombre Cliente:</p>
                        <input type="text" className="gest-ven-search-input" placeholder="Nombre Cliente" onChange={(e) => setNameClSearch(e.target.value)} value={NameClSearch} />
                    </div>
                    <div className="gest-ven-search-row">
                        <p className="gest-ven-p-search">Fecha:</p>
                        <input type="text" className="gest-ven-search-input" placeholder="Fecha Venta" onChange={(e) => setDateSearch(e.target.value)} value={DateSearch} />
                    </div>

                    <div className="gest-ven-search-box-buttons">
                        <button onClick={() => { Search() }} className="gest-ven-btn gest-ven-btn-search">Buscar</button>
                        <GestionVentaspopup isOpen={isOpenModal} WasFound={WasFound} close={close} data={saleData} />

                    </div>
                </div>

                <div className="gest-ven-user-table">
                    <div className="gest-ven-row-head">Id Venta</div>
                    <div className="gest-ven-row-head">Id Cliente</div>
                    <div className="gest-ven-row-head">Nombre Cliente</div>
                    <div className="gest-ven-row-head">Fecha</div>


                    {
                        printSales()
                    }
                </div>
            </section>
        </div>
    )
}


export default RegistroVentas;