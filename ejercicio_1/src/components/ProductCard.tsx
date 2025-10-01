const ProductCard = (props : ProductCardProps) => {
    return <div className="card" style={ { width : "18rem" } }>
        <div className="card-body">
            <h5 className="card-title">{ props.product.name }</h5>
            <p className="card-text">
                Precio: { props.product.price }
            </p>
            <p className="card-text">
                Categoría: { props.product.category }
            </p>
        </div>
    </div>
}

export type Product = { 
    id: string; 
    name: string; 
    price: number; 
    category: string 
};

interface ProductCardProps {
    product: Product;
    isFav: boolean;
    onToggle: () => void;
}

export default ProductCard