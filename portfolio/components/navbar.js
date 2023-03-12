import Image from 'next/image';
import logo from 'assets/img/logo.png'
import Link from 'next/link';

function Navbar(){

    return(
        <nav>

            <Link href="/" className="nav-icon" aria-label="homepage" aria-current="page">
                <Image src={logo} alt="logo"/>
            </Link>

            <div className="main-navlinks">
                <button type="button" className="hamburger"  aria-label="Toggle Navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navlinks-container">
                <Link href="/#project-container">Projet</Link>
                <Link href="/#pricing_vitrine">Site vitrine</Link>
                <Link href="/#pricing_Ecommerce">Site E-commerce</Link>
                <Link href="/#pricing_services">Autre services</Link>
                <Link href="/contact">Contact</Link>
                </div>
            </div>
        
        </nav>
    )
}

export default Navbar