import React, { Component, useState } from 'react';
import FooterComponent from "../footer/FooterComponent";
import BuscarVenta from "./buscarVenta/BuscarVenta";
import RegistrarVenta from "./registrarVenta/RegistrarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";



import "./../css/vendedores.css"

function Vendedores() {
    const[openRegistrarVenta, SetOpenRegistrarVenta] = useState(false);
    const [openBuscarVenta, SetOpenBuscarVenta] = useState(false);

    const printForm = ()=> {
        if (openRegistrarVenta) {
            return <RegistrarVenta/>
        }else if(openBuscarVenta){
            return <BuscarVenta/>
        }
    }

    const setStates = (RegistrarVenta,buscarVenta) => {
        SetOpenRegistrarVenta(RegistrarVenta)
        SetOpenBuscarVenta(buscarVenta)  
    }


    return (
        <div>
            <HeaderSimple/>
            <section className="container">
                <section className="side-menu">
                    <button >Informacion del vendedor</button>
                    <button onClick={() =>{setStates(true,false,false,false)}}>Registrar Venta</button>
                    <button >Ventas del Mes</button>
                    <button onClick={() =>{setStates(false,true,false,false)}}>Buscar Ventas</button>
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