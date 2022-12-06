import React from "react";

const NavItems = (props) =>{
    return(
        <li className="nav-item"><a className="nav-link" href="#">{props.text}</a></li>
    );
}

export default NavItems;