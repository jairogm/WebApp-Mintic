import React, { Component } from 'react'
import './css/Gestion_Usuarios_popup.css'


const GestionUsuariosPopup = ({ closeModal, isOpen, WasFound }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className={`modal-back ${(isOpen && !WasFound) && "modal-open"}`} onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <div className="titleCloseBtn">
                        <button onClick={closeModal}>X</button>
                    </div>
                    <div className="modal-content">
                        Usuario No Encontrado
                    </div>
                </div>
            </div>
            <div className={`modal-back ${(isOpen && WasFound) && "modal-open"}`} onClick={closeModal}>
                <div className="gest-usu-modal__dialog" onClick={handleModalDialogClick}>
                    <div className="update-box">
                        <div className="update-label">
                            <label >Actualizar Usuarios</label>
                            <div className="titleCloseBtn">
                                <button onClick={closeModal}>X</button>
                            </div>
                        </div>
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
                </div>
            </div>
        </>
    );
};

export default GestionUsuariosPopup;