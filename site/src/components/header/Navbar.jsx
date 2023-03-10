import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import astronauta from '../../assets/astronautas/astronauta.png'
import styles from './styles.css'
import Logo from '../../assets/astronautas/logo.ico'


function Menu() {
  return (
    <Navbar className='container-navbar' expand="lg">
      <Container >
        <Navbar.Brand className='container-brand' to ="/"> <img src={Logo} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="direcoes me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/sobre"><Nav.Link>Sobre</Nav.Link></LinkContainer>
            <LinkContainer to="/contato"><Nav.Link>Contato</Nav.Link></LinkContainer>
            <LinkContainer to="/produtos"><Nav.Link>Produtos</Nav.Link></LinkContainer>

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <div className='box-login'>
            <div className='text-login'>
            <h5>Bem vindo, Terráqueo!</h5>
          </div>
            <img src={astronauta} />
          </div>
        {/* <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer> */}
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}


export default Menu;