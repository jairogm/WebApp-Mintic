import React from "react";
import "./gestion-vendedores.css";

function GestionVendedores() {
  return (
    <div class="gestion-container">
      <div class="gestion-container-form">
        <div class="logo-container-gvendedores">
          <img
            class="avatar avatar-img"
            src=" img/ReadMeLogo.png "
            alt="Logo de Readme "
          />
        </div>

        <form class="container-form-gestion">
          <div class="gestion-input-container">
            <label class="gestion-label-text"> ID vendedor: </label>
            <input
              class="gestion-style"
              type="text"
              placeholder="ID vendedor"
            />
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Nombre: </label>
            <input class="gestion-style" type="text" placeholder="Nombre" />
          </div>

          <div class="gestion-input-container">
            <label class="gestion-label-text"> Número de celular: </label>
            <input
              class="gestion-style"
              type="number"
              placeholder="Número de celular"
            />
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Fecha de ingreso: </label>
            <input
              class="gestion-style"
              type="date"
              placeholder="Fecha de ingreso"
            />
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Punto de venta: </label>
            <select name="" class="gestion-style">
              <option selected class="option-gestionvendedores">
                Punto de venta
              </option>
              <option class="option-gestionvendedores">Tienda 1</option>
              <option class="option-gestionvendedores">Tienda 2</option>
              <option class="option-gestionvendedores">Tienda 3</option>
            </select>
          </div>
          <div class="gestion-button">
            <button class="gestion-button-form">Actualizar</button>
            <button class="gestion-button-form">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GestionVendedores;
