import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";
import "./App.css"

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/shopping-cart/catalog" component={Catalog} />
        <Route exact path="/shopping-cart/cart" component={Cart} />
        <Route exact path="/shopping-cart/catalog/:id" component={ItemPage} />
        <Route path="/shopping-cart/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;