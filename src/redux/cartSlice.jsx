import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

try {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    initialState = JSON.parse(cartData);
  }
} catch (error) {
  console.error("Error parsing 'cart' data from localStorage:", error);
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id); // Use !== for comparison
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
