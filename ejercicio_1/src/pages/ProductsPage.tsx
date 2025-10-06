import { useState } from "react"
import ProductCard, { type Product } from "../components/ProductCard"
import ProductGrid from "../components/ProductGrid"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

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

const ProductsPage = () => {
    const [listaFavoritos, setListaFavoritos] = useState<string[]>([])
    const [textoFiltro, setTextoFiltro] = useState<string>("")
    const [listaProductos, setListaProductos] = useState<Product[]>(productos)

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

    return <div className="container">
        <Header totalFavoritos={ listaFavoritos.length } />
        <SearchBar value={ textoFiltro } 
            onChange={ (value : string) => {
                if (value == "") {
                    setListaProductos(productos)
                    setTextoFiltro(value)
                    return
                }

                // Filtrar la lista
                const tempLista = productos.filter( (prod : Product) => {
                    return prod.name == value
                } )
                setListaProductos(tempLista)
                setTextoFiltro(value)
            } }/>
        <ProductGrid favoritos={ listaFavoritos }
                products={ listaProductos }
                onToggleFav={ marcarComoFavorito } />
    </div>
}

export default ProductsPage