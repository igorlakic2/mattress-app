const ProductCard = ({
  data,
}: {
  data: { length: number; width: number; price: number };
}) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("sr-RS", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative bg-gray-100">
        <img
          src={`/illustrations/${data.width}x${data.length}.jpg`}
          alt={`Dušek ${data.width}×${data.length}`}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h2 className="text-lg font-medium">
            {data.width} × {data.length} cm
          </h2>
          <p className="text-sm text-gray-500">Debljina: 20 cm (±2 cm)</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">
            {formatPrice(data.price)} RSD
          </span>

          <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium transition hover:bg-gray-800">
            Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
