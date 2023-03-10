import '@/styles/global.css'
import '@/styles/navbar.scss'
import '@/styles/presentation.scss'
import '@/styles/skills.scss'
import '@/styles/project.scss'
import '@/styles/device.scss'
import '@/styles/footer.scss'
import Navbar from '@/components/navbar'
import Footer from 'components/footer'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
