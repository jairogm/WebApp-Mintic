import "../../css/buscar-venta.css"

const BuscarVenta = () => {
    return (<>
        <section className="busc-venta-form">
            <div className="busc-venta-form-title">
                <span>Buscar Ventas</span>
            </div>
            <form>
                <div className="busc-venta-input">
                    <label for="">ID Venta</label><input type="text" placeholder="ID Venta" name="" id="" />
                </div>
                <div className="busc-venta-input">
                    <label for="">Identificacion del Cliente</label><input type="text" placeholder="Documento Identidad" name="" id="" />
                </div>
                <div className="busc-venta-input">
                    <label for="">Nombre del Cliente</label><input type="text" placeholder="Nombre del Cliente" name="" id="" />
                </div>
                <div className="busc-venta-input">
                    <label for="">Nombre Vendedor</label><input type="text" placeholder="Nombre Vendedor" name="" id="" />
                </div>
            </form>
            <div className="busc-venta-form-button">
                <input type="button" value="Buscar Venta" />
            </div>
        </section>
    </>)
}



export default BuscarVenta;