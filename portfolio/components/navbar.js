import Image from 'next/image';
import logo from 'assets/img/logo.png'

function Navbar(){

    return(
        <nav>

            <a href="/" class="nav-icon" aria-label="homepage" aria-current="page">
                <Image src={logo} alt="logo"/>
            </a>

            <div class="main-navlinks">
                <button type="button" class="hamburger"  aria-label="Toggle Navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="navlinks-container">
                <a href="#" aria-current="page">Home</a>
                <a href="#">Services</a>
                <a href="#">Site vitrine</a>
                <a href="#">Site E-commerce</a>
                <a href="#">Contact</a>
                </div>
            </div>
        
        </nav>
    )
}

export default Navbar