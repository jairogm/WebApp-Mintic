import React, { Component, useState, useEffect } from 'react'
import '../css/EstadoVenta.css'
import axios from 'axios'


class ProductoTabla extends Component {
    render() {
        return (
            <>
                <div className={this.props.row}>{this.props.product.title}</div>
                <div className={this.props.row}>{this.props.product.author}</div>
                <div className={this.props.row}>{this.props.product.stock}</div>
                <div className={this.props.row}>{this.props.product.year}</div>
                <div className={this.props.row}>{this.props.product.price}</div>
            </>)
    }
}




export default function EstadoVenta({ ventaEstado, setStates}) {

    const [products, setProducts] = useState([])
    const [subTotal, setSubTotal] = useState([])
    const [clientId, setClientId] = useState("")
    const [clientName, setClientName] = useState("")
    const [saleStatus, setSaleStatus] = useState("")


    const getData = () => {
        setProducts(ventaEstado.detail)
        let subT = 0;
        for(let product of ventaEstado.detail){
            subT += (product.price * product.stock)
        }
        setSubTotal(subT)
        setClientId(ventaEstado.clientid)
        setClientName(ventaEstado.clientname)
        setSaleStatus(ventaEstado.status)
    }

    const getStatusNumber = (status) =>{
        if(status === "Orden Recibida"){
            return 1
        }else if(status === "Pago Aprobado"){
            return 2
        }else if(status === "Orden Facturada"){
            return 3
        }else if(status === "Pedido Enviado"){
            return 4
        }else if(status === "Pedido Recibido"){
            return 5
        }else{
            return 0
        }
    }

    const setStatusByNumber = (number) =>{
        number=parseInt(number)
        if(number === 1){
            setSaleStatus("Orden Recibida")
        }else if(number === 2){
            setSaleStatus("Pago Aprobado")
        }else if(number === 3){
            setSaleStatus("Orden Facturada")
        }else if(number === 4){
            setSaleStatus("Pedido Enviado") 
        }else if(number === 5){
            setSaleStatus("Pedido Recibido")
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const printProducts = () => {
        let row = "row-pair";
        return <>
            {products.map((product) => {
                row = row === "row-odd" ? "row-pair" : "row-odd"
                return <ProductoTabla key={product._id} product={product} row={row} />
            })
            }
        </>
    }

    const save = () => {
        const saleChanged = {
            clientname:clientName,
            clientid:clientId,
            status:saleStatus
        }
        
        axios.patch("https://readme-store-api.herokuapp.com/api/sales/"+ventaEstado._id, saleChanged)
        .then(setStates(false,false,false,false,false));
    }

    return (
        <div>
            <section className="vent-section-1-container">
                <div className="vent-shop-data">
                    <p>Pedido #{ventaEstado._id}</p>
                    <p>Fecha: {ventaEstado.date}</p>
                </div>
                <div className="vent-product-table">
                    <div className="vent-row-head">Titulo</div>
                    <div className="vent-row-head">Autor</div>
                    <div className="vent-row-head">Cantidad</div>
                    <div className="vent-row-head">Año</div>
                    <div className="vent-row-head">Precio</div>
                    {
                        printProducts()
                    }
                </div>

                <div className="vent-purchase-data">
                    <p className="vent-purchase-data-item">Subtotal:<>{subTotal}</>.</p>
                    <p className="vent-purchase-data-item">Envío:<>{2000}</>.</p>
                    <p className="vent-purchase-data-item">Total:<>{subTotal+2000}</>.</p>
                    <div className="vent-purchase-data-item">Metodo de pago:.</div>
                </div>
            </section>

            <section className="shipping-data">
                <p className="shipping-data-title">Datos de envío</p>
                <div className="shipping-data-item">Nombre:
                    <input type="text" className="shipping-data-input" value={clientName} onChange={(event) =>setClientName(event.target.value)}></input>
                </div>
                <div className="shipping-data-item">Email:
                    <input type="text" className="shipping-data-input"></input>
                </div>
                <div className="shipping-data-item">Teléfono:
                    <input type="text" className="shipping-data-input"></input>
                </div>
                <div className="shipping-data-item">Dirección:
                    <input type="text" className="shipping-data-input"></input>
                </div>
                <div className="shipping-data-item">DNI:
                    <input type="text" className="shipping-data-input" value={clientId} onChange={(event) =>setClientId(event.target.value)}></input>
                </div>
            </section>
            <section className="vent-purchase-state">
                <div className="vent-purchase-state-item-container">
                    <p className="vent-purchase-state-item">Orden Recibida:</p>
                    <p className="vent-purchase-state-item">Pago Aprobado:</p>
                    <p className="vent-purchase-state-item">Orden Facturada:</p>
                    <p className="vent-purchase-state-item">Pedido Enviado:</p>
                    <p className="vent-purchase-state-item">Pedido Recibido:</p>
                </div>
                <input className="vent-state-range" type="range" min="0" max="5" value={getStatusNumber(saleStatus)} onChange={(e)=>{setStatusByNumber(e.target.value)}}/>
                <button className="vent-btn-state" onClick={save}>Guardar Cambios</button>
            </section>
        </div>
    )
}


