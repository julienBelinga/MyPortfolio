import Image from 'next/image'
import React from 'react'
import check from 'assets/img/checkmark.png'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function pricing_card(props) {


	return (
		<>
			<div
				id="vitrine"
				className={`${props.promote && "promote"}`}
			>
				<div className="header-container">
					<p className="popular">
						<strong>POPULAIRE</strong>
					</p>
					<h3>{props.title}</h3>
                <p>à partir de<br/>
                <strong>{props.price}</strong></p>
                <hr/>
				</div>
				<ul>
					<li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info1}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info2}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
                    {props.info3}
                </li>
                <li>
                    <Image src={check} width={20} alt="checkmark png"/>
						{props.info4}
					</li>
				</ul>
				<div id="button-container">
                <Link className='button' href="/contact"><button>Demander un devis</button></Link>
				</div>
			</div>
		</>
	)
}
