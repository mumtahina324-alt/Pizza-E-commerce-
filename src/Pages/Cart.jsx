import { products } from "./product";
import ProductCard from "./ProductCard";

export default function Cart() {
  const handleBuy = (product) => {
    alert(`You clicked Buy Now for ${product.name}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
        Featured <span className="text-red-600">Products</span>
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          justify-items-center
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={handleBuy} />
        ))}
      </div>
    </section>
  );
}
