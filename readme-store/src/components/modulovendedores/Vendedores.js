import BuscarVenta from "./buscarVenta/BuscarVenta";
import HeaderSimple from "../headerSimple/HeaderSimple";
import FooterComponent from "../footer/FooterComponent";

import "../css/vendedores.css"

const Vendedores = () => {
    return (<>
        <HeaderSimple/>
        <section class="container">
            <section class="side-menu">
                <a href="">Información Vendedor</a>
                <a href="">Registrar Venta</a>
                <a href="">Ventas del Mes</a>
                <a href="">Buscar Ventas</a>
            </section>
            <BuscarVenta/>
        </section>
        <FooterComponent/>
    </>)
}



export default Vendedores;