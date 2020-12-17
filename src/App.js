import React, { useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uniqid from 'uniqid';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

const App = () => {

  const [items, setItems] = useState([
    {name: 'Uno', price: 100, id: uniqid(), amount: 0},
    {name: 'Dos', price: 200, id: uniqid(), amount: 0},
    {name: 'Tres', price: 300, id: uniqid(), amount: 0},
    {name: 'Cuatro', price: 400, id: uniqid(), amount: 0},
  ]);

  const addSelected = (itemName) => {
    const selectedItems = items.map(item =>{
      if(item.name === itemName) {
        return {...item, amount: item.amount + 1}
      }
      return item;
    })
    setItems(selectedItems);
  }

  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/catalog">
          <Catalog items={items} pickItem={addSelected}/>
        </Route>
        <Route exact path="/cart">
          <Cart items={items}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;