import ProductCard, { type Product } from "../components/ProductCard"

const ProductsPage = () => {
    const producto : Product = {
        id : "1",
        name : "Gaseosa",
        price : 3.5,
        category : "Bebidas"
    }
    return <ProductCard product={ producto }
                isFav={ false }
                onToggle={ () => {} } />
}

export default ProductsPage