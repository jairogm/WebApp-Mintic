import React, { Component } from 'react'
import '../css/EstadoVenta.css'
import axios from 'axios'


class ProductoTabla extends Component {
    render() {
        return (
            <>
                    <div className={this.props.row}>{this.props.product.title}</div>
                    <div className={this.props.row}>{this.props.product.amount}</div>
                    <div className={this.props.row}>{this.props.product.price}</div>
                    <div className={this.props.row}>{this.props.product.totalPrice}</div>
               
            </>)
    }
}



export default class EstadoVenta extends Component {

    async componentDidMount(){
        const res =  await axios.get("https://readme-store-api.herokuapp.com/api/products")

        const productsres = res.data.map(product =>{
            return {
                id : product._id,
                title: product.title,
                price: product.price,
                amount: product.sku,
                totalPrice: product.sku*product.price
            }
        })

        this.setState({products:productsres}) 
    }

    state = {
        statePurchase: 0,
        products: [],
        subtotal: 0,
        shipping: 0,
        total: 0,
        paypethod: "Tarjeta",
        name: "name",
        email: "email",
        phone: "phone",
        address: "address",
        id: "id",
        date: new Date(),
    }

    printProducts() {
        let row = "row-pair";
        return <>
        {this.state.products.map((product) => {
            row = row === "row-odd" ? "row-pair" : "row-odd"
            return <ProductoTabla key ={product.id} product = {product} row = {row}/>
        })}
        </>
    }


    render() {
        return (
            <div>
                <section className="section-1-container">
                    <div className="shop-data">
                        <p>Pedido #{this.state.id}</p>
                        <p>Fecha: {this.state.date.toString()}</p>
                    </div>
                    <div className="product-table">
                        <div className="row-head">Producto</div>
                        <div className="row-head">Cantidad</div>
                        <div className="row-head">Precio Unitario</div>
                        <div className="row-head">Precio Total</div>


                        {
                            this.printProducts()
                        }
                    </div>

                    <div className="purchase-data">
                        <p className="purchase-data-item">Subtotal:<>{this.state.subtotal}</>.</p>
                        <p className="purchase-data-item">Envío:<>{this.state.shipping}</>.</p>
                        <p className="purchase-data-item">Total:<>{this.state.total}</>.</p>
                        <div className="purchase-data-item">Metodo de pago:<p style={{"display":"inline","fontStyle": "italic"}}>{this.state.paypethod}</p>.</div>
                    </div>
                </section>

                <section className="shipping-data">
                    <p className="shipping-data-title">Datos de envío:</p>
                    <div className="shipping-data-item">Nombre:<p style={{"display":"inline","fontStyle": "italic","marginLeft":"1rem"}}>{this.state.name}</p></div>
                    <div className="shipping-data-item">Email:<p style={{"display":"inline","fontStyle": "italic","marginLeft":"1rem"}}>{this.state.email}</p></div>
                    <div className="shipping-data-item">Teléfono:<p style={{"display":"inline","fontStyle": "italic","marginLeft":"1rem"}}>{this.state.phone}</p></div>
                    <div className="shipping-data-item">Dirección:<p style={{"display":"inline","fontStyle": "italic","marginLeft":"1rem"}}>{this.state.address}</p></div>
                </section>
                <section className="purchase-state">
                    <div className="purchase-state-item-container">
                        <p className="purchase-state-item">Orden Recibida</p>
                        <p className="purchase-state-item">Pago Aprobado</p>
                        <p className="purchase-state-item">Orden Facturada</p>
                        <p className="purchase-state-item">Pedido Enviado</p>
                        <p className="purchase-state-item">Pedido Recibido</p>
                    </div>
                    <input className="state-range" type="range" min="0" max="5" value={this.state.statePurchase} onChange={this.printProducts}/>
                    <button className="btn-state">Estado de Venta</button>
                </section>
            </div>
        )
    }
}
