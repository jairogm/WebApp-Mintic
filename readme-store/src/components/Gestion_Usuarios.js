import React, { Component } from 'react'
import './css/Gestion_Usuarios.css'

export default class GestionUsusarios extends Component {
    render() {
        return (
            <div>
                <section class="section-1-container">
                    <div className="search-box">
                        <div className="search-row">
                            <p class="p-search">Buscar ID:</p>
                            <input type="text" className="search-input" placeholder="Buscar por ID" />
                        </div>
                        <div className="search-row">
                            <p class="p-search">Nombre:</p>
                            <input type="text" className="search-input" placeholder="Ingrese el Nombre" />
                        </div>
                        <div className="search-row">
                            <p class="p-search">Usuario:</p>
                            <input type="text" className="search-input" placeholder="Ingrese el Usuario " />
                            
                        </div>


                        <div className="search-box-buttons">
                            <br/>
                            <button className="btn-search">Buscar</button>
                            <br/>
                            <button className="btn-search">Actualizar</button>
                        </div>
                    </div>

                    <div className="user-table">
                        <div className="row-head">Id Usuario</div>
                        <div className="row-head">Nombre</div>
                        <div className="row-head">Usuario</div>
                        <div className="row-head">Rol</div>
                        <div className="row-head">Estado</div>

                        
                        <div className="row-odd">Id Usuario</div>
                        <div className="row-odd">Nombre</div>
                        <div className="row-odd">Usuario</div>
                        <div className="row-odd">Rol</div>
                        <div className="row-odd">Estado</div>

                        
                        <div className="row-pair">Id Usuario</div>
                        <div className="row-pair">Nombre</div>
                        <div className="row-pair">Usuario</div>
                        <div className="row-pair">Rol</div>
                        <div className="row-pair">Estado</div>

                        
                        <div className="row-odd">Id Usuario</div>
                        <div className="row-odd">Nombre</div>
                        <div className="row-odd">Usuario</div>
                        <div className="row-odd">Rol</div>
                        <div className="row-odd">Estado</div>

                        
                        <div className="row-pair">Id Usuario</div>
                        <div className="row-pair">Nombre</div>
                        <div className="row-pair">Usuario</div>
                        <div className="row-pair">Rol</div>
                        <div className="row-pair">Estado</div>
                    </div>
                    <div class="footer-container">
                         <a href="#">Política de Privacidad</a> |
                            <a href="#">Términos & condiciones</a> | &copy Copyright 2021- ReadMe
                            Librería - Todos los derechos revervados.
                             </div>




                </section>
            </div>
        )
    }
}
