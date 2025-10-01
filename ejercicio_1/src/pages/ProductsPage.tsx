import { useState } from "react"
import ProductCard, { type Product } from "../components/ProductCard"
import ProductGrid from "../components/ProductGrid"

const ProductsPage = () => {
    const [listaFavoritos, setListaFavoritos] = useState<string[]>([])

    const productos : Product[] = [
        {
            id : "1",
            name : "Gaseosa",
            price : 3.5,
            category : "Bebidas"
        },
        {
            id : "2",
            name : "Cafe",
            price : 2.5,
            category : "Bebidas"
        },
        {
            id : "5",
            name : "Galleta",
            price : 2.5,
            category : "Golosinas"
        }
    ] 

    const marcarComoFavorito = (id : string) => {
        if (listaFavoritos.includes(id))
        {
            // id ya es favorito
            setListaFavoritos(
                [... listaFavoritos.filter( (fav) => { return fav != id } )]
            )
        }else {
            listaFavoritos.push(id)
            setListaFavoritos([... listaFavoritos])
        }
        
        console.log(`Se marco como favorito: ${id}`)
    }

    return <ProductGrid favoritos={ listaFavoritos }
                products={ productos }
                onToggleFav={ marcarComoFavorito } />
}

export default ProductsPage