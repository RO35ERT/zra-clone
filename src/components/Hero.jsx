import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
    return ( 
        <div className="hero">
            <h1>Tax Information</h1>
            <div className="hero-details">
                <h1>What would tou like to do</h1>
                <select name="" id="">
                    <option value="">select option</option>
                </select>
                <Link>Get started</Link>
            </div>
        </div>
     );
}
 
export default Hero;