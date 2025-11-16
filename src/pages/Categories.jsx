import React, {useEffect, useState} from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../Components/ProductCard";
import "../css/Home.css";

export default function Categories(){
  const [products,setProducts] = useState([]);
  const [cats,setCats] = useState([]);
  const [selected,setSelected] = useState("all");
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    (async()=>{
      try{
        const data = await fetchProducts(100);
        setProducts(data);
        const uniq = Array.from(new Set(data.map(p=>p.category))).sort();
        setCats(uniq);
      }catch(e){
        console.error(e);
      }finally{ setLoading(false); }
    })();
  },[]);

  const filtered = selected === "all" ? products : products.filter(p=>p.category===selected);

  if(loading) return <div className="home"><h2>Loading categories...</h2></div>;

  return (
    <div className="home">
      <h1 style={{ 
  textAlign: "center", 
  color: "green", 
  fontSize: 55, 
  marginTop: "16px", 
  marginBottom: "12px", 
  paddingTop: "8px",
  paddingBottom: "8px" 
}}>Categories</h1>
      <div style={{marginBottom:12}}>
        <button onClick={()=>setSelected("all")}>All</button>
        {cats.map(c=><button key={c} onClick={()=>setSelected(c)} style={{marginLeft:5, marginBottom:5}}>{c}</button>)}
      </div>
      <div className="product-grid">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
