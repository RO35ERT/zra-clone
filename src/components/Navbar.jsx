import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li>
                    <img src="https://www.zra.org.zm/wp-content/uploads/2019/10/cropped-cropped-zra_logo_bird-02.png" alt="logo" />
                </li>

                <li><Link>About Us</Link></li>
                <li><Link>Tax Payer Charter</Link></li>
                <li><Link>Tenders</Link></li>
                <li><Link>Vacancies</Link></li>
                <li><Link>Tutorials</Link></li>
                <li><Link>Contact Us</Link></li>
                <li className="login">Login</li>






            </ul>
        </div>
     );
}
 
export default Navbar;