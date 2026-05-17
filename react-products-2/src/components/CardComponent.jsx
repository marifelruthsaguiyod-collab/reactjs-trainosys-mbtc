import { useState } from "react";

const CardComponent = () => {
    
    const [sortType, setSortType] = useState("");

    const productsInfo = [
        {
            id: 1,
            name: 'Basic Tee',
            price: '35',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000',
            available: true,
        },
        {
            id: 2,
            name: 'Basic White Tee',
            price: '35',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000',
            available: true,
        },
        {
            id: 3,
            name: 'Basic Charcoal Tee',
            price: '89',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000',
            available: false,
        },
        {
            id: 4,
            name: 'Artwork Dots Tee',
            price: '45',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000',
            available: true,
        },
    ];  

    return (
        <div className="container">
            <h1>Products</h1>

            <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
            }}
            > 
            <div className="product-grid">
                {productsInfo.map(product => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.name} width={'100'} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.available ? "Available" : "Out of Stock"}</p>
                        <div style={{
                            marginTop: 'auto',
                            display: 'flex',
                            justifyContent: 'flex-end'}}
                        >
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default CardComponent;