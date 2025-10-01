const ProductCard = (props : ProductCardProps) => {
    const heartOnClick = () => {
        props.onToggle(props.product.id)
    }

    return <div className="card" style={ { width : "18rem" } }>
        <div className="card-body">
            <span className="float-end">
                <i className={ props.isFav ? "bi bi-heart-fill" : "bi bi-heart" }
                    onClick={ heartOnClick }
                ></i>
            </span>
            
            <h5 className="card-title">
                { props.product.name }
            </h5>
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
    onToggle: (id : string) => void;
}

export default ProductCard