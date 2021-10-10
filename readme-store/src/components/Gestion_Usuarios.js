import React, { useState, useEffect, Component,setTimeout} from "react";
import "./css/Gestion_Usuarios.css";
import GestionUsuariospopup from './GestionUsuariosPopup';
import usePopUp from "../hooks/usePopUp";
import axios from 'axios';


class UsuarioTabla extends Component {
  render() {
    return (
        <>
          <div className={this.props.row}>{this.props.user.id}</div>
          <div className={this.props.row}>{this.props.user.name}</div>
          <div className={this.props.row}>{this.props.user.username}</div>
          <div className={this.props.row}>{this.props.user.email}</div>
          <div className={this.props.row}>{this.props.user.role}</div>
        </>)
  }
}


function Gestion_Usuarios () {
  const [isOpenModal, openModal, closeModal] = usePopUp();
  const [users, setUsers] = useState([])
  const [idSearch,setIdSearch] = useState("")
  const [NameSearch,setNameSearch] = useState("")
  const [UsernameSearch,setUsernameSearch] = useState("")
  const [WasFound,setWasFound] = useState(true)
  const [userData,setUserData] = useState({})

  const getUsers = async() =>{
    const res = await axios.get("https://readme-store-api.herokuapp.com/api/users")
    console.log(res)
    const usersGetted = res.data.map(user =>{
      return{
        id:user._id,
        name:user.name,
        username:user.userName,
        email:user.email,
        role:user.rol
      }
    });      
    setUsers(usersGetted)
  }

  useEffect(() => {
    getUsers();
  },[]);

  const close = () => {
    closeModal();
    getUsers();
    setWasFound(true)
}

  const printUsers=()=> {
    let row = "row-pair";
    return <>
    {users.map((user) => {
        row = row === "row-odd" ? "row-pair" : "row-odd"
        return <UsuarioTabla key ={user.id} user = {user} row = {row}/>
    })}
    </>
  } 

  const notParams = () => {
    if(idSearch === "" && NameSearch === "" && UsernameSearch === ""){
      return true;
    } 
    return false;
  }

  const Search = async ()=> {
    let res = ""
    if(notParams()){

      setWasFound(false);

    }else{

      res = await axios.get("https://readme-store-api.herokuapp.com/api/users?id="+idSearch+"&username="+UsernameSearch+"&name="+NameSearch)

      if (res.data.length === 0){
        setWasFound(false)
      }else{
      setUserData(res.data[0])
      }

    }
    
    console.log(res)
    openModal()
  }

  return (
    <div>
      
    <section className="gest-usu-section-1-container">
      <div className="gest-usu-search-box">
        <div className="gest-usu-search-row">
          <p className="gest-usu-p-search">Buscar ID:</p>
          <input type="text" className="gest-usu-search-input" placeholder="ID" onChange={(e) =>setIdSearch(e.target.value)} value={idSearch}/>
        </div>
        <div className="gest-usu-search-row">
          <p className="gest-usu-p-search">Nombre:</p>
          <input type="text" className="gest-usu-search-input" placeholder="Nombre" onChange={(e) =>setNameSearch(e.target.value)} value={NameSearch}/>
        </div>
        <div className="gest-usu-search-row">
          <p className="gest-usu-p-search">Usuario:</p>
          <input type="text" className="gest-usu-search-input" placeholder="Usuario" onChange={(e) =>setUsernameSearch(e.target.value)} value={UsernameSearch}/>
        </div>

        <div className="gest-usu-search-box-buttons">
          <button onClick={()=>Search()} className="gest-usu-btn gest-usu-btn-search">Buscar</button>
          <button className="gest-usu-btn gest-usu-btn-search">Actualizar</button>
          <GestionUsuariospopup isOpen={isOpenModal} WasFound ={ WasFound } close={close} data = {userData}/>

        </div>
      </div>

      <div className="gest-usu-user-table">
        <div className="gest-usu-row-head">Id Usuario</div>
        <div className="gest-usu-row-head">Nombre</div>
        <div className="gest-usu-row-head">Usuario</div>
        <div className="gest-usu-row-head">Email</div>
        <div className="gest-usu-row-head">Rol</div>

        {
          printUsers()
        }
      </div>
    </section>
  </div>
  )
}


export default Gestion_Usuarios;
