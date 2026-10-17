import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { addItem } from './CartSlice.jsx';
import { products } from './products.js';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const existingItem = cartItems.find((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-details">
        <div className="product-title-row"><h3>{product.name}</h3><strong>₹{product.price}</strong></div>
        <p>{product.description}</p>
        <button
          className={existingItem ? 'button button-added' : 'button button-dark'}
          onClick={() => dispatch(addItem(product))}
          aria-label={`Add ${product.name} to cart`}
        >
          {existingItem ? `Add another (${existingItem.quantity})` : 'Add to cart'} <Plus size={16} />
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All Plants');
  const categories = useMemo(
    () => ['All Plants', ...new Set(products.map((product) => product.category))],
    []
  );
  const filteredProducts = useMemo(
    () => selectedCategory === 'All Plants'
      ? products
      : products.filter((product) => product.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <main className="page-shell shop-page">
      <section className="page-intro">
        <p className="eyebrow">THE PLANT SHOP</p>
        <h1>Find your <em>kind of green.</em></h1>
        <p>Pick a plant, make it yours, and let the growing begin.</p>
      </section>
      <div className="category-tabs" aria-label="Filter plants by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'category-tab active' : 'category-tab'}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        Showing {filteredProducts.length} plant{filteredProducts.length === 1 ? '' : 's'}
        {selectedCategory !== 'All Plants' ? ` in ${selectedCategory}` : ' across all categories'}
      </p>
      <div className="product-grid">
        {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
