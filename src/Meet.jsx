import meetone from '../src/images/meet-1.svg'
import meettwo from '../src/images/meet-2.svg'
import meethree from '../src/images/meet-3.svg'
import meetfour from '../src/images/meet-4.svg'


const Meet = () => {
    return (
        <>
            <div className="meet">
                <div className="container">
                    <h1 className="meet__sub">Meet our team</h1>

                    <div className="meet__row">
                        <img src={meetone} className='meet__card' alt="" />
                        <img src={meettwo} className='meet__card' alt="" />
                        <img src={meethree} className='meet__card' alt="" />
                        <img src={meetfour} className='meet__card' alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Meet;