const ProductCard = (props : ProductCardProps) => {
    return <div className="card" style="width: 18rem;">
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
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