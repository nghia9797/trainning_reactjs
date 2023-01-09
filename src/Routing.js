import React from "react";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./features/PrivateRoute";
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
      <Switch>{routing}</Switch>
    </BrowserRouter>
  );
};
