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
        {products.map((mattress) => (
          <div
            key={`${mattress.length}x${mattress.width}`}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative bg-gray-100">
              <img
                src={`/illustrations/${mattress.width}x${mattress.length}.jpg`}
                alt={`Dušek ${mattress.width}×${mattress.length}`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <div>
                <h2 className="text-lg font-medium">
                  {mattress.width} × {mattress.length} cm
                </h2>
                <p className="text-sm text-gray-500">Debljina: 20 cm (±2 cm)</p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900">
                  {mattress.price.toLocaleString()} RSD
                </span>

                <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium transition hover:bg-gray-800">
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
