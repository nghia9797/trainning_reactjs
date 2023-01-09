import { createAsyncThunk, createSlice } from "../toolkit";
import { createProduct, getListProduct } from "./api";

const initialState = {
  listProduct: [],
};

export const getListProductAsync = createAsyncThunk(
  "product/getListProduct",
  async () => {
    const response = await getListProduct();
    return response.data;
  }
);

export const createProductAsync = createAsyncThunk(
  "product/createProductAsync",
  async (params) => {
    const response = await createProduct(params);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListProductAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(getListProductAsync.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.listProduct = action.payload;
        // state.listProduct = [
        //   {
        //     id: 3,
        //     name: "thang3",
        //     brand: "thang3",
        //     madein: "thang3",
        //     price: 2345.0,
        //   },
        //   {
        //     id: 4,
        //     name: "thang34",
        //     brand: "thang34",
        //     madein: "thang3",
        //     price: 2345.0,
        //   },
        //   {
        //     id: 2,
        //     name: "thang123",
        //     brand: "thang12",
        //     madein: "thang12",
        //     price: 2345.0,
        //   },
        // ];
      })
      .addCase(getListProductAsync.rejected, (state) => {
        // state.listProduct = [
        //   {
        //     id: 3,
        //     name: "thang3",
        //     brand: "thang3",
        //     madein: "thang3",
        //     price: 2345.0,
        //   },
        //   {
        //     id: 4,
        //     name: "thang34",
        //     brand: "thang34",
        //     madein: "thang3",
        //     price: 2345.0,
        //   },
        //   {
        //     id: 2,
        //     name: "thang123",
        //     brand: "thang12",
        //     madein: "thang12",
        //     price: 2345.0,
        //   },
        // ];
      });
  },
});

export default productSlice.reducer;
