import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
