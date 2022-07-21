import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://164.92.166.103/pharmacy-backend/public/api";
const token =
  "6jQd1a65Goi33SCRM0dSPAXttAYobSpRiRmcpVVz20LH9NzZO2m9oVZP6Xa1foUfMwzNA9JDF6yCRJSO";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (args) => {
    try {
      return axios
        .get(`${baseUrl}/products/10430`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  isLoading: true,

  productName: null,
  productDescription: null,
  productImage: null,
  productQuantities: null,
  relatedProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProductDetails.pending]: (state, action) => {
      console.log(action);
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.productName = action.payload.product.name;
      state.productDescription = action.payload.product.description;
      state.productImage = action.payload.product.image;
      state.productQuantities = action.payload.product.quantities;
      state.relatedProducts = action.payload.relatedProducts;
      console.log(action.payload);

      state.isLoading = false;
    },
    [getProductDetails.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
