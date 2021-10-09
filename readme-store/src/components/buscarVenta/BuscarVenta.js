
const BuscarVenta = () => {
    return (<>
        <section class="form">
            <div class="form-title">
                <span>Buscar Ventas</span>
            </div>
            <form>
                <div class="input">
                    <label for="">ID Venta</label><input type="text" placeholder="ID Venta" name="" id="" />
                </div>
                <div class="input">
                    <label for="">Identificacion del Cliente</label><input type="text" placeholder="Documento Identidad" name="" id="" />
                </div>
                <div class="input">
                    <label for="">Nombre del Cliente</label><input type="text" placeholder="Nombre del Cliente" name="" id="" />
                </div>
                <div class="input">
                    <label for="">Nombre Vendedor</label><input type="text" placeholder="Nombre Vendedor" name="" id="" />
                </div>
            </form>
            <div class="form-button">
                <input type="button" value="Buscar Venta" />
            </div>
        </section>
    </>)
}



export default BuscarVenta;