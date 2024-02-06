import Misone from '../src/images/mis-1.svg'
import Mistwo from '../src/images/mis-2.svg'


const Mission = () => {
    return (
        <>
            <div className="mission">
                <div className="container">
                    <div className="mission__flex">
                        <div className="mission__row">
                            <div className="mission__col">
                                <h5 className="mission__sub">Our Mission </h5>
                                <h2 className="mission__title">Inspire, Innovate, Share</h2>
                                <p className="mission__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="mission__col">
                                <img src={Misone} alt="" />
                            </div>
                        </div>


                        <div className="mission__row">
                            <div className="mission__col">
                                <img src={Mistwo} alt="" />

                            </div>
                            <div className="mission__col">
                                <h5 className="mission__sub">Our Mission </h5>
                                <h2 className="mission__title">Inspire, Innovate, Share</h2>
                                <p className="mission__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mission;