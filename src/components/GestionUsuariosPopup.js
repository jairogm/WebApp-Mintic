import React, { Component, useState, useEffect } from 'react'
import './css/Gestion_Usuarios_popup.css'
import axios from 'axios';


const GestionUsuariosPopup = ({ isOpen, WasFound, close, data, isModidy }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    const [userRol, setuserRol] = useState("")
    const [userStatus, setuserStatus] = useState("")
    const [selectedRol, setSelectedRol] = useState()
    const [selectedStatus, setSelectedStatus] = useState("")

    useEffect(() => {
        setuserRol(data.rol)
        setuserStatus(data.status)
        setSelectedRol(data.rol)
        setSelectedStatus(data.status)
    }, [isOpen])


    const closeSave = async () => {
        let filter ={}
        filter.rol = selectedRol
        filter.status = selectedStatus
        console.log(filter)

        if (selectedRol !== userRol || selectedStatus !== userStatus) {
           const res =  await axios.patch("https://readme-store-api.herokuapp.com/api/users/" + data._id, filter)
            console.log(res)
        }
        close();
    }

    const printRols = () => {
        if (isModidy) {
            return <select className="gest-usu-pop-update-data gest-usu-pop-select" onChange={e => setSelectedRol(e.target.value)}>
                <option defaultValue>{userRol}</option>
                {
                    ["Seller", "Admin"].map(rol => {
                        if (rol !== userRol) {
                            return <option key={rol}>{rol}</option>
                        }
                    })
                }
            </select>
        } else {
            return <label className="gest-usu-pop-update-data" style={{ display: 'inline' }}>{userRol}</label>
        }
    }

    const printStatus = () => {
        if (isModidy) {
            return <select className="gest-usu-pop-update-data gest-usu-pop-select" onChange={e=>setSelectedStatus(e.target.value)}>
                <option defaultValue >{userStatus}</option>
                {
                    ["enabled", "disabled"].map(status => {
                        if (status !== userStatus) {
                            return <option key={status}>{status}</option>
                        }
                    })
                }
            </select>
        } else {
            return <label className="gest-usu-pop-update-data" style={{ display: 'inline' }}>{userStatus}</label>
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
                        Usuario No Encontrado
                    </div>
                </div>
            </div>
            <div className={`gest-usu-pop-modal-back ${(isOpen && WasFound) && "gest-usu-pop-modal-open"}`} onClick={close}>
                <div className="gest-usu-pop-modal__dialog" onClick={handleModalDialogClick}>
                    <div className="gest-usu-pop-update-box">
                        <div className="gest-usu-pop-update-label">
                            <label >Actualizar Usuarios</label>
                            <div className="gest-usu-pop-titleCloseBtn">
                                <button onClick={close}>X</button>
                            </div>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">ID Usuario:</p>
                            <label className="gest-usu-pop-update-data">{data._id}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Nombre:</p>
                            <label className="gest-usu-pop-update-data">{data.name}</label>
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Usuario:</p>
                            <label className="gest-usu-pop-update-data">{data.userName}</label>
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

export default GestionUsuariosPopup;