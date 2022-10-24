import React from "react";

const NavItems = (props) =>{
    return(
        <li className="MenuItems"><a className={props.btnClass}>{props.text}</a></li>
    );
}

export default NavItems;