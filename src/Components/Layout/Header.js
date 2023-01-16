import React, { useContext } from "react";
import '../../style/Header.css';
import AppTodo from "../AppTodo";
import TodosContext from "../../Context/Todos";
import AuthContext from "../../Context/auth";
import { NavLink, useLocation } from "react-router-dom";



function Header(){
    const authContext=useContext(AuthContext)
    let butt
    authContext.state.loginStatus==true ? butt='exit' : butt='login';
    const location=useLocation();        
    
    return(
            <div id="header">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'><strong>Todo App</strong></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/home'>Home</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/about'+location.search}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contact-us'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-sm btn-success" id="loginButton" onClick={()=>(authContext.dispath({type:'changeLoginStatus',value:!authContext.state.loginStatus}))}>{butt}</button>
                </nav>                                                                                                  
                <div className='container-sm' id="apptodo">
                    <AppTodo />
                </div>    
            </div>   
    )
}

export default Header;