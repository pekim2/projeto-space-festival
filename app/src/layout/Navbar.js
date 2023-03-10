import {Link} from "react-router-dom";
import logo from '../img/logo.ico'
import './Navbar.css'

    
function Navbar(){

return(
<div>
    <nav className="bg-dark navbar navbar-expand-md">
        <div className="container-fluid d-flex justify-content-center">
            <Link to='/' className="navbar-brand"> <img className="logo" src={logo} alt='logo do Festival'/> </Link>
            
        </div>
    </nav>
</div>
)
}

export default Navbar;