import Image from 'next/image'
import React from 'react'
import check from 'assets/img/checkmark.png'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

export default function Pricing_card(props) {

	const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

	return (
		<>
			<div
				id="vitrine"
				className={`${props.promote && "promote"}`}
			>
				<div className="header-container">
					<p className="popular">
						<strong>{t('pricing.popular')}</strong>
					</p>
					<h3>{props.title}</h3>
                <p>{t('pricing.starting-price')}<br/>
                <strong>{props.price}</strong></p>
                <hr/>
				</div>
				<ul>
					<li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info1}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info2}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info3}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
						{props.info4}
					</li>
				</ul>
				<div id="button-container">
                <Link className='button' href="/contact"><button>{t('pricing.button')}</button></Link>
				</div>
			</div>
		</>
	)
}
