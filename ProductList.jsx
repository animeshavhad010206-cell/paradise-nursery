import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { addItem } from './CartSlice.jsx';
import { products } from './products.js';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const inCart = items.find((item) => item.id === product.id);
  return (
    <article className="product-card">
      <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-category">{product.category}</span></div>
      <div className="product-details"><div className="product-title-row"><h3>{product.name}</h3><strong>₹{product.price}</strong></div><p>{product.description}</p><button className={inCart ? 'button button-added' : 'button button-dark'} onClick={() => dispatch(addItem(product))}>{inCart ? `Add another (${inCart.quantity})` : 'Add to cart'} <Plus size={16} /></button></div>
    </article>
  );
}

function ProductList() {
  const [category, setCategory] = useState('All Plants');
  const categories = ['All Plants', ...new Set(products.map((p) => p.category))];
  const filtered = category === 'All Plants' ? products : products.filter((p) => p.category === category);
  return (
    <main className="page-shell shop-page">
      <section className="page-intro"><p className="eyebrow">THE PLANT SHOP</p><h1>Find your <em>kind of green.</em></h1><p>Pick a plant, make it yours, and let the growing begin.</p></section>
      <div className="category-tabs">{categories.map((c) => <button key={c} className={category === c ? 'category-tab active' : 'category-tab'} onClick={() => setCategory(c)}>{c}</button>)}</div>
      <p className="result-count">{filtered.length} plants to fall for</p>
      <div className="product-grid">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </main>
  );
}


export default ProductList;
