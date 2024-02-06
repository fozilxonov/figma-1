import React, { useRef } from 'react';
import logo from '../src/images/Logo.svg'



// import { useState } from 'react';



const Navbar = (props) => {





    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar__content">
                        <div className="navbar__logo">
                            <img src={logo} alt="" />

                        </div>

                        <div className="navbar__main">
                            <div className="navbar__menu">
                                <li><a className="active" href="">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                            </div>

                            <button className="navbar__btn">Contact us</button>
                            <div className='menu-icon'><i className="bi bi-list"></i></div>

                        </div>
                    </div>
                </div>
                {/* <button className='danger' onClick={props.decre}>-</button>
                <button className='success' onClick={props.incer}>+</button> */}
            </div>

        </>
    )


}
export default Navbar;