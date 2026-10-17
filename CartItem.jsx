import { useDispatch } from 'react-redux';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice.jsx';

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info"><span className="eyebrow">{item.category}</span><h3>{item.name}</h3><p>₹{item.price} each</p><button className="remove-button" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={14} /> Remove</button></div>
      <div className="cart-item-controls"><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button></div><strong>₹{item.price * item.quantity}</strong></div>
    </article>
  );
}


export default CartItem;
