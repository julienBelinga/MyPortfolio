import Image from 'next/image';
import logo from 'assets/img/logo.png'

function Navbar(){

    return(
        <nav>

            <a href="/" className="nav-icon" aria-label="homepage" aria-current="page">
                <Image src={logo} alt="logo"/>
            </a>

            <div className="main-navlinks">
                <button type="button" className="hamburger"  aria-label="Toggle Navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navlinks-container">
                <a href="/#project-container">Projet</a>
                <a href="/#pricing_vitrine">Site vitrine</a>
                <a href="/#pricing_Ecommerce">Site E-commerce</a>
                <a href="/#pricing_services">Autre services</a>
                <a href="/contact">Contact</a>
                </div>
            </div>
        
        </nav>
    )
}

export default Navbar