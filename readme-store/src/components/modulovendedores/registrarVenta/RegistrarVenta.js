import React, { Component } from 'react'
import '../../css/Registrar_Venta.css';

export default class RegistrarVenta extends Component {
    render() {
        return (
            <div>
                <section className="section-1-container">
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
                        <div className="purchase-data-item">Metodo de pago:.
                            <select className="select">
                                <option selected >Tarjeta de Credito</option>
                                <option>Tarjeta de Debito</option>
                                <option>Pago Contraentrega</option>
                                <option>Paypal</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section className="shipping-data">
                    <p className="shipping-data-title">Datos de envío</p>
                    <div className="shipping-data-item">Nombre:
                        <input type="text" className="shipping-data-input"></input>
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
                </section>

                <section className="btn-save-container">
                    <button className="btn-save">Guardar</button>
                </section>

            </div>
        )
    }
}
