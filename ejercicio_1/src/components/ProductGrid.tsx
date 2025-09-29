import type { Product } from "./ProductCard";

const ProductGrid = (props : ProductGridProps) => {

}

interface ProductGridProps {
    products: Product[];
    favoritos: string[];
    onToggleFav: (id: string) => void;
}

export default ProductGrid