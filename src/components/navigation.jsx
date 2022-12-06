import React from "react";
import NavItems from "./nav_items";

const Nav = () =>{
    return(
        <section id="menu">
        <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">Yuri</li>
                    <NavItems text="Portfolio"/>
                    <NavItems text="About"/>
                    <NavItems text="Contact"/>
                    <li></li>
                </ul>
            </div>
            </nav>
            
        </div>
        </section>
    );
}

export default Nav;