import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const products = [
    { length: 200, width: 180, price: 19500 },
    { length: 190, width: 180, price: 19500 },
    { length: 200, width: 160, price: 19000 },
    { length: 190, width: 160, price: 19000 },
    { length: 200, width: 140, price: 18500 },
    { length: 190, width: 140, price: 18500 },
    { length: 200, width: 120, price: 17500 },
    { length: 200, width: 90, price: 15000 },
    { length: 190, width: 90, price: 15000 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, id) => (
          <ProductCard data={product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
