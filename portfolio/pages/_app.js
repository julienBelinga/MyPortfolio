import '@/styles/navbar.css'
import '@/styles/presentation.css'
import '@/styles/global.css'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
