import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/ts-shopping-cart/catalog" component={Catalog} />
        <Route exact path="/ts-shopping-cart/cart" component={Cart} />
        <Route exact path="/ts-shopping-cart/catalog/:id" component={ItemPage} />
        <Route path="/ts-shopping-cart/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;