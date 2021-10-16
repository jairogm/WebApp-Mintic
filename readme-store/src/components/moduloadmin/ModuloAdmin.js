import React, { Component, useState } from 'react';
import "../css/modulo-admin.css";
import FooterComponent from "../footer/FooterComponent";
import GestionUsuarios from "../Gestion_Usuarios";
import GestionInventario from "../gestion-inventario/Inventario";
import BuscarVenta from "../modulovendedores/buscarVenta/BuscarVenta";
import RegistrarVenta from "../modulovendedores/registrarVenta/RegistrarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";

function ModuloAdmin() {
    const [openGestionUsuarios, SetOpenGestionUsuarios] = useState(false);
    const [openGestionInventario, SetOpenGestionInventario] = useState(false);
    const [openBuscarVenta, SetOpenBuscarVenta] = useState(false);
    const [openRegistrarVenta, SetOpenRegistrarVenta] = useState(false);

    const printForm = () => {
        if (openGestionUsuarios) {
            return <GestionUsuarios />
        }else if(openGestionInventario){
            return <GestionInventario/>
        }else if(openBuscarVenta){
            return <BuscarVenta/>
        }else if(openRegistrarVenta){
            return <RegistrarVenta/>
        }
    }

    const setStates = (gestUsu,gestInv,buscarVenta,RegsVenta) => {
        SetOpenGestionUsuarios(gestUsu)
        SetOpenGestionInventario(gestInv)
        SetOpenBuscarVenta(buscarVenta)
        SetOpenRegistrarVenta(RegsVenta)
    }



    return (
        <div>
            <HeaderSimple/>
            <section className="container">
                <section className="side-menu">
                    <button onClick={() =>{setStates(false,false,false,true)}}>Registrar Venta</button>
                    <button >Registro de ventas</button>
                    <button onClick={() =>{setStates(false,false,true,false)}}>Buscar Ventas</button>
                    <button onClick={() =>{setStates(false,true,false,false)}}>Manejo Invetario</button>
                    <button onClick={() =>{setStates(true,false,false,false)}}>Gestion Usuarios</button>
                    <button>Cerrar Sesion</button>
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


export default ModuloAdmin;