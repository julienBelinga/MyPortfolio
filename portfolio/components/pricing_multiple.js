import React from 'react'
import Card from 'components/pricing_card'

export default function pricing_multiple() {

  const info1= <p>L'offre <strong>Standard</strong></p>
  const info2= <p>L'offre <strong>Personnalisé</strong></p>
  const info3= <p>Design <strong>Personnalisé</strong></p>
  const info4= <p>Création d'adresses <strong>mails custom</strong></p>
  const info5= <p>Module de <strong>réservations/prise de RDV</strong></p>
  const info6= <p>Création d'une <strong>FAQ</strong></p>
  const info7= <p>Création du site comprenant <strong>1 à 3 pages</strong></p>
  const info8= <p>Module de <strong>paiement</strong></p>
  const info9= <p>Nombres de pages <strong>illimités</strong></p>
  const info0= <p>Fonctionnalités sur mesure</p>

	return (
		<>
			<section id="pricing">
				<h2
					id="pricing_vitrine"
					className="pricing-title"
				>
					Site <strong>vitrine</strong>
				</h2>
				<p className="title">La meilleure solution pour commencer à augmenter votre présence en ligne</p>
				<div className="pricing">
					<Card
						title="Standard"
						price="800 €"
						info1={info7}
						info2={info3}
						info3={info4}
          info4={<p>Certificat <strong>SSL</strong></p>}
					/>
					<Card
						title="Personnalisé"
						price="1 100 €"
						info1={info1}
						info2={info9}
						info3={info5}
						info4={info6}
						promote={true}
					/>
					<Card
						title="Premium"
						price="1 500 €"
						info1={info2}
						info2={info0}
						info3={info8}
          info4={<p>référencement <strong>Google</strong></p>}
					/>
				</div>
			</section>
			<section id="pricing">
				<h2
					id="pricing_Ecommerce"
					className="pricing-title"
				>
					Site <strong>E-commerce</strong>
				</h2>
				<p className="title">La meilleure solution pour lancer un business en ligne</p>
				<div className="pricing">
					<Card
						title="Standard"
						price="3 000 €"
          info1={<p>Création du site comprenant <strong>1 à 5 articles</strong></p>}
						info2={info3}
						info3={info4}
          info4={<p>Certificat <strong>SSL</strong></p>}
					/>
					<Card
						title="Personnalisé"
						price="5 000 €"
          info1={<p>Jusqu' à <strong>20 articles</strong></p>}
						info2={info9}
						info3={info5}
						info4={info6}
						promote={true}
					/>
					<Card
						title="Premium"
						price="8 000 €"
          info1={<p>Nombres d'articles <strong>illimités</strong></p>}
						info2={info0}
          info3={<p>Design <strong>sur mesure</strong></p>}
          info4={<p>référencement <strong>Google</strong></p>}
					/>
				</div>
			</section>
			<section id="pricing">
				<h2
					id="pricing_services"
					className="pricing-title"
				>
					Autres <strong>services</strong>
				</h2>
				<p className="title">La meilleure solution en conseil informatique</p>
				<div className="pricing no-promote">
					<Card
						title="Audit de site web"
						price="80 €"
          info1={<p>Audit de votre site <strong>Wix</strong></p>}
          info2={<p>Audit de votre site <strong>Wordpress</strong></p>}
          info3={<p>Audit de votre <strong>landing page/Portfolio</strong></p>}
          info4={<p>Audit de votre site <strong>E-commerce</strong></p>}
					/>
					<Card
						title="Cours/Formation"
						price="30 €"
          info1={<p>Domaine du web <br/>(<strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, PHP, SQL, framework diverse)</p>}
          info2={<p>Algorhytmie</p>}
          info3={<p>Architecture et logiciel</p>}
          info4={<p>Abordable pour <strong>tout les niveaux</strong></p>}
					/>
					<Card
						title="Developpement spécifiques"
						price="300 €"
          info1={<p>Analysons le besoin <strong>ensemble</strong></p>}
          info2={<p>Une communication et <strong>livraison efficace</strong></p>}
						info3={<p>Taux Journalier Moyen</p>}
					/>
				</div>
			</section>
		</>
	)
}
