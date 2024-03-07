import React from "react";

const ProductCard = ({ product, onClose }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span className="price">₹{product.price}</span>
      {/* Add more details, features, etc. based on product data */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductCard;
