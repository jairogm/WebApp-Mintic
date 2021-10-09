import React, { Component } from 'react'
import axios from 'axios';
import './css/Gestion_Usuarios.css'


class UsuarioTabla extends Component {
    render() {
        return (
            <>
                    <div className={this.props.row}>{this.props.user.id}</div>
                    <div className={this.props.row}>{this.props.user.name}</div>
                    <div className={this.props.row}>{this.props.user.username}</div>
                    <div className={this.props.row}>{this.props.user.rol}</div>
                    <div className={this.props.row}>{this.props.user.status}</div>
               
            </>)
    }
}





export default class GestionUsusarios extends Component {

    async componentDidMount(){
        const res =  await axios.get("https://readme-store-api.herokuapp.com/api/products")
        console.log(res)
        const users = res.data.map(user =>{
            return {
                id : user._id,
                name: user.sku,
                username: user.price,
                rol: user.author,
                status: user.title
            }
        })

        this.setState({users:users}) 
    }

    state = {
        users: [],
        idSearch : "",
        nameSearch: "",
        userSearch :""
    }


    printUsers() {
        let row = "row-pair";
        return <>
        {this.state.users.map((user) => {
            row = row === "row-odd" ? "row-pair" : "row-odd"
            return <UsuarioTabla key ={user.id} user = {user} row = {row}/>
        })}
        </>
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <section className="gest-usu-section-1-container">
                    <div className="gest-usu-search-box">
                        <div className="gest-usu-search-row">
                            <p className="gest-usu-p-search">Buscar ID:</p>
                            <input type="text" name="idSearch" className="gest-usu-search-input" placeholder="Buscar" value={this.state.idSearch} onChange={this.onChange}/>
                        </div>
                        <div className="gest-usu-search-row">
                            <p className="gest-usu-p-search">Nombre:</p>
                            <input type="text" name="nameSearch" className="gest-usu-search-input" placeholder="Nombre" value={this.state.nameSearch} onChange={this.onChange}/>
                        </div>
                        <div className="gest-usu-search-row">
                            <p className="gest-usu-p-search">Usuario:</p>
                            <input type="text" name="userSearch"className="gest-usu-search-input" placeholder="Usuario" value={this.state.userSearch} onChange={this.onChange}/>
                        </div>


                        <div className="gest-usu-search-box-buttons">
                            <button className="gest-usu-btn gest-usu-btn-search">Buscar</button>
                            <button className="gest-usu-btn gest-usu-btn-search">Actualizar</button>
                        </div>
                    </div>

                    <div className="gest-usu-user-table">
                        <div className="gest-usu-row-head">Id Usuario</div>
                        <div className="gest-usu-row-head">Nombre</div>
                        <div className="gest-usu-row-head">Usuario</div>
                        <div className="gest-usu-row-head">Rol</div>
                        <div className="gest-usu-row-head">Estado</div>

                        {
                            this.printUsers()
                        }
                
                    </div>


                </section>
            </div>
        )
    }
}
