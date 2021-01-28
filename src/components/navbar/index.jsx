import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button} from 'react-bootstrap';
import './navbar.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useState } from 'react';
import CartWidgetComponent from './cartWidget';

const NavbarComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen (prevState => !prevState);
 
  return (
    <>
        <Navbar>
            <img className="logo" src="/images/logo.png" alt="Logo"/>
            <Button className="text-nowrap hover">Inicio</Button>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className="hover">Productos</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Perros</DropdownItem>
                    <DropdownItem>Link 1</DropdownItem> 
                    <DropdownItem>Link 1</DropdownItem>
                    <DropdownItem>Link 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Gatos</DropdownItem>
                    <DropdownItem>Link 1</DropdownItem> 
                    <DropdownItem>Link 1</DropdownItem>
                    <DropdownItem>Link 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret className="hover">Salud</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Link 1</DropdownItem> 
                    <DropdownItem>Link 1</DropdownItem>
                    <DropdownItem>Link 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Button type="button" className="hover">Adiestramiento</Button>
            <img className="pata" src="/images/pata.png" alt="pata"/>
            <Form inline>
                <FormControl type="text" placeholder="Búsqueda" className="mr-sm-2" />
                <Button id="search-button">Buscar</Button>
            </Form>
            <CartWidgetComponent />
        </Navbar>
    </>
  );
};

export default NavbarComponent;