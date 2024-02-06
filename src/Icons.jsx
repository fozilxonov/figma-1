import iconone from '../src/images/icon-1.svg'
import icontwo from '../src/images/icon-2.svg'
import iconthree from '../src/images/icon-3.svg'
import iconfour from '../src/images/icon-4.svg'
import iconfive from '../src/images/icon-5.svg'
import iconsix from '../src/images/icon-6.svg'


const Icons = () => {
    return (
        <>

            <div className="icons">
                <div className="container">
                    <div className="icon__content">
                        <img src={iconone} alt="" />
                        <img src={icontwo} alt="" />
                        <img src={iconthree} alt="" />
                        <img src={iconfour} alt="" />
                        <img src={iconfive} alt="" />
                        <img src={iconsix} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icons;