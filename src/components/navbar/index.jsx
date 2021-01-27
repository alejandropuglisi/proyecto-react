import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css';

const NavbarComponent = () => {
  return (
    <>
        <Navbar variant="dark">
            <img className="logo" src="/images/logo.png" alt="Logo"/>
            <Nav className="mr-auto dropdown">
                <button type="button" class="btn hover">Inicio</button>
                <button type="button" class="btn dropdown-toggle hover" data-toggle="dropdown" data-hover="dropdown">Productos</button>
                <button type="button" class="btn dropdown-toggle hover active" data-toggle="dropdown">Salud</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                    <button type="button" class="btn hover">Adiestramiento</button>
            </Nav>
            <img className="pata" src="/images/pata.png" alt="pata"/>
            <Form inline>
                <FormControl type="text" placeholder="Búsqueda" className="mr-sm-2" />
                <Button id="search-button">Buscar</Button>
            </Form>
        </Navbar>
    </>
  );
};

export default NavbarComponent;