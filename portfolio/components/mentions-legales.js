import Link from 'next/link'
import React from 'react'

export default function MentionsLegales() {
  return (
    <section>
        <h1>Qui sommes nous ?</h1>
        <p>L'adresse me mon site est: julien-belinga.fr</p>
        <h1>Droit d'auteur</h1>
        <p>L’ensemble de ce site est soumis à une protection de droits d’auteur selon les Articles L335-2 et suivants du Code de la propriété intellectuelle. Toute reproduction ou représentation totale ou partielle de son contenu, images, textes, sons, par quelque procédé utilisé, sans l’autorisation préalable de la société "Julien Victor Belinga EI" est strictement interdite. Toute violation constituera une sanction et fera l’objet de poursuite.</p>
        <h1>Site Internet</h1>
        <h2>Création :</h2>
        <p>Création de thème personnalisé, d’image de marque, référencement, et hébergement de tout, prestation ‘clé en main’.<br/>
        Julien Victor Belinga EI<br/>
        SIRET : 950 698 001 00019<br/>
        30 rue Alphonse Daudet<br/>
        44 000 Nantes<br/>
        Tel : 06 45 20 54 90<br/>
        <Link href="https://julien-belinga.fr/">https://julien-belinga.fr/</Link></p>
        <h2>Hébergement: </h2>
        <p>VERCEL</p>
        <p>Vercel Inc.<br/>340 S Lemon Ave #4133<br/>Walnut, CA 91789</p>
        <p><Link href="https://vercel.com" target="_blank">https://vercel.com</Link></p>
    </section>
  )
}
