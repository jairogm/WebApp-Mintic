import React, { useState, useEffect, Component } from 'react'
import '../../css/Registrar_Venta.css';
import axios from 'axios';



class ProductoTabla extends Component {

    state = {
        cantidad: 0,
        isChecked: false
    }


    onChange = (e) => {
        if (e.target.value <= this.props.product.stock) {
            this.setState({ cantidad: e.target.value });
            this.updateDetail(this.state.isChecked, e.target.value)
        }
    }

    checked = (e) => {
        this.setState({ isChecked: e.target.checked });
        this.updateDetail(e.target.checked, this.state.cantidad)
    }

    updateDetail = (isChecked, cantidad) => {
        //Elimino el producto
        const products = this.props.detail.filter(product => {
            if (this.props.product._id !== product._id) {
                return product
            }
        })
        //Si esta checked lo agrego
        if (isChecked && this.state.cantidad !== 0 && !isNaN(parseInt(cantidad))) {
            let product = JSON.parse(JSON.stringify(this.props.product))
            product.stock = parseInt(cantidad)
            this.props.setDetail([...products, product])
            console.log([...products, product])
        } else {
            this.props.setDetail([...products])
            console.log([...products])
        }

    }

    render() {
        return (
            <>
                <div className={this.props.row}>{this.props.product.title}</div>
                <div className={this.props.row}>{this.props.product.author}</div>
                <div className={this.props.row}>{this.props.product.stock}</div>
                <div className={this.props.row}>{this.props.product.year}</div>
                <div className={this.props.row}>{this.props.product.editorial}</div>
                <input className="select" type="number" min="1" max={this.props.product.stock} onChange={this.onChange} value={this.state.cantidad}></input>
                <input className={this.props.row} type="checkbox" onChange={this.checked}></input>
            </>)
    }
}

export default function RegistrarVenta({ isAdmin }) {
    const [sellers, setSellers] = useState([])
    const [products, setProducts] = useState([])
    const [detail, setDetail] = useState([])
    const [selectedSeller, setSelectedSeller] = useState()
    const [clientId, setClientId] = useState()
    const [clientName, setClientName] = useState()


    useEffect(() => {
        getSellers();
        getProducts();
    }, []);

    const getProducts = async () => {
        const res = await axios.get("https://readme-store-api.herokuapp.com/api/products")
        setProducts(res.data);
    }

    const getSellers = async () => {
        if (isAdmin) {
            const res = await axios.get("https://readme-store-api.herokuapp.com/api/users/sellers")
            setSellers(res.data)
            setSelectedSeller(res.data[0])
        }

    }

    const printProducts = () => {
        if (products) {
            let row = "row-pair";
            return <>
                {
                    products.map(product => {
                        row = row === "row-odd" ? "row-pair" : "row-odd";
                        return <ProductoTabla key={product._id} row={row} product={product} detail={detail} setDetail={setDetail} />
                    })
                }
            </>
        }

    }

    const setSeller = (e) => {
        const seller = sellers.filter(seller => {
            if (seller.name === e.target.value) {
                return seller
            }
        })
        setSelectedSeller(seller[0])
        
        console.log(seller[0])
    }

    const printSellers = () => {
        if (isAdmin && sellers) {
            return <div className="purchase-data-item">Vendedor:
                <select className="select" onChange={e => setSeller(e)}>
                    {
                        sellers.map((seller) => {
                            return (<option key={seller._id}>{seller.name}</option>)
                        })
                    }
                </select>
            </div>
        }
    }

    const printSaveButton = () => {
        if (clientId && clientName && detail.length !== 0) {
            return <button className="btn-save" onClick={save}>Guardar</button>
        } else {
            return <button className="btn-save" disabled>Guardar</button>
        }
    }

    const save = async () => {
        for (let product of detail) {
            const productOnInv = products.filter(producto => producto._id === product._id)[0]
            if (product.stock >= productOnInv.stock) {
                const res = await axios.delete("https://readme-store-api.herokuapp.com/api/products/" + productOnInv._id)
            } else {
                console.log(productOnInv._id)
                const newStock = productOnInv.stock - product.stock;
                const res = await axios.patch("https://readme-store-api.herokuapp.com/api/products/" + productOnInv._id, { stock: newStock })
            }
        }
        const NewProduct = {
            sellerid: selectedSeller._id,
            sellername: selectedSeller.name,
            site: "Colombia",
            date: new Date().toString(),
            status: "Orden Recibida",
            clientid: clientId,
            clientname: clientName,
            detail: detail
        }
        const res = await axios.post("http://localhost:3001/api/sales", NewProduct)
    }

    return (
        <div>

            <section className="section-1-container">
                <div className="product-table">
                    <div className="row-head">Titulo</div>
                    <div className="row-head">Autor</div>
                    <div className="row-head">Stock</div>
                    <div className="row-head">Año</div>
                    <div className="row-head">Editorial</div>
                    <div className="row-head">Cantidad</div>
                    <div className="row-head"></div>

                    {
                        printProducts()
                    }
                </div>

                <div className="purchase-data">
                    <p className="purchase-data-item">Subtotal:        .</p>
                    <p className="purchase-data-item">Envío:           .</p>
                    <p className="purchase-data-item">Total:           .</p>
                    <div className="purchase-data-item">Metodo de pago:.
                        <select className="select">
                            <option defaultValue >Tarjeta de Credito</option>
                            <option>Tarjeta de Debito</option>
                            <option>Pago Contraentrega</option>
                            <option>Paypal</option>
                        </select>
                    </div>
                    {
                        printSellers()
                    }
                </div>
            </section>

            <section className="shipping-data">
                <p className="shipping-data-title">Datos de envío</p>
                <div className="shipping-data-item">Nombre:
                    <input type="text" className="shipping-data-input" onChange={(e) => setClientName(e.target.value)}></input>
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
                    <input type="text" className="shipping-data-input" onChange={(e) => setClientId(e.target.value)}></input>
                </div>
            </section>

            <section className="btn-save-container">
                {
                    printSaveButton()
                }
            </section>

        </div>
    )
}

