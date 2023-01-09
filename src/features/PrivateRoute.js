import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { Layout } from "../component/common/Layout";

export const PrivateRoute = ({ component, ...rest }) => {
  const location = useLocation();

  const { titleBackground } = { ...rest };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout title={rest.title} titleBackground={titleBackground}>
          {component({ ...rest, ...props })}
        </Layout>
      )}
    />
  );
};
