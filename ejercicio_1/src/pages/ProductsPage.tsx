import ProductCard, { type Product } from "../components/ProductCard"

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

    return <ProductCard product={ producto }
                isFav={ true }
                onToggle={ marcarComoFavorito } />
}

export default ProductsPage