import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { clearCart, removeItem, updateQuantity } from './CartSlice.jsx';

// This component is the complete Shopping Cart page requested by the assignment.
function CartRow({ item }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <span className="eyebrow">{item.category}</span>
        <h3>{item.name}</h3>
        <p>₹{item.price.toLocaleString('en-IN')} each</p>
        <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
          <Trash2 size={14} /> Remove
        </button>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
          <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button>
          <span>{item.quantity}</span>
          <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button>
        </div>
        <strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
      </div>
    </article>
  );
}

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Recalculate on every Redux cart update, including quantity changes and removals.
  const totalQuantity = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  const totalCartAmount = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  if (items.length === 0) {
    return (
      <main className="page-shell empty-cart">
        <span className="empty-icon"><ShoppingBag size={32} /></span>
        <p className="eyebrow">YOUR CART</p>
        <h1>It's looking a little <em>green-free.</em></h1>
        <p>Your next favourite plant is waiting to come home.</p>
        <button className="button button-dark" type="button" onClick={() => navigate('/products')}>
          Explore plants <ArrowRight size={17} />
        </button>
      </main>
    );
  }

  return (
    <main className="page-shell cart-page">
      <section className="page-intro cart-intro">
        <p className="eyebrow">YOUR LITTLE FOREST</p>
        <h1>Your shopping <em>cart.</em></h1>
        <p>{totalQuantity} plant{totalQuantity === 1 ? '' : 's'} selected</p>
      </section>

      <div className="cart-layout">
        <section className="cart-items" aria-label="Shopping cart items">
          {items.map((item) => <CartRow key={item.id} item={item} />)}
          <button className="text-link continue-link" type="button" onClick={() => navigate('/products')}>
            ← Continue shopping
          </button>
        </section>

        <aside className="order-summary" aria-label="Order summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{totalCartAmount.toLocaleString('en-IN')}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-label">FREE</span>
          </div>
          <div className="summary-row total-row">
            <span>Total cart amount</span>
            <strong aria-live="polite">₹{totalCartAmount.toLocaleString('en-IN')}</strong>
          </div>
          <p className="summary-note">Your total updates automatically when you add, remove, or change the quantity of a plant.</p>
          <button className="button button-dark full-button" type="button" onClick={() => window.alert('Thank you! Checkout demo completed.')}>
            Proceed to checkout <ArrowRight size={17} />
          </button>
          <button className="clear-cart" type="button" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </aside>
      </div>
    </main>
  );
}
