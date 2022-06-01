import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Search from "./Search";

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path={["/","/movies/:movieId"]}>
          <Home />
        </Route>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
