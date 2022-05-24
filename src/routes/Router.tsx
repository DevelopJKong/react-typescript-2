import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "../Coin";
import Coins from "../Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Coins />
        </Route>
        <Route path="/:coinId">
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
