import { useEffect, useState } from "react"
import { NavLink, Outlet ,Link} from "react-router-dom"
import '../style/app.css'



export default function ContactUs(){
    const v1="block"
    const v2="none"
    const[style1,setStyle1]=useState({display:v1})
    const[style2,setStyle2]=useState({display:v1})
    
    return(
        <>
            <div className="container-sm" id="app1" style={{color:'white'}}>
                <div className="card" style={{margin: '5px',background:'rgb(200,100,20,.8)'}}>
                    <h4 style={{color:'black'}}><b>Contact Page</b></h4>
                    <p>you can contact us</p>
                    <ul className="navbar-nav">
                            <li className="nav-item" style={style1}>
                                    <NavLink onClick={()=>(setStyle1({display:v2}),setStyle2({display:v1}))} className="nav-link" to='/contact-us/email' style={{color:'blue'}}>Email</NavLink>
                            </li>
                            <li className="nav-item" style={style2}>
                                <NavLink onClick={()=>(setStyle2({display:v2}),setStyle1({display:v1}))} className="nav-link" to='/contact-us/address' style={{color:'blue'}}>Address</NavLink> 
                            </li>
                        </ul>
                    <Outlet />
                </div>
            </div>
        </>
    )
}