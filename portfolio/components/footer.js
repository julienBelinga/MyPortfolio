import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import github from '/assets/img/github.png'
import linkedIn from '/assets/img/linkedIn.png'
import malt from '/assets/img/malt.png'

export default function footer() {

  return (
    <>
        <footer>
            <ul>
                <li className="link"><Link href="/CV_freelance.pdf" target="_blank" download>mon CV</Link></li>
                <li className="link"><Link href="/contact">Contact</Link></li>
                <li className="link"><Link href="/mentions-legales">Mentions légales</Link></li>
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
