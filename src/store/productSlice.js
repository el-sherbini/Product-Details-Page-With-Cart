import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://164.92.166.103/pharmacy-backend/public/api";
const token =
  "6jQd1a65Goi33SCRM0dSPAXttAYobSpRiRmcpVVz20LH9NzZO2m9oVZP6Xa1foUfMwzNA9JDF6yCRJSO";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (args) => {
    try {
      return axios({
        method: "get",
        url: `${baseUrl}/products/${args.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const addToCart = createAsyncThunk("product/addToCart", async (args) => {
  try {
    return axios({
      method: "post",
      url: `${baseUrl}/cart/add`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        productId: args.productId,
        quantity: args.quantity,
      },
    }).then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
});

export const updateProductQuantity = createAsyncThunk(
  "product/updateProductQuantity",
  async (args) => {
    try {
      return axios({
        method: "post",
        url: `${baseUrl}/cart/update`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          itemId: args.itemId,
          quantity: args.quantity,
        },
      }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  isLoading: true,
  isAddClicked: false,

  productId: null,
  productName: null,
  productDescription: null,
  productImage: null,
  productQuantities: null,
  relatedProducts: [],

  successMsg: null,
  failureMsg: null,

  cartCount: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProductDetails.pending]: (state, action) => {
      console.log(action);
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.productId = action.payload.product.id;
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

    [addToCart.pending]: (state, action) => {
      console.log(action);

      state.isAddClicked = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      console.log(action);
      state.successMsg = action.payload.message;
      state.failureMsg = action.payload.validation[0];

      state.cartCount += +action.payload.data.item.quantity;

      state.isAddClicked = true;
    },
    [addToCart.rejected]: (state, action) => {
      console.log(action);
      state.isAdd = true;
    },

    [updateProductQuantity.pending]: (state, action) => {
      console.log(action);

      state.isAddClicked = false;
    },
    [updateProductQuantity.fulfilled]: (state, action) => {
      console.log(action);

      state.successMsg = action.payload.message;
      state.failureMsg = action.payload.validation[0];

      state.cartCount = +action.payload.data.item.quantity;

      state.isAddClicked = true;
    },
    [updateProductQuantity.rejected]: (state, action) => {
      console.log(action);

      state.isAddClicked = true;
    },
  },
});

export default productSlice.reducer;
