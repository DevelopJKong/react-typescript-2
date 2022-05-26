import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToDoList from "../pages/ToDoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ToDoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
