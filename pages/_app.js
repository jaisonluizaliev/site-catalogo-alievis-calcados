import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/index';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
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
