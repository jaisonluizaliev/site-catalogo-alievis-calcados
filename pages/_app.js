import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Menu from '../components/Menu/index';
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer/index'


function MyApp({ Component, pageProps }) {
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
