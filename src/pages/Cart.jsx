import React from "react";
import { useCart } from "../contexts/CartContext";
import "../css/Cart.css";

export default function Cart(){
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 id="cart-h1" style={{ textAlign: "center", color: "green", fontSize: 55, marginTop: "16px", marginBottom: "12px", paddingTop: "8px", paddingBottom: "8px" }}>Your Cart</h1>
      <button onClick={clearCart} id="clear-cart" style={{ backgroundColor: "green", color: "white", padding: "8px 12px", borderRadius: "8px", fontSize: "1rem", cursor: "pointer", marginBottom: "16px", textAlign: "center"}}>Clear Cart</button>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item" style={{display:'flex',gap:12,marginBottom:12}}>
            <img src={item.thumbnail || (item.images && item.images[0])} alt={item.title} style={{width:100,height:100,objectFit:'cover'}} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price} × 
                <input type="number" value={item.quantity} min="1" onChange={(e)=> updateQuantity(item.id, Number(e.target.value))} style={{width:60,marginLeft:8}} />
              </p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
