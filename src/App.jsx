import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainerComponent from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <ItemListContainerComponent greeting={"Bienvenido a la tienda ideal para tu mascota"}/>
    </>
  );
}

export default App;