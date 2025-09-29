import type { Product } from "./ProductCard";

const ProductGrid = (props : ProductGridProps) => {

}

interface ProductGridProps {
    products: Product[];
    favoritos: Set<string>;
    onToggleFav: (id: string) => void;
}

export default ProductGrid