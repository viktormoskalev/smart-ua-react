import React, { useState ,useEffect} from 'react';

import {Link ,withRouter} from 'react-router-dom';
import Nav from '../nav/Nav';
import './header.scss'
import logo from '../../img/logo.png'

function Header (props){
    const [navopen, setNav] = useState("");
    const [addNav, setAddNav] = useState("");
    const [btnDisplay, setBtn] = useState({display:"block"});

    useEffect(() => {
if(props.location.pathname!=="/"){
    setAddNav("");

    setBtn({display:"none"});

} else{
    setAddNav(<Nav n={setNav} />);

    setBtn({display:"block"});
}
 },[props.location.pathname]);

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
 <div onClick={navtoggle} style={btnDisplay} className="btn-menu hide-l">
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
    <div className="btn-menu-row"></div>
</div>
    <div className="logo">
           
            <Link  to="/">
            <img src={logo} alt="Logo"/>
            </Link>

      

    </div>

    {addNav}
    <div className="header-login">
  
    <Link className="header-login-item"  to="/login">Login</Link>
    <Link className="header-login-item"  to="/Signup">SignUp</Link>

  
   
</div>
                </div>
                </div>

          
</header>
    );
}

export default withRouter(Header)