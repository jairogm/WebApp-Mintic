import React, { Component, useState } from 'react';
import "../css/modulo-admin.css";
import FooterComponent from "../footer/FooterComponent";
import GestionUsuarios from "../Gestion_Usuarios";
import GestionInventario from "../gestion-inventario/Inventario";
import GestionVentas from "./gestionventas/GestionVentas"
import BuscarVenta from "../modulovendedores/buscarVenta/BuscarVenta";
import RegistrarVenta from "../modulovendedores/registrarVenta/RegistrarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";
import EstadoVenta from '../estadoventa/EstadoVenta'

function ModuloAdmin() {
    const [openGestionUsuarios, SetOpenGestionUsuarios] = useState(false);
    const [openGestionInventario, SetOpenGestionInventario] = useState(false);
    const [openBuscarVenta, SetOpenBuscarVenta] = useState(false);
    const [openRegistrarVenta, SetOpenRegistrarVenta] = useState(false);
    const [openEstadoVenta, SetOpenEstadoVenta] = useState(false);
    const [ventaEstado, SetVentaEstado] = useState();

    const printForm = () => {
        if (openGestionUsuarios) {
            return <GestionUsuarios />
        }else if(openGestionInventario){
            return <GestionInventario/>
        }else if(openBuscarVenta){
            return <GestionVentas setStates={setStates} setVentaEstado={SetVentaEstado}/>
        }else if(openRegistrarVenta){
            return <RegistrarVenta isAdmin ={true} setStates={setStates}/>
        }else if(openEstadoVenta){
            return <EstadoVenta ventaEstado={ventaEstado} setStates={setStates}/>
        }
    }

    const setStates = (gestUsu,gestInv,buscarVenta,RegsVenta,EstadoVenta) => {
        SetOpenGestionUsuarios(gestUsu)
        SetOpenGestionInventario(gestInv)
        SetOpenBuscarVenta(buscarVenta)
        SetOpenRegistrarVenta(RegsVenta)
        SetOpenEstadoVenta(EstadoVenta)
    }



    return (
        <div>
            <HeaderSimple/>
            <section className="container">
                <section className="side-menu">
                    <button onClick={() =>{setStates(false,false,false,true,false)}}>Registrar Venta</button>
                    <button onClick={() =>{setStates(false,false,true,false,false)}}>Buscar Ventas</button>
                    <button onClick={() =>{setStates(false,true,false,false,false)}}>Manejo Invetario</button>
                    <button onClick={() =>{setStates(true,false,false,false,false)}}>Gestion Usuarios</button>
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