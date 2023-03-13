import Link from 'next/link'
import React from 'react'

export default function MentionsLegales() {
  return (
    <section>
        <h1>Qui sommes nous ?</h1>
        <p>L'adresse me mon site est: julien-belinga.fr</p>
        <h1>Droit d'auteur</h1>
        <p>L’ensemble de ce site est soumis à une protection de droits d’auteur selon les Articles L335-2 et suivants du Code de la propriété intellectuelle. Toute reproduction ou représentation totale ou partielle de son contenu, images, textes, sons, par quelque procédé utilisé, sans l’autorisation préalable de la société "EN COURS" est strictement interdite. Toute violation constituera une sanction et fera l’objet de poursuite.</p>
        <h1>Site Internet</h1>
        <h2>Création :</h2>
        <p>en cours</p>
        <h2>Hébergement: </h2>
        <p>VERCEL</p>
        <p>Vercel Inc.<br/>340 S Lemon Ave #4133<br/>Walnut, CA 91789</p>
        <p><Link href="https://vercel.com" target="_blank">https://vercel.com</Link></p>
    </section>
  )
}
