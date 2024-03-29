import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <div className="hero">
            <h1>tax Information and services</h1>
            <div className="hero-details">
                <h2>What would tou like to do</h2>
                <select name="" id="">
                    <option value="">select a service</option>
                    <option value="">Register for a TPIN</option>
                    <option value="">File Returns</option>
                    <option value="">Pay Taxes Online</option>
                    <option value="">Apply for Tax Compliance Certificate</option>
                    <option value="">Import vehicle</option>
                </select>
                <Link>Get started</Link>
            </div>
            <div className="forex">
                <div className="corousel">
                    Forex Exchange Rates
                </div>
                <div className="forex-rates">
                </div>
            </div>
        </div>
     );
}
 
export default Hero;