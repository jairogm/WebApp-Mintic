import React, { Component } from 'react'
import './css/Gestion_Usuarios_popup.css'


export default class Gestion_Usuarios_popup extends Component {
    render() {
        return (
            <div className="update-box">
                <label className="update-label">Actualizar Usuarios</label>
                <div className="update-row">
                    <p className="p-update">ID Usuario:</p>
                    <label className="update-data">127821736</label>
                </div>
                <div className="update-row">
                    <p className="p-update">Nombre:</p>
                    <label className="update-data">Kevin</label>
                </div>
                <div className="update-row">
                    <p className="p-update">Usuario:</p>
                    <label className="update-data">KevinDeBruyne17</label>
                </div>
                <div className="update-row">
                    <p className="p-update">Rol:</p>
                    <select className="update-data select" >
                        <option selected >Administrador</option>
                        <option>Vendedor</option>
                    </select>
                </div>
                <div className="update-row">
                    <p className="p-update">Estado:</p>
                    <select className="update-data select" >
                        <option selected >Activo</option>
                        <option>Inactivo</option>
                    </select>
                </div>
                <div className="update-box-buttons">
                    <button className="btn btn-update">Guardar Cambios</button>
                </div>
                <label className="update-label"></label>
            </div>
        )
    }
}
