import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainerComponent from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <ItemListContainerComponent greeting={"Agregar al carrito"}/>
    </>
  );
}

export default App;