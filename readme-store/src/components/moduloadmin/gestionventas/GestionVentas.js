import React, { useState, useEffect, Component, setTimeout } from "react";
import GestionVentaspopup from './GestionVentasPopup';
import "../../css/Gestion_Usuarios.css"
import usePopUp from "./../../../hooks/usePopUp";
import axios from 'axios';


class VentaTabla extends Component {
    render() {
        return (
            <>
                <div className={this.props.row}>{this.props.sale.id}</div>
                <div className={this.props.row}>{this.props.sale.sellerid}</div>
                <div className={this.props.row}>{this.props.sale.sellername}</div>
                <div className={this.props.row}>{this.props.sale.date}</div>
                <div className={this.props.row}>{this.props.sale.status}</div>
                <div className={this.props.row}>{this.props.sale.clientname}</div>
            </>)
    }
}


function Gestion_Ventas() {
    const [isOpenModal, openModal, closeModal] = usePopUp();
    const [sales, setSales] = useState([])
    const [idSearch, setIdSearch] = useState("")
    const [IdClSearch, setIdClSearch] = useState("")
    const [NameClSearch, setNameClSearch] = useState("")
    const [DateSearch, setDateSearch] = useState("")
    const [WasFound, setWasFound] = useState(true)
    const [isModidy, setIsModidy] = useState(true)
    const [saleData, setSaleData] = useState({})

    const getSales = async () => {
        const res = await axios.get("https://readme-store-api.herokuapp.com/api/sales")
        const salesGetted = res.data.map(sale => {
            return {
                id: sale._id,
                sellerid: sale.sellerid,
                sellername: sale.sellername,
                date: sale.date,
                status: sale.status,
                clientname: sale.clientname
            }
        });
        setSales(salesGetted)
    }

    useEffect(() => {
        getSales();
    }, []);

    const close = () => {
        closeModal();
        getSales();
        setWasFound(true)
    }

    const printSales = () => {
        let row = "row-pair";
        return <>
            {sales.map((sale) => {
                row = row === "row-odd" ? "row-pair" : "row-odd"
                return <VentaTabla key={sale.id} sale={sale} row={row} />
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

            res = await axios.get("https://readme-store-api.herokuapp.com/api/sales?id=" + idSearch + "&clientid=" + IdClSearch + "&clientname=" + NameClSearch+ "&date=" + DateSearch)

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

            <section className="gest-usu-section-1-container">
                <div className="gest-usu-search-box">
                    <div className="gest-usu-search-row">
                        <p className="gest-usu-p-search">Buscar ID:</p>
                        <input type="text" className="gest-usu-search-input" placeholder="ID" onChange={(e) => setIdSearch(e.target.value)} value={idSearch} />
                    </div>
                    <div className="gest-usu-search-row">
                        <p className="gest-usu-p-search">ID Cliente:</p>
                        <input type="text" className="gest-usu-search-input" placeholder="ID Cliente" onChange={(e) => setIdClSearch(e.target.value)} value={IdClSearch} />
                    </div>
                    <div className="gest-usu-search-row">
                        <p className="gest-usu-p-search">Nombre Cliente:</p>
                        <input type="text" className="gest-usu-search-input" placeholder="Nombre Cliente" onChange={(e) => setNameClSearch(e.target.value)} value={NameClSearch} />
                    </div>
                    <div className="gest-usu-search-row">
                        <p className="gest-usu-p-search">Fecha:</p>
                        <input type="text" className="gest-usu-search-input" placeholder="Fecha Venta" onChange={(e) => setDateSearch(e.target.value)} value={DateSearch} />
                    </div>

                    <div className="gest-usu-search-box-buttons">
                        <button onClick={() => { Search(); setIsModidy(false) }} className="gest-usu-btn gest-usu-btn-search">Buscar</button>
                        <button onClick={() => { Search(); setIsModidy(true) }} className="gest-usu-btn gest-usu-btn-search">Actualizar</button>
                        <GestionVentaspopup isOpen={isOpenModal} WasFound={WasFound} close={close} data={saleData} isModidy={isModidy} />

                    </div>
                </div>

                <div className="gest-usu-user-table">
                    <div className="gest-usu-row-head">Id Venta</div>
                    <div className="gest-usu-row-head">Id Vendedor</div>
                    <div className="gest-usu-row-head">Nombre Vendedor</div>
                    <div className="gest-usu-row-head">Fecha</div>
                    <div className="gest-usu-row-head">Status</div>
                    <div className="gest-usu-row-head">Nombre Cliente</div>


                    {
                        printSales()
                    }
                </div>
            </section>
        </div>
    )
}


export default Gestion_Ventas;