import { products } from "./product";
import ProductCard from "./ProductCard";

export default function Cart() {
  const handleBuy = (product) => {
    alert(`You clicked Buy Now for ${product.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Featured <span className="text-red-600">Products</span>
      </h1>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={handleBuy} />
          ))}
        </div>
      </div>
    </div>
  );
}
