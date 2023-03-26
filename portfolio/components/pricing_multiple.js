import React from 'react'
import Card from 'components/pricing_card'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react"

export default function pricing_multiple() {

	const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

	return (
		<>
			<section id="pricing">
				<h2
					id="pricing_vitrine"
					className="pricing-title"
				>
					{t('pricing.showcase.main-title')}
				</h2>
				<p className="title">{t('pricing.showcase.description')}</p>
				<div className="pricing">
					<Card
						title={t('pricing.title1')}
						price={t('pricing.showcase.price1')}
						info1={<p>{t('pricing.info1.1')}</p>}
						info2={<p>{t('pricing.info1.2')}</p>}
						info3={<p>{t('pricing.info1.3')}</p>}
          				info4={<p>{t('pricing.info1.4')}</p>}
					/>
					<Card
						title={t('pricing.title2')}
						price={t('pricing.showcase.price2')}
						info1={<p>{t('pricing.info2.1')}</p>}
						info2={<p>{t('pricing.info2.2')}</p>}
						info3={<p>{t('pricing.info2.3')}</p>}
						info4={<p>{t('pricing.info2.4')}</p>}
						promote={true}
					/>
					<Card
						title={t('pricing.title3')}
						price={t('pricing.showcase.price3')}
						info1={<p>{t('pricing.info3.1')}</p>}
						info2={<p>{t('pricing.info3.2')}</p>}
						info3={<p>{t('pricing.info3.3')}</p>}
          				info4={<p>{t('pricing.info3.4')}</p>}
					/>
				</div>
			</section>
			<section id="pricing">
				<h2
					id="pricing_Ecommerce"
					className="pricing-title"
				>
					{t('pricing.ecommerce.main-title')}
				</h2>
				<p className="title">{t('pricing.ecommerce.description')}</p>
				<div className="pricing">
					<Card
						title={t('pricing.title1')}
						price={t('pricing.ecommerce.price1')}
          				info1={<p>{t('pricing.ecommerce.info1.1')}</p>}
						info2={<p>{t('pricing.ecommerce.info1.2')}</p>}
						info3={<p>{t('pricing.ecommerce.info1.3')}</p>}
          				info4={<p>{t('pricing.info1.4')}</p>}
					/>
					<Card
						title={t('pricing.title2')}
						price={t('pricing.ecommerce.price2')}
          				info1={<p>{t('pricing.ecommerce.info2.1')}</p>}
						info2={<p>{t('pricing.info2.2')}</p>}
						info3={<p>{t('pricing.info2.3')}</p>}
						info4={<p>{t('pricing.info2.4')}</p>}
						promote={true}
					/>
					<Card
						title={t('pricing.title3')}
						price={t('pricing.ecommerce.price3')}
          				info1={<p>{t('pricing.ecommerce.info3.1')}</p>}
						info2={<p>{t('pricing.info3.2')}</p>}
          				info3={<p>{t('pricing.ecommerce.info3.3')}</p>}
          				info4={<p>{t('pricing.info3.4')}</p>}
					/>
				</div>
			</section>
			<section id="pricing">
				<h2
					id="pricing_services"
					className="pricing-title"
				>
					{t('pricing.other.main-title')}
				</h2>
				<p className="title">{t('pricing.other.description')}</p>
				<div className="pricing no-promote">
					<Card
						title={t('pricing.other.title1')}
						price={t('pricing.other.price1')}
          				info1={<p>{t('pricing.other.info1.1')}</p>}
          				info2={<p>{t('pricing.other.info1.2')}</p>}
          				info3={<p>{t('pricing.other.info1.3')}</p>}
          				info4={<p>{t('pricing.other.info1.4')}</p>}
					/>
					<Card
						title={t('pricing.other.title2')}
						price={t('pricing.other.price2')}
          				info1={<p>{t('pricing.other.info2.1')}</p>}
          				info2={<p>{t('pricing.other.info2.2')}</p>}
          				info3={<p>{t('pricing.other.info2.3')}</p>}
          				info4={<p>{t('pricing.other.info2.4')}</p>}
					/>
					<Card
						title={t('pricing.other.title3')}
						price={t('pricing.other.price3')}
          				info1={<p>{t('pricing.other.info3.1')}</p>}
          				info2={<p>{t('pricing.other.info3.2')}</p>}
						info3={<p>{t('pricing.other.info3.3')}</p>}
						info4={<p>{t('pricing.other.info3.4')}</p>}
					/>
				</div>
			</section>
		</>
	)
}
