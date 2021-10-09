import React, { useState } from "react";
import "./inventarios.css";

function Inventario() {
  const [toggle, setToggle] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <div class="header-container">
          <div class="logo">
            <img src="img/Logo2.png" alt="Logo de Readme" />
          </div>
          <button class="btn">
            <svg
              class="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-bar-left"
              viewBox="0 0 16 16"
            >
              <path
                class="btn-icon-path"
                fill-rule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <p class="btn-text">Regresar</p>
          </button>
        </div>
      </header>
      {toggle ? (
        <div id="myModal" class="modal">
          <div class="modal-content">
            <div onClick={() => setToggle(false)} class="close-container">
              <span class="close">&times;</span>
            </div>
            <div class="container-input-inventario">
              <form action="" class="container-form-gestion">
                <div class="gestion-input-container">
                  <label class="gestion-label-text"> Código: </label>
                  <input
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
            <form action="" class="container-form-gestion">
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Código: </label>
                <input class="gestion-style" type="text" placeholder="Código" />
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
                <input class="gestion-style" type="text" placeholder="Autor" />
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
                <button class="gestion-button-form">Agregar producto</button>
              </div>
            </form>
          </div>
          <div class="container-input-inventario2">
            <form action="" onSubmit={onSubmit} class="container-form-gestion2">
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Buscar ID: </label>
                <input
                  class="gestion-style"
                  type="text"
                  placeholder="Dígite ID"
                />
              </div>
              <div class="gestion-input-container">
                <label class="gestion-label-text"> Buscar por título: </label>
                <input
                  class="gestion-style"
                  type="text"
                  placeholder="Dígite título del libro"
                />
              </div>
              <div class="gestion-button">
                <button class="gestion-button-form">Buscar</button>
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
              <div class="gestion-button">
                <button class="gestion-button-form">Eliminar</button>
              </div>
            </form>
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
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
            <tr>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
              <td>xxxxxx</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Inventario;
