import React from 'react'
import Card from 'components/pricing_card'

export default function pricing_multiple() {
  return (
    <div id="pricing_vitrine">
        <h2 className="title">Site vitrine</h2>
        <p className="title">Meilleur solution pour...</p>
        <div className="pricing_vitrine">
            <Card
            title="Standard"
            price="800 €"
            info1="infos"
            info2="infos"
            info3="infos"
            />
            <Card
            title="Personnalisé"
            price="1 050 €"
            info1="infos"
            info2="infos"
            info3="infos"
            />
            <Card
            title="Premium"
            price="1 500 €"
            info1="infos"
            info2="infos"
            info3="infos"
            />
        </div>
    </div>
  )
}
