import React from 'react'
import './css/stylelogin.css'
import  {ReactComponent as Logo} from './img/ReadMeLogo.png'

class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='login-box'>
                <div className='login-box-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='text' name='user' placeholder='Ingrese su Usuario' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='ingrese su contraseña' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;
