import React from "react";
import famtwo from "../src/images/fam-2.svg"
const Focus = () => {
    return (
        <>

            <div className="focus">
                <div className="container">
                    <div className="focus__row">
                        <div className="focus__col">
                            <h4 className="focus__sub">Who we are</h4>
                            <h1 className="focus__title">Goal focussed</h1>
                            <p className="focus__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                        <div className="focus__col">
                            <h1 className="focus__title">Continuous improvement</h1>
                            <p className="focus__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>


                </div>

                <div className="container">
                    <img src={famtwo} alt="" className="focus__img" />
                </div>

            </div>
        </>
    )
}

export default Focus;