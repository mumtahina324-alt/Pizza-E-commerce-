import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-3">
        Featured <span className="text-red-600">Products</span>
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor..
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
