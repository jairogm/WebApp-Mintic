import React, { Component, useState } from 'react';
import FooterComponent from "../footer/FooterComponent";
import BuscarVenta from "./buscarVenta/BuscarVenta";
import RegistrarVenta from "./registrarVenta/RegistrarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";
import GestionVendedores from "../gestion-vendedores/gestion-vendedores"
import RegistroVentas from './RegistroVentas';
import EstadoVenta from "../estadoventa/EstadoVenta"


import "./../css/vendedores.css"

function Vendedores() {
    let userid = localStorage.getItem('userid')
    if (!userid) {
        window.localStorage.clear()
        window.sessionStorage.clear()
        window.location.replace("/login")
    }
    
    const [openRegistrarVenta, SetOpenRegistrarVenta] = useState(false);
    const [openRegistroVentas, SetopenRegistroVentas] = useState(false);
    const [openBuscarVenta, SetOpenBuscarVenta] = useState(false);
    const [openEstadoVenta, SetOpenEstadoVenta] = useState(false);
    const [ventaEstado, setVentaEstado] = useState({});

    const printForm = () => {
        if (openRegistrarVenta) {
            return <RegistrarVenta setStates={setStates}/>
        } else if (openRegistroVentas) {
            return <RegistroVentas />
        } else if (openBuscarVenta) {
            return <BuscarVenta ventaEstado={ventaEstado} setVentaEstado={setVentaEstado} setStates={setStates}/>
        }else if (openEstadoVenta){
            return <EstadoVenta ventaEstado={ventaEstado} setStates={setStates}/>
        }
    }

    const setStates = (RegistrarVenta, RegistroVentas, buscarVenta, estadoventa) => {
        SetOpenRegistrarVenta(RegistrarVenta)
        SetopenRegistroVentas(RegistroVentas)
        SetOpenBuscarVenta(buscarVenta)
        SetOpenEstadoVenta(estadoventa)
    }


    return (
        <div>
            <HeaderSimple />
            <section className="container">
                <section className="side-menu">
                    <button onClick={() => { setStates(true, false, false, false) }}>Registrar Venta</button>
                    <button onClick={() => { setStates(false, true, false, false) }}>Ventas del Mes</button>
                    <button onClick={() => { setStates(false, false, true, false) }}>Buscar Ventas</button>
                </section>

                <section className="form">
                    {
                        printForm()
                    }
                </section>
            </section>
            <FooterComponent />
        </div>
    )
}

export default Vendedores;