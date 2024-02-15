import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import HomePage from "./components/HomePage";
import Success from "./components/Success";
import "./index.css";
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/order">
        <OrderForm />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
};
export default App;
