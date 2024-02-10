import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  type: string;
  size: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
const { items, totalPrice } = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState: <CartSliceState>{
    totalPrice,
    items,
  },
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.count !== 0);
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const { addItems, removeItem, clearItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
