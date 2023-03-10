import Image from 'next/image'
import React from 'react'
import logo from 'assets/img/codelogo.png'

export default function skills() {
  return (
    <>
        <div id="skills-presentation">
            <h3>Qui suis-je ?</h3>
            <p>Je suis un développeur Front-end spécialisé dans le développement web. Je sais m'adapter à vos besoins en mettant en place certaines méthodes tels que
                le "mobile-first" afin de vous fournir un site responsive répondant parfaitement à vos besoins. Je mettrais mes compétences de DEVOPS à votre service pour mettre en place de
                l'intégration continue et du déploiement continu.<br/>
            </p>
            <h3>L'approche "mobile-first" ?</h3>
            <p>
                Environ 80% des personnes qui consulteront votre site web le feront depuis un smartphone et avec des taux de conversion mobiles en hausse de 63 % par rapport aux taux de conversion moyens des ordinateurs de bureau, et que 35% des achats en ligne se font désormais via les supports mobiles,
                une stratégie mobile-first peut conduire à davantage de profits pour votre entreprise.<br/> C'est la raison pour laquelle il est important de ne pas négliger le rendu mobile,
                c'est sur ce constat sur lequel repose l'approche mobile-first. Il s'agira donc de commencer la conception par la vue mobile.
            </p>
        </div>
        <article id="skills-skill">
            <Image src={logo} alt="logo"/>
            <h2>Front-end développeur</h2>
            <div class="left">
                <h4>Skills</h4>
                <p>PHP, Javascript, HTML & CSS, SQL, UX, UI, AJAX, XML</p>
                <h4>Soft Skills</h4>
                <p>travail d’équipe, créativité, flexible, pédagogue </p>
                <h4>Tools</h4>
                <p>Visual Studio Code / IntelIJ, Wamp, PHPMyAdmin, Github, Terminal, Figma</p>
            </div>
        </article>
    </>
  )
}
