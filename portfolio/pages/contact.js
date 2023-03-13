import React from "react"
import { default as ContactComp } from "components/contact"
import PageHead from "@/components/head"

export default function Contact() {
	return (
		<>
			<PageHead title="Contact" description="Page de contact du Portfolio de Julien Belinga, développeur web freelance Nantais." />
			<ContactComp />
		</>
	)
}
