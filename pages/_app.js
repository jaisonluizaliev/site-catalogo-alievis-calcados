import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Menu from '../components/Menu/index';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer/index'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <Head>
        <title>Alievi's Calçados</title>
      </Head>
      <Container fluid>
        <header>
          <Menu />
        </header>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </>
  );
}

export default MyApp;
