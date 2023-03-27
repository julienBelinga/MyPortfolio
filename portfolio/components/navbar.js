import Image from 'next/image'
import logo from 'assets/img/logo.png'
import fr from 'assets/img/flag_fr.png'
import en from 'assets/img/flag_en.png'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { i18n } from '../i18n.js'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinksContainerRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (navLinksContainerRef.current && window.innerWidth > 900) {
        navLinksContainerRef.current.style.transition = 'none';
        setNavOpen(false);
      } else {
        navLinksContainerRef.current.style.transition = 'transform 0.4s ease-out';
      }
    };

    window.addEventListener('resize', handleResize);

    setIsHydrated(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const { t } = useTranslation()
	if (isHydrated === false) return null

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id='nav-container'>
      <div id='nav-bg'></div>
      <nav>
        <Link href="/" className="nav-icon" aria-label="homepage" aria-current="page">
          <Image src={logo} alt="logo"/>
        </Link>
        <div className="main-navlinks">
          <button type="button" className={`hamburger ${navOpen ? 'open' : ''}`} onClick={toggleNav} aria-label="Toggle Navigation" aria-expanded={navOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div id="navitems-container" className={`navlinks-container ${navOpen ? 'open' : ''}`}>
            <div className="navlink-container" ref={navLinksContainerRef}>
              <Link href="/#project-container">{t('navbar.link1')}</Link>
              <Link href="/#pricing_vitrine">{t('navbar.link2')}</Link>
              <Link href="/#pricing_Ecommerce">{t('navbar.link3')}</Link>
              <Link href="/#pricing_services">{t('navbar.link4')}</Link>
              <Link href="/contact">{t('navbar.link5')}</Link>
            </div>
            <div id="flags">
              <button type="button" onClick={() => changeLanguage('fr')}>
                <Image src={fr} alt="flag" width={30} height={30}/>
              </button>
              <button type="button" onClick={() => changeLanguage('en')}>
                <Image src={en} alt="flag" width={30} height={30}/>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
