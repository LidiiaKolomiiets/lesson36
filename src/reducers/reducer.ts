import { createSlice} from "@reduxjs/toolkit";
import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/dist/createAction";

export interface Product {
  number: number;
  name: string;
  id: string;
  isPurchased: boolean;
}

const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[], 
  reducers: {
    addProduct: (state: Product[], action: PayloadAction<Product>) => {
      return [...state, { ...action.payload, isPurchased: false }];
    },

    removeProduct: (state: Product[], action: PayloadAction<{ id: string }>) => {
      return state.filter(product => product.id !== action.payload.id);
    },

    editProduct: (state: Product[], action: PayloadAction<Product>) => {
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            name: action.payload.name,
            number: action.payload.number,
            isPurchased: action.payload.isPurchased,
          };
        }
        return product;
      });
    },
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct, editProduct } = productSlice.actions;


