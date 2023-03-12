import Image from 'next/image'
import pp_entier from 'assets/img/pp_entier.png'
import Link from 'next/link'

function Presentation(){
    return(
        <>
        <div id="presentation">
            <div>
                <div id="bg-title">Developpeur web</div>
            </div>
            <div id="info-container">
                <div id="presentation-info">
                    <div>
                        <h1>Julien BELINGA</h1> 
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div className="wrapper-txt">
                                <p className="static-txt">Je suis un</p>
                                <ul className="dynamic-txts">
                                    <li><span>Développeur Front end</span></li>
                                    <li><span>Développeur Back end</span></li>
                                    <li><span>DEVOPS</span></li>
                                    <li><span>Freelance.</span></li>
                                </ul>
                            </div>
                            <Link id="contact-button" href="/contact">Contactez moi</Link>
                        </div>
                        
                    </div>
                </div>
                <div id="profil">
                    <div id="profile-mobile-bg"></div>
                    <Image id="pp" src={pp_entier} alt="photo de profil" priority/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Presentation