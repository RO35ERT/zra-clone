
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Links = () => {
    return ( 
        <div className="all_links">
            <div className="contact">
                    <h1>Contact Us</h1>
                    <hr />
                    <div className="contact-details">
                        <p>Plot No 1704 Kalambo Road / Villa Elizabetha, Lusaka</p>
                        <p>4111</p>
                        <p>advice@zra.org.zm</p>
                    </div>
            </div>
            <div className="other_links">
                <h1>Other Links</h1>
                <hr />
                <div className="other-links-links">
                    <ul>
                        <li><Link>National Pension Scheme Authority</Link></li>
                        <li><Link>Bank of Zambia (BOZ)</Link></li>
                        <li><Link>Patent and Company Registration Agency</Link></li>
                        <li><Link>Ministry of Finance</Link></li>
                        <li><Link>Ministry of Commerce Trade and Industry</Link></li>
                        <li><Link>Zambia Trade Portal</Link></li>
                        <li><Link>Zambia Development Agency</Link></li>
                        <li><Link>Common Market for Eastern and Southern Africa</Link></li>
                        <li><Link>World Customs Organisation</Link></li>
                        <li><Link>World Trade Organisation</Link></li>
                        <li><Link>Southern African Development Community</Link></li>
                        <li><Link>Organisation for Economic Co-operation and Development</Link></li>
                    </ul>
                </div>
            </div>
            <div className="social_links">
                <h1>Social Media</h1>
                <hr />
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
        </div>
     );
}
 
export default Links;