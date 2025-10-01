import type { Product } from "./ProductCard";
import ProductCard from "./ProductCard";

const ProductGrid = (props : ProductGridProps) => {
    const producto : Product = {
        id : "1",
        name : "Gaseosa",
        price : 3.5,
        category : "Bebidas"
    }

    return <div>
        <div className="row">
            {
                props.products.map( (producto : Product) => {
                    return <div className="col-md-3 mt-2">
                        <ProductCard product={ producto }
                            isFav={ false }
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