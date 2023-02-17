import Image from 'next/image';
import logo from 'assets/img/logo.png'


function Header(){
    return(
        <header>
                <Image src={logo} alt="logo"/>
        </header>
    )
}

export default Header