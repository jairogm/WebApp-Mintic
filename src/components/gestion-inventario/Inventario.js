import React, { useState, useEffect } from "react";
import "./inventarios.css";
import axios from "axios";

function Inventario() {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({});
  const [productSearch, setProductSearch] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://readme-store-api.herokuapp.com/api/products",
        newProduct
      );
      const newProducts = await axios.get(
        "https://readme-store-api.herokuapp.com/api/products"
      );
      setProducts(newProducts.data);
      console.log(response.data);
    } catch (error) {}
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `https://readme-store-api.herokuapp.com/api/products/${id}`
      );
      const newProducts = await axios.get(
        "https://readme-store-api.herokuapp.com/api/products"
      );
      setProducts(newProducts.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const search = async () => {
    try {
      const responseTitle = await axios.get(
        `https://readme-store-api.herokuapp.com/api/products/?title=${productSearch}`
      );
      /*       const responseId = await axios.get(
        `https://readme-store-api.herokuapp.com/api/products/?id=${productSearch}`
      ); */
      const responseSku = await axios.get(
        `https://readme-store-api.herokuapp.com/api/products/?sku=${productSearch}`
      );
      const responseAuthor = await axios.get(
        `https://readme-store-api.herokuapp.com/api/products/?author=${productSearch}`
      );
      if (
        responseTitle.data.length !== 0 &&
        responseSku.data.length !== 0 &&
        responseAuthor.data.length !== 0
      ) {
        const response = await axios.get(
          "https://readme-store-api.herokuapp.com/api/products"
        );
        console.log(response.data);
        setProducts(response.data);
      } else {
        console.log(responseSku.data);
        setProducts([
          ...responseTitle.data,
          ...responseSku.data,
          ...responseAuthor.data,
        ]);
      }
    } catch (error) {}
  };

  const handleChange = (event) => {
    if (event.target.name === "search") {
      setProductSearch(event.target.value);
    } else {
      console.log(event.target.value);
      setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
      console.log(newProduct);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://readme-store-api.herokuapp.com/api/products"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  return (
    <>
      {toggle ? (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <div onClick={() => setToggle(false)} class="close-container">
              <span class="close">&times;</span>
            </div>
            <div class="container-input-inventario">
              <form action="" class="container-form-gestion">
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Sku: </label>
                  <input
                    name="sku"
                    class="gestion-style"
                    type="text"
                    placeholder="Código"
                  />
                </div>
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Título del libro: </label>
                  <input
                    class="gestion-style"
                    type="text"
                    placeholder="Título del libro"
                  />
                </div>

                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Autor: </label>
                  <input
                    class="gestion-style"
                    type="text"
                    placeholder="Autor"
                  />
                </div>
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Año: </label>
                  <input
                    class="gestion-style"
                    type="number"
                    placeholder="Dígite año"
                  />
                </div>
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Editorial </label>
                  <input
                    class="gestion-style"
                    type="text"
                    placeholder="Editorial"
                  />
                </div>
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Precio </label>
                  <input
                    class="gestion-style"
                    type="number"
                    placeholder="Dígite precio"
                  />
                </div>
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Cantidad </label>
                  <input
                    class="gestion-style"
                    type="number"
                    placeholder="Dígite cantidad de libros"
                  />
                </div>
                <div class="gestion-button">
                  <button class="gestion-button-form">
                    Modificar Producto producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div class="contenedor-inventario-body">
        <div class="container-inventario">
          <div class="container-input-inventario">
            <form action="" onSubmit={onSubmit} class="container-form-gestion">
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Sku: </label>
                <input
                  class="gestion-style"
                  name="sku"
                  onChange={handleChange}
                  type="text"
                  placeholder="Código"
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Título del libro: </label>
                <input
                  name="title"
                  class="gestion-style"
                  type="text"
                  onChange={handleChange}
                  placeholder="Título del libro"
                />
              </div>

              <div class="gestion-input-container">
                <label class="gestion-label-text"> Autor: </label>
                <input
                  name="author"
                  onChange={handleChange}
                  class="gestion-style"
                  type="text"
                  placeholder="Autor"
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Año: </label>
                <input
                  name="year"
                  class="gestion-style"
                  type="number"
                  placeholder="Dígite año"
                  onChange={handleChange}
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Editorial </label>
                <input
                  name="editorial"
                  onChange={handleChange}
                  class="gestion-style"
                  type="text"
                  placeholder="Editorial"
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Precio </label>
                <input
                  name="price"
                  onChange={handleChange}
                  class="gestion-style"
                  type="number"
                  placeholder="Dígite precio"
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Cantidad </label>
                <input
                  name="stock"
                  onChange={handleChange}
                  class="gestion-style"
                  type="number"
                  placeholder="Dígite cantidad de libros"
                />
              </div>
              <div class="gestion-button">
                <button class="gestion-button-form">Agregar producto</button>
              </div>
            </form>
          </div>
          <div class="container-input-inventario2">
            <div action="" class="container-form-gestion2">
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Buscar: </label>
                <input
                  name="search"
                  onChange={handleChange}
                  class="gestion-style"
                  type="text"
                  placeholder="Digite ID,titulo o sku"
                />
              </div>
              <div class="gestion-button">
                <button onClick={search} class="gestion-button-form">
                  Buscar
                </button>
              </div>
              <div class="gestion-button">
                <button
                  onClick={() => setToggle(true)}
                  id="myBtn"
                  class="gestion-button-form"
                >
                  Modificar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="table-inventario">
          <table>
            <tr>
              <th>ID libro</th>
              <th>Autor</th>
              <th>Título</th>
              <th>Año</th>
              <th>Editorial</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
            {products.map((product) => (
              <tr>
                <td>{product.sku}</td>
                <td>{product.author}</td>
                <td>{product.title}</td>
                <td>{product.year}</td>
                <td>{product.editorial}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <a onClick={() => deleteProduct(product._id)}>Eliminar</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Inventario;
