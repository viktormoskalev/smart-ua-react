import React, { useState ,useEffect} from 'react';

import {Link} from 'react-router-dom';
import Nav from '../nav/Nav';
import './header.scss'
import logo from '../../img/logo.png'
function Header (){
    const [navopen, setNav] = useState("");
    const [location, setLocation] = useState("");
  
    useEffect(() => {
        setLocation(window.location.pathname);
console.log(location);
      });

function checklinck(){
    
}




    function navtoggle(){
        if (navopen){
            setNav("");
        } else {
            setNav("nav-open");
        }
    }

    return(
<header className={"header "+ navopen}>
    
    <div className="container ">

    <div className="header-content">
    <div onClick={navtoggle} className="btn-menu hide-l">
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
</div>
    <div className="logo">
        
 
           
            <Link to="/">
            <img src={logo} alt="Logo"/>
            </Link>

      

    </div>

    <Nav navtoggle/>
    <div className="header-login">
  
    <Link className="header-login-item"  to="/login">Login</Link>
    <Link className="header-login-item"  to="/Signup">SignUp</Link>

   
</div>
                </div>
                </div>

          
</header>
    );
}

export default Header