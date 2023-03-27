import Image from 'next/image'
import Link from 'next/link'
import github from 'assets/img/github.png'
import linkedIn from 'assets/img/linkedIn.png'
import malt from 'assets/img/malt.png'
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [message, setMessage] = useState('')

    const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

  return (
    <>
        <div id="contact">

            <div className="contact-wrapper">

                <form action="https://formsubmit.co/julienbelinga.pro@gmail.com"
                    method="POST"
                    id="contact-form"
                    className="form-horizontal"
                    role="form">

                    <div className="id">
                        <input type="text"
                        className="form-control"
                        id="name"
                        placeholder={t('contact.lastName')}
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                        <input type="text"
                        className="form-control"
                        id="first-name"
                        placeholder={t('contact.firstName')}
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
                    </div>
                    <input type="email"
                        className="form-control"
                        id="email"
                        placeholder={t('contact.email')}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <input type="tel"
                        className="form-control"
                        id="telephone"
                        name="telephone"
                        placeholder={t('contact.phone')}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        required />
                    <textarea className="form-control"
                        rows="10"
                        placeholder={t('contact.message')}
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required></textarea>
                    <button className="btn btn-primary send-button"
                        id="submit"
                        type="submit"
                        value="SEND">
                        <div className="alt-send-button">
                        <i className="fa fa-paper-plane"></i><span className="send-text">{t('contact.button')}</span>
                        </div>
                    </button>
                    <p style={{fontSize: "9px"}}>
                        <em>{t('contact.data')}</em>
                    </p>
                </form>

                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item">
                            <i className="fa fa-map-marker fa-2x"><span className="contact-text place">Nantes, France</span></i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-phone fa-2x"><span className="contact-text phone"><Link href="tel:1-212-555-5555" title="Give me a call">06 45 20 54 90</Link></span></i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><Link href="mailto:#" title="Send me an email">julienbelinga.pro@gmail.com</Link></span></i>
                        </li>
                    </ul>
                    <hr/>
                    <ul className="social-media-list">
                        <Link href="https://github.com/julienBelinga" target="blank" className="contact-icon">
                            <li>
                                <Image src={github} alt="github" width={20} height={20}/>
                            </li>
                        </Link>
                        <Link href="https://www.linkedin.com/in/julien-belinga-19111a199/" target="blank" className="contact-icon">
                            <li>
                                <Image src={linkedIn} alt="linkedIn" width={20} height={20}/>
                            </li>
                        </Link>
                        <Link href="https://www.malt.fr/profile/julienbelinga?overview=true" target="blank" className="contact-icon">
                            <li id="malt">
                                <Image src={malt} alt="malt" width={20} height={20}/>
                            </li>
                        </Link>
                    </ul>
                    <hr/>
                    <div className="copyright">&copy; {t('contact.right')}</div>
                </div>
            </div> 
        </div> 
    </>
  )
}
