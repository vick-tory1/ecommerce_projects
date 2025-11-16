import React, {useEffect, useState} from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../Components/ProductCard";
import "../css/Home.css";

export default function Shop(){
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    (async()=>{
      try{
        const data = await fetchProducts(100);
        setProducts(data);
      }catch(e){ console.error(e); }
      finally{ setLoading(false); }
    })();
  },[]);

  if(loading) return <div className="home"><h2>Loading products...</h2></div>;

  return (
    <div className="home">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
