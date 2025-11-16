import React from "react";
import "../css/ProductCard.css";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({product}) {
  const { addToCart } = useCart();
  if(!product) return null;
  return (
    <div className="product-card">
      <img src={product.thumbnail || (product.images && product.images[0])} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="desc">{product.description && product.description.slice(0,120)}...</p>
        <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
