import React, { Component } from 'react'
import './css/Estado_Venta.css'

export default class EstadoVenta extends Component {
    render() {
        return (
            <div>
                <section className="section-1-container">
                    <div className="shop-data">
                        <p>Pedido #234123</p>
                        <p>Fecha: 20/11/2020</p>
                    </div>
                    <div className="product-table">
                        <div className="row-head">Producto</div>
                        <div className="row-head">Cantidad</div>
                        <div className="row-head">Precio Unitario</div>
                        <div className="row-head">Precio Total</div>

                       
                        <div className="row-odd">Producto</div>
                        <div className="row-odd">Cantidad</div>
                        <div className="row-odd">Precio Unitario</div>
                        <div className="row-odd">Precio Total</div>

                       
                        <div className="row-pair">Producto</div>
                        <div className="row-pair">Cantidad</div>
                        <div className="row-pair">Precio Unitario</div>
                        <div className="row-pair">Precio Total</div>

                        
                        <div className="row-odd">Producto</div>
                        <div className="row-odd">Cantidad</div>
                        <div className="row-odd">Precio Unitario</div>
                        <div className="row-odd">Precio Total</div>

                        
                        <div className="row-pair">Producto</div>
                        <div className="row-pair">Cantidad</div>
                        <div className="row-pair">Precio Unitario</div>
                        <div className="row-pair">Precio Total</div>
                    </div>

                    <div className="purchase-data">
                        <p className="purchase-data-item">Subtotal:        .</p>
                        <p className="purchase-data-item">Envío:           .</p>
                        <p className="purchase-data-item">Total:           .</p>
                        <p className="purchase-data-item">Metodo de pago:           .</p>
                    </div>
                </section>

                <section className="shipping-data">
                    <p className="shipping-data-title">Datos de envío:</p>
                    <p className="shipping-data-item">Nombre:</p>
                    <p className="shipping-data-item">Email:</p>
                    <p className="shipping-data-item">Teléfono:</p>
                    <p className="shipping-data-item">Dirección:</p>
                </section>
                <section className="purchase-state">
                    <div className="purchase-state-item-container">
                        <p className="purchase-state-item">Orden Recibida</p>
                        <p className="purchase-state-item">Pago Aprobado</p>
                        <p className="purchase-state-item">Orden Facturada</p>
                        <p className="purchase-state-item">Pedido Enviado</p>
                        <p className="purchase-state-item">Pedido Recibido</p>
                    </div>
                    <input className="state-range" type="range" min="0" max="5"/>
                    <button className ="btn-state">Estado de Venta</button>
                </section>
            </div>
        )
    }
}
