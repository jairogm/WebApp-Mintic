import React, { Component, useState } from 'react';
import FooterComponent from "../footer/FooterComponent";
import BuscarVenta from "./buscarVenta/BuscarVenta";
import RegistrarVenta from "./registrarVenta/RegistrarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";
import GestionVendedores from "../gestion-vendedores/gestion-vendedores"
import RegistroVentas from './RegistroVentas';


import "./../css/vendedores.css"

function Vendedores() {
    const[openGestionVendedores, SetopenGestionVendedores] = useState(false);
    const[openRegistrarVenta, SetOpenRegistrarVenta] = useState(false);
    const[openRegistroVentas, SetopenRegistroVentas] = useState(false);
    const[openBuscarVenta, SetOpenBuscarVenta] = useState(false);

    const printForm = () => {
        if (openGestionVendedores) {
            return <GestionVendedores/>
        }else if(openRegistrarVenta){
            return <RegistrarVenta/>
        }else if(openRegistroVentas){
            return <RegistroVentas/>  
        }else if(openBuscarVenta){
            return <BuscarVenta/>
        }
    }

    const setStates = (GestionVendedores,RegistrarVenta,RegistroVentas,buscarVenta) => {
        SetopenGestionVendedores(GestionVendedores)
        SetOpenRegistrarVenta(RegistrarVenta)
        SetopenRegistroVentas(RegistroVentas)
        SetOpenBuscarVenta(buscarVenta)  
    }


    return (
        <div>
            <HeaderSimple/>
            <section className="container">
                <section className="side-menu">
                    <button onClick={()=>{setStates(true,false,false,false)}}>Informacion del vendedor</button>
                    <button onClick={() =>{setStates(false,true,false,false)}}>Registrar Venta</button>
                    <button onClick={() =>{setStates(false,false,true,false)}}>Ventas del Mes</button>
                    <button onClick={() =>{setStates(false,false,false,true)}}>Buscar Ventas</button>
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