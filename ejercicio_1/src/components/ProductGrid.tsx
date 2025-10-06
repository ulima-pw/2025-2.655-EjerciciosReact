import type { Product } from "./ProductCard";
import ProductCard from "./ProductCard";

const ProductGrid = (props : ProductGridProps) => {
    return <div>
        <div className="row">
            {
                props.products.map( (producto : Product) => {
                    return <div key={ producto.id } className="col-md-3 mt-2">
                        <ProductCard product={ producto }
                            isFav={ 
                                props.favoritos.includes(producto.id) 
                            }
                            onToggle={ props.onToggleFav }/>
                    </div>
                } )
            }
        </div>
    </div>
}

interface ProductGridProps {
    products: Product[];
    favoritos: string[];
    onToggleFav: (id: string) => void;
}

export default ProductGrid