import React from "react";
import "../css/ProductCard.css";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({product}) {
  const { addToCart } = useCart();
  if(!product) return null;
  const description = product.description?.trim() ?? "";
  const shortDescription = description.length > 120
    ? `${description.slice(0, 120).trimEnd()}...`
    : description;

  return (
    <div className="product-card">
      <img src={product.thumbnail || (product.images && product.images[0])} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="desc">{shortDescription || "No description available."}</p>
        <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}
