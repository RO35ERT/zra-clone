import { Link } from "react-router-dom";

const MainNavbar = () => {
    return ( 
        <div className="main_nav">
            <ul>
                <li><Link>HOME</Link></li>
                <li><Link>REGISTRATIONS</Link></li>
                <li><Link>BUSINESS</Link></li>
                <li><Link>CUSTOMS</Link></li>
                <li><Link>PUBLICATIONS</Link></li>
                <li><Link>STATISTICS</Link></li>
                <li><Link>TAX TOOLS</Link></li>
                <li><Link>SMART INVOICE</Link></li>
                <li><Link>s</Link></li>
            </ul>
        </div>
     );
}
 
export default MainNavbar;