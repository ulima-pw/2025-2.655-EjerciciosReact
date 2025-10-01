import ProductCard, { type Product } from "../components/ProductCard"
import ProductGrid from "../components/ProductGrid"

const ProductsPage = () => {
    const producto : Product = {
        id : "1",
        name : "Gaseosa",
        price : 3.5,
        category : "Bebidas"
    }

    const marcarComoFavorito = (id : string) => {
        console.log(`Se marco como favorito: ${id}`)
    }

    return <ProductGrid favoritos={[]}
                products={ [] }
                onToggleFav={ marcarComoFavorito } />
}

export default ProductsPage