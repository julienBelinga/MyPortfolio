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
          <h2 id="pricing_vitrine" className="title">Site vitrine</h2>
          <p className="title">La meilleure solution pour commencer à augmenter votre présence en ligne</p>
          <div className="pricing">
              <Card
              title="Standard"
              price="800 €"
              info1={info7}
              info2={info3}
              info3={info4}
              />
              <Card
              title="Personnalisé"
              price="1 100 €"
              info1={info1}
              info2={info9}
              info3={info5}
              info4={info6}
              />
              <Card
              title="Premium"
              price="1 500 €"
              info1={info2}
              info2={info0}
              info3={info8}
              />
          </div>
      </section>
      <section id="pricing">
        <h2 id="pricing_Ecommerce" className="title">Site E-commerce</h2>
        <p className="title">La meilleure solution pour lancer un business en ligne</p>
        <div className="pricing">
          <Card
          title="Standard"
          price="3 000 €"
          info1={<p>Création du site comprenant <strong>1 à 5 articles</strong></p>}
          info2={info3}
          info3={info4}
          />
          <Card
          title="Personnalisé"
          price="5 000 €"
          info1={<p>Jusqu' à <strong>20 articles</strong></p>}
          info2={info9}
          info3={info5}
          info4={info6}
          />
          <Card
          title="Premium"
          price="8 000 €"
          info1={<p>Nombres d'articles <strong>illimités</strong></p>}
          info2={info0}
          info3={<p>Design <strong>sur mesure</strong></p>}
          />
        </div>
      </section>
  </>
  )
}
