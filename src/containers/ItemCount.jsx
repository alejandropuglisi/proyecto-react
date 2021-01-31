import { useState } from 'react';
import './containers.css';

const ItemCountComponent = () => {
    const [count, setCount] = useState (0)

    return (
        <>
            <div className="container-count">
                <button className="buttonAdd" onClick={() => setCount(count - 1)}>
                {console.log(count)}
                -
                </button>
                <p className="counter">{count}</p>
                <button className="buttonAdd" onClick={() => setCount(count + 1)}>
                {console.log(count)}
                +
                </button>
            </div>
        </>
    )
}

export default ItemCountComponent;