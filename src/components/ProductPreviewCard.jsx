import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="m-1 pb-1 text-lg font-semibold">{product.name}</h2>
      <p className="mb-2 h-20 line-clamp-4 text-green-900 text-sm">
        {product.description}
      </p>
      <p className="mb-2 h-5 line-clamp-4 text-black ">
        Price: €{product.price}
      </p>
      <AddProduct onAddProduct={addProduct} />
    </div>
  );
};
