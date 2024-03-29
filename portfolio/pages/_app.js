import '@/styles/global.scss'
import '@/styles/navbar.scss'
import '@/styles/presentation.scss'
import '@/styles/skills.scss'
import '@/styles/project.scss'
import '@/styles/device.scss'
import '@/styles/pricing_multiple.scss'
import '@/styles/contact.scss'
import '@/styles/mentions-legales.scss'
import '@/styles/responsive.scss'
import '@/styles/footer.scss'
import Navbar from '@/components/navbar'
import Footer from 'components/footer'
import { Analytics } from '@vercel/analytics/react';
import "../i18n"

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <Analytics />
    </>
  )
}
