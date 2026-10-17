import { useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Leaf, ShoppingBag, ArrowRight, Plus, Minus, Trash2, Sprout, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity, clearCart } from './CartSlice.jsx';
import { products } from './products.js';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Header() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark"><Leaf size={22} /></span><span>paradise<span className="brand-light">nursery</span></span></Link>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop Plants</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}><ShoppingBag size={17} /> Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">A LITTLE NATURE GOES A LONG WAY</p>
          <h1>Grow your own<br /><em>paradise.</em></h1>
          <p className="hero-copy">Bring home beautiful plants, breathe a little deeper, and make every corner feel alive.</p>
          <button className="button button-light" onClick={() => navigate('/products')}>Get Started <ArrowRight size={18} /></button>
          <div className="hero-note"><Sprout size={17} /> Find your next favourite green friend</div>
        </div>
        <div className="hero-stamp"><span>GROW</span><Leaf size={24} /><span>WITH LOVE</span></div>
      </section>
      <section className="benefits page-shell">
        <div><span className="benefit-icon"><Leaf /></span><div><h3>Plants with personality</h3><p>Find the right green for your space.</p></div></div>
        <div><span className="benefit-icon"><Sprout /></span><div><h3>Easy-care favourites</h3><p>Greenery that fits real life.</p></div></div>
        <div><span className="benefit-icon"><HeartIcon /></span><div><h3>Made for happy homes</h3><p>A little more calm, every day.</p></div></div>
      </section>
      <section className="featured page-shell">
        <div className="section-heading"><div><p className="eyebrow">A GOOD PLACE TO START</p><h2>Meet your new <em>green friends.</em></h2></div><Link to="/products" className="text-link">Shop all plants <ArrowRight size={16} /></Link></div>
        <div className="product-grid home-products">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </main>
  );
}
function HeartIcon() { return <Leaf />; }

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

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  if (items.length === 0) return <main className="page-shell empty-cart"><span className="empty-icon"><ShoppingBag size={32} /></span><p className="eyebrow">YOUR CART</p><h1>It's looking a little <em>green-free.</em></h1><p>Your next favourite plant is waiting to come home.</p><button className="button button-dark" onClick={() => navigate('/products')}>Explore plants <ArrowRight size={17} /></button></main>;
  return (
    <main className="page-shell cart-page">
      <section className="page-intro cart-intro"><p className="eyebrow">YOUR LITTLE FOREST</p><h1>Your shopping <em>cart.</em></h1><p>{items.reduce((sum, item) => sum + item.quantity, 0)} lovely plant(s) selected</p></section>
      <div className="cart-layout"><section className="cart-items">{items.map((item) => <CartItem key={item.id} item={item} />)}<button className="text-link continue-link" onClick={() => navigate('/products')}>← Continue shopping</button></section>
      <aside className="order-summary"><p className="eyebrow">ORDER SUMMARY</p><div className="summary-row"><span>Subtotal</span><strong>₹{subtotal}</strong></div><div className="summary-row"><span>Delivery</span><span className="free-label">FREE</span></div><div className="summary-row total-row"><span>Total</span><strong>₹{subtotal}</strong></div><p className="summary-note">Plants are happier when they travel free. Delivery is on us.</p><button className="button button-dark full-button" onClick={() => window.alert('Thank you! Checkout demo completed.')}>Proceed to checkout <ArrowRight size={17} /></button><button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button></aside></div>
    </main>
  );
}

function Footer() {
  return <footer className="site-footer"><Link to="/" className="brand footer-brand"><span className="brand-mark"><Leaf size={20} /></span><span>paradise<span className="brand-light">nursery</span></span></Link><p>Grow a little joy, one plant at a time.</p><span className="copyright">© {new Date().getFullYear()} Paradise Nursery</span></footer>;
}

export default function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/products" element={<ProductList />} /><Route path="/about" element={<AboutUs />} /><Route path="/cart" element={<CartPage />} /><Route path="*" element={<Home />} /></Routes><Footer /></>;
}
