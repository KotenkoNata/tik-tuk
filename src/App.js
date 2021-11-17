import React from "react";
import HomeView from "./views/HomePage";
import UserView from "./views/UserView";
import NotFound from "./views/NotFound";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Container } from "react-bootstrap";

import routes from "./routes";

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.userProfile} component={UserView} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
