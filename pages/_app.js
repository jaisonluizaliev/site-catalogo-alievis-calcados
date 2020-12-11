import Menu from '../components/Menu/index';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container fluid>
        <Menu />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
