import '@/styles/global.css'
import '@/styles/navbar.scss'
import '@/styles/presentation.scss'
import '@/styles/skills.scss'
import '@/styles/project.scss'
import '@/styles/device.scss'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
