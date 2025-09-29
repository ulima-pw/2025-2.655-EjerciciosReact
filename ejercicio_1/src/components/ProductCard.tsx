const ProductCard = (props : ProductCardProps) => {

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