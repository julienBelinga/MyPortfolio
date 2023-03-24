import Image from 'next/image'
import pp_entier from 'assets/img/pp_entier.png'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Presentation() {
  const { t } = useTranslation();

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
                    <li>{t('presentation.role1')}</li>
                    <li>{t('presentation.role2')}</li>
                    <li>{t('presentation.role3')}</li>
                    <li>{t('presentation.role4')}</li>
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
