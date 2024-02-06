import React from 'react';
import fam from '../src/images/fam-1.svg'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="header__col">
                            <h4 className="header__sub">About us</h4>
                            <h4 className="header__title">Our designs solve problems</h4>
                            <h4 className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h4>
                        </div>
                        <div className="header__col">
                            <img src={fam} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;
