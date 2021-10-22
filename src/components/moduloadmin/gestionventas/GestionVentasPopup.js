import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';


const GestionVentasPopup = ({ isOpen, WasFound, close, data}) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

  
    return (
        <>
            <div className={`gest-usu-pop-modal-back ${(isOpen && !WasFound) && "gest-usu-pop-modal-open"}`} onClick={() =>close(false)}>
                <div className="gest-usu-pop-modal__dialog notFound" onClick={handleModalDialogClick}>
                    <div className="gest-usu-pop-titleCloseBtn">
                        <button onClick={() =>close(false)}>X</button>
                    </div>
                    <div className="gest-usu-pop-modal-content">
                        Venta No Encontrada
                    </div>
                </div>
            </div>
            <div className={`gest-usu-pop-modal-back ${(isOpen && WasFound) && "gest-usu-pop-modal-open"}`} onClick={() =>close(false)}>
                <div className="gest-usu-pop-modal__dialog" onClick={handleModalDialogClick}>
                    <div className="gest-usu-pop-update-box">
                        <div className="gest-usu-pop-update-label">
                            <label >Actualizar Ventas</label>
                            <div className="gest-usu-pop-titleCloseBtn">
                                <button onClick={() =>close(false)}>X</button>
                            </div>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">ID Venta:</p>
                            <label className="gest-usu-pop-update-data">{data._id}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">ID Cliente:</p>
                            <label className="gest-usu-pop-update-data">{data.clientid}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Nombre del Cliente:</p>
                            <label className="gest-usu-pop-update-data">{data.clientname}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Estado:</p>
                            <label className="gest-usu-pop-update-data">{data.status}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Fecha:</p>
                            <label className="gest-usu-pop-update-data">{data.date}</label>
                        </div>
                        <div className="gest-usu-pop-update-box-buttons">
                            <button className="gest-usu-pop-btn gest-usu-pop-btn-update" onClick={() =>close(true)}>Cambiar Datos</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GestionVentasPopup;