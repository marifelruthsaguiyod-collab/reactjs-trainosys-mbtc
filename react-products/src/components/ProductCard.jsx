import './ProductCard.styles.css'

const ProductCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />

            <h3>{props.name}</h3>

            <p>{props.price}</p>
                
            <button onClick={() => alert(props.name + " added to cart!")}>
                    Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;