import React from "react";
import "./modal-vendedores.css";

function VendedoresModal({ id, nombre, celular, email, fecha, puntoVenta }) {
  return (
    <div class="gestion-container-modal">
      <div class="gestion-container-form">
        <div class="logo-container-gvendedores">
          <img
            class="avatar avatar-img"
            src=" img/ReadMeLogo.png "
            alt="Logo de Readme "
          />
        </div>
        <div class="container-form-gestion">
          <div class="gestion-input-container">
            <label class="gestion-label-text"> ID vendedor: </label>
            <div class="text-modal-gestion">{id}</div>
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Nombre: </label>
            <div class="text-modal-gestion">{nombre}</div>
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Número de celular: </label>
            <div class="text-modal-gestion">{celular}</div>
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text">Correo electrònico: </label>
            <div class="text-modal-gestion">{email}</div>
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Fecha de ingreso: </label>
            <div class="text-modal-gestion">{fecha}</div>
          </div>
          <div class="gestion-input-container">
            <label class="gestion-label-text"> Punto de venta: </label>
            <div class="text-modal-gestion">{puntoVenta}</div>
          </div>
          <div class="gestion-button">
            <button class="gestion-button-form">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendedoresModal;
