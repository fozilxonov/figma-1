
// import Navbartwo from './Navbartwo';
import Navbar from './Navbar';
import Header from './Header';
import Focus from './Focus';
import Process from './Process';
import Mission from './Mission';
import Benefit from './Benefit';
import Icons from './Icons';
import Meet from './Meet';
import Footer from './Footer';
import Final from './Final';
import './css/style.css';

// import Button from './UI/Button';
// import Calculator from './calculator';




function App() {
    // const [count, setCount] = useState(0)

    // const inc = () => {
    //     setCount(count + 1);
    //     console.log(count)
    // }
    // const dec = () => {
    //     setCount(count - 1);
    //     console.log(count)
    // }



    return (
        <>
            {/* <Navbartwo age='10' name='ali'/> */}
            {/* <Button type="success btn">Success</Button>
            <Button type="danger btn">Danger</Button>
            <Button type="primary btn">Primary</Button> */}
           
            <Navbar />
            {/* <h1>{count}</h1> */}
            <Header />
            <Focus />
            <Process />
            <Mission />
            <Benefit />
            <Icons />
            <Meet />
            <Footer />
            <Final />
        </>
    )
}

export default App;