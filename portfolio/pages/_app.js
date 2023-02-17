import '@/styles/globals.css'
import '@/styles/global.css'
import '@/styles/header.css'
import '@/styles/1024.css'
import '@/styles/1400.css'
import '@/styles/body.css'
import '@/styles/contact.css'
import '@/styles/device.css'
import '@/styles/footer.css'
import Header from 'components/header'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}
