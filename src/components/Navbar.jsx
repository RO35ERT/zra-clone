import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li>
                    <Link>
                        <img src="https://www.zra.org.zm/wp-content/uploads/2023/09/ZRA-logo-01.png" alt="logo" />
                    </Link>
                </li>
                <li><Link>About Us</Link></li>
                <li><Link>Tax Payer Charter</Link></li>
                <li><Link>Tenders</Link></li>
                <li><Link>Vacancies</Link></li>
                <li><Link>Tutorials</Link></li>
                <li><Link>Contact Us</Link></li>
                <li className="login"><Link>Login</Link></li>
            </ul>
        </div>
     );
}
 
export default Navbar;