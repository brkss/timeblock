import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch, RouteProps } from "react-router-dom";
import { routes } from "./utils/config/routes";

export const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              render={(props: RouteProps) => (
                <route.component
                  {...route.props}
                  name={route.name}
                  {...props}
                />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};
