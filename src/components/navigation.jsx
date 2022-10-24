import React from "react";
import NavItems from "./nav_items";

const Nav = () =>{
    return(
        <nav className="MyHeader">
           <ul className="NavMenu">
                <li className="MenuItems">Yuri</li>
                <NavItems text="Portfolio"/>
                <NavItems text="About"/>
                <NavItems text="Contact" btnClass="ButtonNav" />
                <li></li>
           </ul>
        </nav>
    );
}

export default Nav;