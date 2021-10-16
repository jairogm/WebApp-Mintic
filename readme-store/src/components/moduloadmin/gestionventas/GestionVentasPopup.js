import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';


const GestionVentasPopup = ({ isOpen, WasFound, close, data, isModidy }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    const [saleRol, setsaleRol] = useState("")
    const [saleStatus, setsaleStatus] = useState("")
    const [selectedRol, setSelectedRol] = useState()
    const [selectedStatus, setSelectedStatus] = useState("")

    useEffect(() => {
        setsaleRol(data.rol)
        setsaleStatus(data.status)
        setSelectedRol(data.rol)
        setSelectedStatus(data.status)
    }, [isOpen])


    const closeSave = async () => {
        let filter ={}
        filter.rol = selectedRol
        filter.status = selectedStatus
        console.log(filter)

        if (selectedRol !== saleRol || selectedStatus !== saleStatus) {
           const res =  await axios.patch("https://readme-store-api.herokuapp.com/api/sales/" + data._id, filter)
            console.log(res)
        }
        close();
    }

    const printRols = () => {
        if (isModidy) {
            return <select className="gest-usu-pop-update-data gest-usu-pop-select" onChange={e => setSelectedRol(e.target.value)}>
                <option defaultValue>{saleRol}</option>
                {
                    ["Seller", "Admin"].map(rol => {
                        if (rol !== saleRol) {
                            return <option key={rol}>{rol}</option>
                        }
                    })
                }
            </select>
        } else {
            return <label className="gest-usu-pop-update-data" style={{ display: 'inline' }}>{saleRol}</label>
        }
    }

    const printStatus = () => {
        if (isModidy) {
            return <select className="gest-usu-pop-update-data gest-usu-pop-select" onChange={e=>setSelectedStatus(e.target.value)}>
                <option defaultValue >{saleStatus}</option>
                {
                    ["enabled", "disabled"].map(status => {
                        if (status !== saleStatus) {
                            return <option key={status}>{status}</option>
                        }
                    })
                }
            </select>
        } else {
            return <label className="gest-usu-pop-update-data" style={{ display: 'inline' }}>{saleStatus}</label>
        }
    }

    return (
        <>
            <div className={`gest-usu-pop-modal-back ${(isOpen && !WasFound) && "gest-usu-pop-modal-open"}`} onClick={close}>
                <div className="gest-usu-pop-modal__dialog notFound" onClick={handleModalDialogClick}>
                    <div className="gest-usu-pop-titleCloseBtn">
                        <button onClick={close}>X</button>
                    </div>
                    <div className="gest-usu-pop-modal-content">
                        Venta No Encontrado
                    </div>
                </div>
            </div>
            <div className={`gest-usu-pop-modal-back ${(isOpen && WasFound) && "gest-usu-pop-modal-open"}`} onClick={close}>
                <div className="gest-usu-pop-modal__dialog" onClick={handleModalDialogClick}>
                    <div className="gest-usu-pop-update-box">
                        <div className="gest-usu-pop-update-label">
                            <label >Actualizar Ventas</label>
                            <div className="gest-usu-pop-titleCloseBtn">
                                <button onClick={close}>X</button>
                            </div>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">ID Venta:</p>
                            <label className="gest-usu-pop-update-data">{data._id}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Nombre:</p>
                            <label className="gest-usu-pop-update-data">{data.name}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Venta:</p>
                            <label className="gest-usu-pop-update-data">{data.saleName}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Rol:</p>

                            {
                                printRols()
                            }

                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Estado:</p>
                            {
                                printStatus()
                            }
                        </div>
                        <div className="gest-usu-pop-update-box-buttons">
                            <button className="gest-usu-pop-btn gest-usu-pop-btn-update" onClick={closeSave}>Guardar Cambios</button>
                        </div>
                        <label className="gest-usu-pop-update-label"></label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GestionVentasPopup;