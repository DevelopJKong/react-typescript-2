import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "../Coin";
import Coins from "../Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route exact path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
