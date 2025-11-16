import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home(){
  return (
    <div className="home" style={{padding:16}}>
      <h1>Welcome to Tory Adams Wears</h1>
      <p style={{marginTop:18}}>Your curated online boutique. Discover our latest arrivals and best sellers.</p>
      <div style={{marginTop:12}}>
        <Link to="/shop"><button>Visit Shop</button></Link>
        <Link to="/categories" style={{marginLeft:8}}><button>Browse Categories</button></Link>
      </div>
    </div>
  )
}
