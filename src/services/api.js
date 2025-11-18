

// Injected RapidAPI headers
const headers = {
  'x-rapidapi-key': '',
  'x-rapidapi-host': ''
};

// API service for ecommerce app - using DummyJSON ()
const API_BASE = "";

export async function fetchProducts(limit=100) {
  const res = await fetch(`${API_BASE}/products?limit=${limit}`);
  if (!res.ok) throw new Error("Failed fetching products");
  const data = await res.json();
  return data.products || [];
}

export async function fetchProductById(id) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed fetching product");
  return await res.json();
}
