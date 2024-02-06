import logo from '../src/images/Logo.svg'
import facebook from '../src/images/facebook.svg'
import instagram from '../src/images/instagram.svg'
import linkedin from '../src/images/linkedin.svg'
import twitter from '../src/images/twitter.svg'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__col">
                            <img src={logo} className="footer__logo" alt="" />
                            <p className="footer__text">
                                We are always open to discuss your project and improve your online presence.
                            </p>

                            <div className="footer__email">
                                <div className="email__row">
                                    <div className="email__title">Email me at</div>
                                    <a href='#' className="email__text">contact@website.com</a>
                                </div>

                                <div className="email__row">
                                    <div className="email__title">Call us</div>
                                    <a href='#' className="email__text">0927 6277 28525</a>
                                </div>
                            </div>

                        </div>
                        <div className="footer__col">
                            <div className="footer__title">Lets Talk!</div>

                            <div className="footer__text">
                                We are always open to discuss your project,<pre></pre> improve your online presence and help with your
                                <pre></pre>
                                UX/UI design challenges.
                            </div>

                            <div className="footer__icons">
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={instagram} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;