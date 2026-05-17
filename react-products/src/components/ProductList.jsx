import ProductCard from "./ProductCard"

const ProductList = () => {

    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            price: '4800',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000'
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            price: '3500',
            image: 'https://www.magnific.com/free-vector/tumbler-cup-mockup-collection_411963730.htm#fromView=keyword&page=1&position=1&uuid=350f8842-a57b-43e8-a4db-462a9fbef1b2&query=Tumbler+mug'
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            price: '8900',
            image: 'https://m.media-amazon.com/images/I/51KwlyklP+L._AC_SX679_.jpg'
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            price: '3500',
            image: 'https://www.freeimages.com/vector/mechanical-pencil-vector-5386579'
        },
        {
            id: 5,
            name: 'Focus Card Tray',
            price: '6400',
            image: 'https://nestasia.in/cdn/shop/files/earthen-clay-handcrafted-water-bottle-850ml.jpg?v=1724065545&width=2000'
        },
        {
            id: 6,
            name: 'Focus Multi-Pack',
            price: '3900',
            image: 'https://chinaplasticpallet.en.made-in-china.com/product/AwWaHfndHSYV/China-Factory-Directly-Sale-Plastic-Moving-Box-600X400X360mm.html'
        },
        {
            id: 7,
            name: 'Brass Scissors',
            price: '5000',
            image: 'https://dimensiva.com/3dmodels/scissors-brass-by-hay/'
        },
        {
            id: 8,
            name: 'Focus Carry Pouch',
            price: '3200',
            image: 'https://tomtoc.com.ph/products/tomtoc-travel-cable-waterproof-organizer-pouch-electronics-accessories-carry-case-black'
        },
    ];  

    return (
        <div className="container">
            <h1>Products</h1>

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;