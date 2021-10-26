import React, { useState, useEffect, Component } from "react";
import "../../css/Registrar_Venta.css";
import axios from "axios";

class ProductoTabla extends Component {
  state = {
    cantidad: 0,
    isChecked: false,
  };

  onChange = (e) => {
    if (e.target.value <= this.props.product.stock) {
      this.setState({ cantidad: e.target.value });
      this.updateDetail(this.state.isChecked, e.target.value);
    }
  };

  checked = (e) => {
    this.setState({ isChecked: e.target.checked });
    this.updateDetail(e.target.checked, this.state.cantidad);
  };

  updateDetail = (isChecked, cantidad) => {
    let subT = this.props.subTotal;
    //Elimino el producto
    const products = this.props.detail.filter((product) => {
      if (this.props.product._id !== product._id) {
        return product;
      } else {
        subT -= product.price * product.stock;
      }
    });
    //Si esta checked lo agrego
    if (isChecked && cantidad !== 0 && !isNaN(parseInt(cantidad))) {
      let product = JSON.parse(JSON.stringify(this.props.product));
      product.stock = parseInt(cantidad);
      this.props.setDetail([...products, product]);
      subT += product.price * cantidad;
    } else {
      this.props.setDetail([...products]);
    }
    this.props.setSubTotal(subT);
  };

  render() {
    return (
      <>
        <div className={this.props.row}>{this.props.product.title}</div>
        <div className={this.props.row}>{this.props.product.author}</div>
        <div className={this.props.row}>{this.props.product.stock}</div>
        <div className={this.props.row}>{this.props.product.year}</div>
        <div className={this.props.row}>{this.props.product.price}</div>
        <input
          className="select"
          type="number"
          min="1"
          max={this.props.product.stock}
          onChange={this.onChange}
          value={this.state.cantidad}
        ></input>
        <div className={this.props.row + " checkbox-sale-container"}>
          <input
            className="checkbox-sale"
            type="checkbox"
            onChange={this.checked}
          ></input>
        </div>
      </>
    );
  }
}

export default function RegistrarVenta({ setStates }) {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState({ name: "" });
  const [clientId, setClientId] = useState();
  const [clientName, setClientName] = useState();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    getSeller();
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(
      "https://readme-store-api.herokuapp.com/api/products"
    );
    setProducts(res.data);
  };

  const getSeller = async () => {
    const res = await axios.get(
      "https://readme-store-api.herokuapp.com/api/users?id=" +
        localStorage.getItem("userid")
    );
    setSelectedSeller(res.data[0]);
  };

  const printProducts = () => {
    if (products) {
      let row = "row-pair";
      return (
        <>
          {products.map((product) => {
            row = row === "row-odd" ? "row-pair" : "row-odd";
            return (
              <ProductoTabla
                key={product._id}
                row={row}
                product={product}
                detail={detail}
                setDetail={setDetail}
                setSubTotal={setSubTotal}
                setSubTotal={setSubTotal}
                subTotal={subTotal}
              />
            );
          })}
        </>
      );
    }
  };

  const printSaveButton = () => {
    if (clientId && clientName && detail.length !== 0) {
      return (
        <button className="btn-save" onClick={save}>
          Guardar
        </button>
      );
    } else {
      return (
        <button className="btn-save" disabled>
          Guardar
        </button>
      );
    }
  };

  const save = () => {
    //Actualizo el stock de los objetos comprados
    for (let product of detail) {
      const productOnInv = products.filter(
        (producto) => producto._id === product._id
      )[0];
      if (product.stock >= productOnInv.stock) {
        axios.delete(
          "https://readme-store-api.herokuapp.com/api/products/" +
            productOnInv._id
        );
      } else {
        const newStock = productOnInv.stock - product.stock;
        axios.patch(
          "https://readme-store-api.herokuapp.com/api/products/" +
            productOnInv._id,
          { stock: newStock }
        );
      }
    }

    //agrego la nueva venta
    const NewProduct = {
      sellerid: selectedSeller._id,
      sellername: selectedSeller.name,
      site: "Colombia",
      date: new Date().toString(),
      status: "Orden Recibida",
      clientid: clientId,
      clientname: clientName,
      detail: detail,
    };
    axios
      .post("https://readme-store-api.herokuapp.com/api/sales", NewProduct)
      .then(() => {
        setStates(false, false, false);
      });
  };

  return (
    <div>
      <section className="section-1-container">
        <div className="product-table">
          <div className="row-head">Titulo</div>
          <div className="row-head">Autor</div>
          <div className="row-head">Stock</div>
          <div className="row-head">Año</div>
          <div className="row-head">Precio</div>
          <div className="row-head">Cantidad</div>
          <div className="row-head"></div>

          {printProducts()}
        </div>

        <div className="purchase-data">
          <p className="purchase-data-item">{"Subtotal: " + subTotal}</p>
          <p className="purchase-data-item">{"Envío: " + 2000}</p>
          <p className="purchase-data-item">{"Total: " + (subTotal + 2000)}</p>
          <div className="purchase-data-item">
            Metodo de pago:.
            <select className="select">
              <option defaultValue>Tarjeta de Credito</option>
              <option>Tarjeta de Debito</option>
              <option>Pago Contraentrega</option>
              <option>Paypal</option>
            </select>
          </div>
          <div className="purchase-data-item">
            Vendedor:
            <label>{"   " + selectedSeller.name}</label>
          </div>
        </div>
      </section>

      <section className="shipping-data">
        <p className="shipping-data-title">Datos de envío</p>
        <div className="shipping-data-item">
          Nombre:
          <input
            type="text"
            className="shipping-data-input"
            onChange={(e) => setClientName(e.target.value)}
          ></input>
        </div>
        <div className="shipping-data-item">
          Email:
          <input type="text" className="shipping-data-input"></input>
        </div>
        <div className="shipping-data-item">
          Teléfono:
          <input type="text" className="shipping-data-input"></input>
        </div>
        <div className="shipping-data-item">
          Dirección:
          <input type="text" className="shipping-data-input"></input>
        </div>
        <div className="shipping-data-item">
          DNI:
          <input
            type="text"
            className="shipping-data-input"
            onChange={(e) => setClientId(e.target.value)}
          ></input>
        </div>
      </section>

      <section className="btn-save-container">{printSaveButton()}</section>
    </div>
  );
}
