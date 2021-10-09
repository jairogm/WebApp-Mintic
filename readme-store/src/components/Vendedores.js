import BuscarVenta from "./BuscarVenta";
import HeaderSimple from "./HeaderSimple";
import FooterComponent from "./FooterComponent";

import "./css/Vendedores.css"

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