import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import github from '/assets/img/github.png'
import linkedIn from '/assets/img/linkedIn.png'
import malt from '/assets/img/malt.png'
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

export default function Footer() {

  const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

  return (
    <>
        <footer>
            <ul>
                <li className="link"><Link href="/CV_freelance.pdf" target="_blank" download>{t('footer.CV')}</Link></li>
                <li className="link"><Link href="/contact">{t('footer.contact')}</Link></li>
                <li className="link"><Link href="/mentions-legales">{t('footer.legal-mentions')}</Link></li>
                <li>
                  <ul className="icon-set">
                    <li><Link href="https://github.com/julienBelinga" target="blank"><Image className="icon" src={github} alt="Github"/></Link></li>
                    <li><Link href="https://www.linkedin.com/in/julien-belinga/" target="blank"><Image className="icon" src={linkedIn} alt="LinkedIn"/></Link></li>
                    <li><Link href="https://www.malt.fr/profile/julienbelinga?overview=true" target="blank"><Image className="icon" src={malt} alt="Malt"/></Link></li>
                  </ul>
                </li>
            </ul>
        </footer>
    </>
  )
}
