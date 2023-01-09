import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./features/PrivateRoute";
import ListProduct from "./features/product/ListProduct";
import TopPage from "./features/top/TopPage";
import ListUser from "./features/user/ListUser";
import { routes } from "./routes";

export const Routing = () => {
  const routing = Object.values(routes).map((value, index) => {
    return (
      <PrivateRoute
        title={value.title}
        exact={value.exact}
        path={value.path}
        component={value.component}
        bsj={value.bsj}
        key={index}
        titleBackground={value.titleBackground}
      />
    );
  });

  return (
    <BrowserRouter>
      {/* <Switch>{routing}</Switch> */}
      
      <Route path='/' exact component={TopPage} />
      <Route path='/products'  component={ListProduct}/>
      <Route path='/users' component={ListUser}/>
    </BrowserRouter>
  );
};
