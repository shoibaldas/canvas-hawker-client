import NavBar from '../components/Shared/NavBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <NavBar></NavBar>
  <Component {...pageProps} />
  </>
 );
  
}
