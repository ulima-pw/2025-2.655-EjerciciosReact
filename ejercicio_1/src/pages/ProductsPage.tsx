import { useEffect, useState } from "react"
import { type Product } from "../components/ProductCard"
import ProductGrid from "../components/ProductGrid"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"


const ProductsPage = () => {
    const [listaFavoritos, setListaFavoritos] = useState<string[]>([])
    const [textoFiltro, setTextoFiltro] = useState<string>("")
    const [listaProductos, setListaProductos] = useState<Product[]>([])

    const obtenerProductosHTTP = async () => {
        const resp = await fetch("https://script.google.com/macros/s/AKfycbxuwK4K1JEF-sIUISyVfQboepZNe57jk8tPZgcH3LuCRdjdnYZMjv_uVEXIeYeYdXngyQ/exec?entity=productos")
        const data = await resp.json()
        setListaProductos(data)
    }

    useEffect(() => {
        obtenerProductosHTTP()
    }, [])

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
            onChange={ async (value : string) => {
                if (value == "") {
                    await obtenerProductosHTTP()
                    //setListaProductos(listaProductos)
                    setTextoFiltro(value)
                    return
                }

                // Filtrar la lista
                const re = new RegExp(`${value}`)
                const tempLista = listaProductos.filter( (prod : Product) => {
                    return re.test(prod.name)
                    //return prod.name == value
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