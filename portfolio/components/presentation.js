import Image from 'next/image'
import pp_entier from 'assets/img/pp_entier.png'

function Presentation(){
    return(
        <>
            <div id="mid-header">
                <div id="profil" className="mobil">
                    <div id="profile-mobile-bg"></div>
                    <Image id="pp" src={pp_entier} alt="photo de profil"/>
                </div>
                <div className="desktop">
                    <div id="bg-title">Developpeur web</div>
                </div>
                <div id="desktop-header">
                    <div id="div">
                        <h1>Julien BELINGA</h1> 
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div className="wrapper">
                                <p className="static-txt">Je suis un</p>
                                <ul className="dynamic-txts">
                                    <li><span>Développeur Front end</span></li>
                                    <li><span>Développeur Back end</span></li>
                                    <li><span>DEVOPS</span></li>
                                    <li><span>Freelance.</span></li>
                                </ul>
                            </div>
                            <a id="contact-button" href="/contact">Contactez moi</a>
                        </div>
                        
                    </div>
                    <Image className="desktop" src={pp_entier} alt="photo de profil"/>
                </div>
            </div>
        </>
    )
}

export default Presentation