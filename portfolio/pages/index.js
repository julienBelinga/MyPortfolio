import Presentation from 'components/presentation'
import Skills from 'components/skills'
import ProjectR from 'components/project_right'
import ProjectL from 'components/project_left'
import Footer from 'components/footer'

export default function Home() {

  const description_einden = <p>J'ai passé un peu plus d'un an au sein d'EIDEN en tant que développeur web où j'ai eu l'occasion de travailler sur plus d'une trentaine de projets.
  Mes missions consistaient à réaliser des sites web responsive connecté au logiciel EPHOTODAM via une API. J'ai également eu l'occasion de développer quelques petites features, 
  participer à la conception de certains modules et sites. J'ai aussi travaillé sur la scalabilité d'un modèle de site web.<br/><br/>
  Les technologies que j'ai utilisé sont PHP, Javascript, HTML, CSS et XML en respectant une méthode AJAX.</p>

  const description_portfolio = <p>Pour ce projet, il s'agit simplement de mon Portfolio, c'est le site sur lequel vous vous trouvez actuellement.<br/><br/>
  Les technologies utilisées pour ce projet sont : HTML, CSS, Javascript tout en respectant une approche "mobile-first".
  J'ai également mis en place un déploiement continu depuis un dépôt Github.</p>

  const description_getTouchdown = <p>Pour ce projet, il s'agit de la landing-page e-commerce de get-touchdown, pour leur landing page j'ai réalisé quelque chose de très "catchy" avec des effets attirants l'oeil,
  quelque chose de créatif et original.<br/><br/>
  Le framework Next.js à été utilisé pour ce projet, ce dernier est héberger sur Vercel une intégration continue et un déploiement continue on été mis en place (CI/CD). J'ai également lié le site à Stripe (un module de paiement).</p>

  return (
    <>
      <Presentation/>
      <Skills/>
      <ProjectR
        title="Einden"
        description={description_einden}
        img1='/assets/img/einden_phone_screen.png'
        img2='/assets/img/einden_laptop_screen.png'
        legend="Les images présenter ici sont tirer du site d'EINDEN et non des mes réalisations, car ces dernières appartiennent à l'entreprise. Je ne peut donc pas les montrer pour des raisons de confidentialité."
      />
      <ProjectL
        title="Portfolio"
        description= {description_portfolio}
        img1='/assets/img/project_phone_screen.png'
        img2='/assets/img/project_desktop_screen.png'
      />
      <ProjectR
        title="get-touchdown"
        description={description_getTouchdown}
        img1='/assets/img/touchdown_phone_screen.png'
        img2='/assets/img/touchdown_laptop_screen.png'
      />
    </>
  )
}
