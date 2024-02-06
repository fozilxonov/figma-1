import Circle from '../src/images/Circle.svg'
import Line from '../src/images/Line Indicator.svg'


const Process = () => {
    return (
        <>

            <div className="process">
                <div className="container">
                    <h1 className="process__sub">The process we follow</h1>

                    <div className="process__row">
                        <div className="process__card">
                            <div className="process__head">
                                <img src={Circle} alt="" />
                                <img src={Line} alt="" />
                            </div>

                            <h3 className="process__title">Planning</h3>
                            <p className="process__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>

                        <div className="process__card">
                            <div className="process__head">
                                <img src={Circle} alt="" />
                                <img src={Line} alt="" />
                            </div>

                            <h3 className="process__title">Conception</h3>
                            <p className="process__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>

                        <div className="process__card">
                            <div className="process__head">
                                <img src={Circle} alt="" />
                                <img src={Line} alt="" />
                            </div>

                            <h3 className="process__title">Design</h3>
                            <p className="process__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>

                        <div className="process__card">
                            <div className="process__head">
                                <img src={Circle} alt="" />
                                <img src={Line} alt="" />
                            </div>

                            <h3 className="process__title">Development</h3>
                            <p className="process__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process;
