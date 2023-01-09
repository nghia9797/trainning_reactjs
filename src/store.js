import productReducer from "./features/product/slices";
import { configureStore } from "./features/toolkit";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
