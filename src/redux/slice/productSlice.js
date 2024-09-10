import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { productApi} from '../../api/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(productApi);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: '',
    categoryFilter: '',
    priceFilter: '',
    sortOption: '',
    searchTerm: '',
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.categoryFilter = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        action.payload ? product.category === action.payload : true
      );
    },
    filterByPrice: (state, action) => {
      const [min, max] = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.price >= min && product.price <= max
      );
    },
    sortProducts: (state, action) => {
      const sortOption = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (sortOption === 'price-asc') {
          return a.price - b.price;
        }
        if (sortOption === 'price-desc') {
          return b.price - a.price;
        }
        return 0;
      });
    },
    searchProducts: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(state.searchTerm) ||
          product.category.toLowerCase().includes(state.searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterByCategory, filterByPrice, sortProducts, searchProducts } = productSlice.actions;

export default productSlice.reducer;
