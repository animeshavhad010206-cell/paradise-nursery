import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((entry) => entry.id === id);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter((entry) => entry.id !== id);
      } else {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
