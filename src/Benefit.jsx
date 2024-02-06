import Benone from '../src/images/ben-1.svg'
import Bentwo from '../src/images/ben-2.svg'
import Benthree from '../src/images/ben-3.svg'




const Benefit = () => {
    return (
        <>
            <div className="benefit">
                <div className="container">
                    <h1 className="benefit__sub">The benefits of working  with us</h1>
                    <div className="benefit__row">
                        <div className="benefit__card">
                            <img src={Benone} className='benefit__img' alt="" />
                            <h4 className="benefit__title">Customize with ease</h4>
                            <p className="benefit__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>


                        <div className="benefit__card">
                            <img src={Bentwo} className='benefit__img' alt="" />

                            <h4 className="benefit__title">Perfectly Responsive</h4>
                            <p className="benefit__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>


                        <div className="benefit__card">
                            <img src={Benthree} className='benefit__img' alt="" />

                            <h4 className="benefit__title">Friendly Support</h4>
                            <p className="benefit__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Benefit;