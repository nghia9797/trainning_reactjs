import ListProduct from "./features/product/ListProduct";
import TopPage from "./features/top/TopPage";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  product: {
    exact: false,
    path: "/",
    component: (props) => injectProps(props, ListProduct),
    title: "Product List",
    bsj: false,
    titleBackground: "linear-gradient(to right, #E5F6FC 60%, #A6DFF4)",
  },
};
