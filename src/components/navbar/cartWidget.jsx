import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const CartWidgetComponent = () => {
    return (
      <>
        <Button className="cart hover">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </Button>
      </>
    );
  }
  
export default CartWidgetComponent;