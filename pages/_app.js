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
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name='description' content="Calçados Alievi's" />
        <meta name="author" content="Jaison Alievi"/>
        <meta name="keywords" content="calçados, calçados femininos, calçados venda, saltos,"/>
        <meta name="generator" content="Nextjs,react" />
        <meta name="application-name" content="Site Alievi Calçados" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Alievi's Calçados | Voce é quem Decide</title>
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
