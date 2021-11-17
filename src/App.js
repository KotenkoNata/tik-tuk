import React, { lazy, Suspense } from "react";
import NotFound from "./views/NotFound";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Container } from "react-bootstrap";

import routes from "./routes";

const HomeView = lazy(() => import("./views/HomePage/HomeView"));

const UserView = lazy(() => import("./views/UserView/UserView"));

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.userProfile} component={UserView} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
