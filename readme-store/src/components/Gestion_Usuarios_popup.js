import React, { Component } from 'react'
import './css/Gestion_Usuarios_popup.css'


export default class Gestion_Usuarios_popup extends Component {
    render() {
        return (
            <div class="update-box">
                <label class="update-label">Actualizar Usuarios</label>
                <div class="update-row">
                    <p class="p-update">ID Usuario:</p>
                    <label class="update-data">127821736</label>
                </div>
                <div class="update-row">
                    <p class="p-update">Nombre:</p>
                    <label class="update-data">Kevin</label>
                </div>
                <div class="update-row">
                    <p class="p-update">Usuario:</p>
                    <label class="update-data">KevinDeBruyne17</label>
                </div>
                <div class="update-row">
                    <p class="p-update">Rol:</p>
                    <select class="update-data select" >
                        <option selected >Administrador</option>
                        <option>Vendedor</option>
                    </select>
                </div>
                <div class="update-row">
                    <p class="p-update">Estado:</p>
                    <select class="update-data select" >
                        <option selected >Activo</option>
                        <option>Inactivo</option>
                    </select>
                </div>
                <div class="update-box-buttons">
                    <button class="btn btn-update">Guardar Cambios</button>
                </div>
                <label class="update-label"></label>
            </div>
        )
    }
}
