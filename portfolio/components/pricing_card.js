import Image from 'next/image'
import React from 'react'
import check from 'assets/img/checkmark.png'

export default function pricing_card(props) {
  return (
    <>
        <div id="vitrine">
            <div>
                <p className="popular"><strong>POPULAIRE</strong></p>
                <h3>{props.title}</h3>
                <p>à partir de<br/>
                <strong>{props.price}</strong></p>
                <hr/>
            </div>
            <ul>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    <p>{props.info1}</p>
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    <p>{props.info2}</p>
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    <p>{props.info3}</p>
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    <p>{props.info4}</p>
                </li>
            </ul>
            <div id="button-container">
                <button>Commander</button>
                <button>Demander un devis</button>
            </div>
        </div>
    </>
  )
}
