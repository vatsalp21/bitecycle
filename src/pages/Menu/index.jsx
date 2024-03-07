import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice";
import Modal from "../../components/Modal";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-green-200 min-h-lvh">
      <center>
        <h1 className="text-2xl font-bold my-2 py-3 text-yellow-900">
          Menu Page
        </h1>
      </center>
      <div className="container mx-auto px-4">
        {products.status === "pending" ? (
          <div>Loading...</div>
        ) : (
          <center>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  ">
              {products.products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-lg cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt="product-images"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-500">{product.description}</p>
                    <p className="text-green-600 font-bold py-1">
                      Price: €{product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </center>
        )}
        {selectedProduct && (
          <Modal onClose={handleCloseModal}>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
              <p className="text-gray-500">{selectedProduct.description}</p>
              <p className="text-green-600 font-bold">
                €{selectedProduct.price}
              </p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Menu;
