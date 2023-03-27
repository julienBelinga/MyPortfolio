import Image from 'next/image'
import pp_entier from 'assets/img/pp_entier.png'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

function Presentation() {
  
	const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

  return (
    <>
      <div id="presentation">
        <div>
          <div id="bg-title">{t('presentation.title')}</div>
        </div>
        <div id="info-container">
          <div id="presentation-info">
            <div>
              <h1>{t('presentation.name')}</h1>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="wrapper-txt">
                  <p className="static-txt">{t('presentation.description')}</p>
                  <ul className="dynamic-txts">
                    <li><span>{t('presentation.role1')}</span></li>
                    <li><span>{t('presentation.role2')}</span></li>
                    <li><span>{t('presentation.role3')}</span></li>
                    <li><span>{t('presentation.role4')}</span></li>
                  </ul>
                </div>
                <Link id="contact-button" href="/contact">
                  {t('presentation.contact')}
                </Link>
              </div>
            </div>
          </div>
          <div id="profil">
            <div id="profile-mobile-bg"></div>
            <Image id="pp" src={pp_entier} alt="photo de profil" priority />
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
