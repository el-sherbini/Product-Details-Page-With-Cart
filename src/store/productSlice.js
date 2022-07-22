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

export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (args) => {
    try {
      return axios({
        method: "post",
        url: `${baseUrl}/cart/delete`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          itemId: args.itemId,
        },
      }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  isLoading: true,
  checkValidation: false,
  isCartOpen: false,

  productId: null,
  productName: null,
  productPrice: null,
  productDescription: null,
  productImage: null,
  productQuantities: null,
  relatedProducts: [],

  cartItems: [],

  successMsg: null,
  failureMsg: null,

  cartCount: 0,
  totalPrice: 0,
  totalPriceBeforeDiscount: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    CloseCart: (state) => {
      state.isCartOpen = false;
    },
    increaseQuantity: (state, action) => {
      state.cartItems.find((item) => item.itemId === action.payload).quantity++;
    },
    decreaseQuantity: (state, action) => {
      state.cartItems.find((item) => item.itemId === action.payload).quantity--;
    },
    deleteProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.itemId !== action.payload
      );
    },
    getTotalQuantity: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += +item.quantity;
      });
      state.cartCount = total;
    },
    getTotalPrice: (state) => {
      let total = 0,
        totalBeforeDiscount = 0;
      state.cartItems.forEach((item) => {
        total += +item.amount;
        totalBeforeDiscount += +item.oldPrice * +item.quantity;
      });

      state.totalPrice = total;
      state.totalPriceBeforeDiscount = totalBeforeDiscount;
    },
  },
  extraReducers: {
    [getProductDetails.fulfilled]: (state, action) => {
      state.productId = action.payload.product.id;
      state.productName = action.payload.product.name;
      state.productPrice = action.payload.product.finalPrice;
      state.productDescription = action.payload.product.description;
      state.productImage = action.payload.product.image;
      state.productQuantities = action.payload.product.quantities;
      state.relatedProducts = action.payload.relatedProducts;
      console.log(action.payload);

      state.isLoading = false;
    },

    [addToCart.pending]: (state, action) => {
      state.checkValidation = false;
    },
    [addToCart.fulfilled]: (state, action) => {
      console.log(action);
      state.successMsg = action.payload.message;
      state.failureMsg = action.payload.validation[0];

      if (action.payload.data !== null) {
        state.cartItems.push(action.payload.data.item);
      }

      state.checkValidation = true;
    },

    [updateProductQuantity.pending]: (state, action) => {
      state.checkValidation = false;
    },
    [updateProductQuantity.fulfilled]: (state, action) => {
      console.log(action);

      state.successMsg = action.payload.message;
      state.failureMsg = action.payload.validation[0];

      state.cartItems.find(
        (item) => item.itemId === action.payload.data.item.itemId
      ).amount = action.payload.data.item.amount;

      state.checkValidation = true;
    },

    [removeProduct.pending]: (state, action) => {
      state.checkValidation = false;
    },
    [removeProduct.fulfilled]: (state, action) => {
      console.log(action);

      state.successMsg = action.payload.message;

      state.checkValidation = true;
    },
  },
});

export const {
  openCart,
  CloseCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  getTotalQuantity,
  getTotalPrice,
} = productSlice.actions;

export default productSlice.reducer;
