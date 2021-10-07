import React, { Component } from 'react'
import './css/Gestion_Usuarios.css'

export default class Gestion_Ususarios extends Component {
    render() {
        return (
            <div>
                <section class="section-1-container">
                    <div class="search-box">
                        <div class="search-row">
                            <p class="p-search">Buscar ID:</p>
                            <input type="text" class="search-input" placeholder="Buscar" />
                        </div>
                        <div class="search-row">
                            <p class="p-search">Nombre:</p>
                            <input type="text" class="search-input" placeholder="Nombre" />
                        </div>
                        <div class="search-row">
                            <p class="p-search">Usuario:</p>
                            <input type="text" class="search-input" placeholder="Usuario" />
                        </div>


                        <div class="search-box-buttons">
                            <button class="btn btn-search">Buscar</button>
                            <button class="btn btn-search">Actualizar</button>
                        </div>
                    </div>

                    <div class="user-table">
                        <div class="row-head">Id Usuario</div>
                        <div class="row-head">Nombre</div>
                        <div class="row-head">Usuario</div>
                        <div class="row-head">Rol</div>
                        <div class="row-head">Estado</div>

                        
                        <div class="row-odd">Id Usuario</div>
                        <div class="row-odd">Nombre</div>
                        <div class="row-odd">Usuario</div>
                        <div class="row-odd">Rol</div>
                        <div class="row-odd">Estado</div>

                        
                        <div class="row-pair">Id Usuario</div>
                        <div class="row-pair">Nombre</div>
                        <div class="row-pair">Usuario</div>
                        <div class="row-pair">Rol</div>
                        <div class="row-pair">Estado</div>

                        
                        <div class="row-odd">Id Usuario</div>
                        <div class="row-odd">Nombre</div>
                        <div class="row-odd">Usuario</div>
                        <div class="row-odd">Rol</div>
                        <div class="row-odd">Estado</div>

                        
                        <div class="row-pair">Id Usuario</div>
                        <div class="row-pair">Nombre</div>
                        <div class="row-pair">Usuario</div>
                        <div class="row-pair">Rol</div>
                        <div class="row-pair">Estado</div>
                    </div>


                </section>
            </div>
        )
    }
}
