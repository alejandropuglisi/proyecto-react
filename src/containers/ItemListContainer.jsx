import ItemCountComponent from "./ItemCount";

const ItemListContainerComponent = ({greeting}) => {
    return (
        <>
            <ItemCountComponent initial="0"/>
            <div className="container-count">
                <button className="addToCart">{greeting}</button>
            </div>
        </>
    )
}

export default ItemListContainerComponent;