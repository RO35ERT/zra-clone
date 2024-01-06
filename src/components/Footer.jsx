import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <div className="footer">
           <div className="footer-details">
                <p>&copy; {year} Zambia Revenue Authority. All rights reserved</p>
            </div> 
            <div className="links">
                <ul>
                    <li><Link><i className="fa fa-facebook"></i></Link></li>
                    <li><Link><i className="fa fa-twitter"></i></Link></li>
                    <li><Link><i className="fa fa-instagram"></i></Link></li>
                    <li><Link><i className="fa fa-linkedin"></i></Link></li>
                    <li><Link><i className="fa fa-youtube"></i></Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;