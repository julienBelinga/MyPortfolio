import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'

export default function MentionsLegales() {

  const { t } = useTranslation()
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	if (isHydrated === false) return null

  return (
    <section>
        <h1>{t('legalMentions.about-us.title')}</h1>
        <p>{t('legalMentions.about-us.content')}</p>
        <h1>{t('legalMentions.copyright.title')}</h1>
        <p>{Parser(t('legalMentions.copyright.content'))}</p>
        <h1>{t('legalMentions.website.title')}</h1>
        <h2>{t('legalMentions.website.creation.subtitle')}</h2>
        <p>{Parser(t('legalMentions.website.creation.content'))}</p>
        <h2>{t('legalMentions.website.hosting.subtitle')} </h2>
        <p>{Parser(t('legalMentions.website.hosting.content'))}</p>
    </section>
  )
}
