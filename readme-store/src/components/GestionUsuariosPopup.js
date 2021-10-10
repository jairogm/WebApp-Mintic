import React, { Component, useState,useEffect } from 'react'
import './css/Gestion_Usuarios_popup.css'
import axios from 'axios';


const GestionUsuariosPopup = ({ isOpen, WasFound, close, data }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    const [userRol,setuserRol] = useState("")
    const [selectedRol,setSelectedRol] = useState("")

    useEffect(() => {
        setuserRol(data.rol)
    },[isOpen])

    const closeSave = async() => {
        if(selectedRol !== userRol) {
            await axios.patch("https://readme-store-api.herokuapp.com/api/users/"+data._id,{
                rol:selectedRol
            })   
        }
        close();
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
                                    <select className="gest-usu-pop-update-data gest-usu-pop-select" onChange={e =>setSelectedRol(e.target.value)}>
                                    <option defaultValue>{userRol}</option>
                                    {
                                        ["Seller","Admin"].map(rol=>{
                                            if(rol !== userRol){
                                                return<option >{rol}</option>
                                            }
                                        })
                                    }
                                    </select>
                                }
                            
                        </div>
                        <div className="gest-usu-pop-update-row">
                            <p className="gest-usu-pop-p-update">Estado:</p>
                            <select className="gest-usu-pop-update-data gest-usu-pop-select" >
                                <option defaultValue >Activo</option>
                                <option>Inactivo</option>
                            </select>
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