import React from "react";
import NavItems from "./nav_items";

const Nav = () =>{
    return(
        <header id="menu">
        <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <nav className="navbar navbar-expand-lg navbar-light">
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

        <section id="title">
            <div className="container-module--container">
                <div>
                    <h1>Yuri Valverde</h1>
                        <p className="subtitle index-module--subtitle block-center">Hi, I'm Yuri a front end developer with & years of experience, interests not just web but also mobile
                        with flutter and also have some projects in web3.
                    </p>
                </div>
            </div>
        </section>
        </header>
    );
}

export default Nav;