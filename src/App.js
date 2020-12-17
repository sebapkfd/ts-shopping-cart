import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uniqid from 'uniqid';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";

const App = () => {

  const [items, setItems] = useState([
    {name: 'Uno', price: 100, id: uniqid(), amount: 0},
    {name: 'Dos', price: 200, id: uniqid(), amount: 0},
    {name: 'Tres', price: 300, id: uniqid(), amount: 0},
    {name: 'Cuatro', price: 400, id: uniqid(), amount: 0},
  ]);

  const addSelected = (itemSelected) => {
    const {name, amount} = itemSelected;
    const selectedItems = items.map(item =>{
      if(item.name === name) {
        return {...item, amount: item.amount + amount}
      }
      return item;
    })
    setItems(selectedItems);
  }

  const cleanCart = () =>{
    const defaultItems = items.map(item => {
      return {...item, amount: 0}
    })
    setItems(defaultItems);
  }

  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/catalog">
          <Catalog items={items}/>
        </Route>
        <Route exact path="/cart">
          <Cart items={items} onClean={cleanCart}/>
        </Route>
        <Route exact path="/catalog/:id" >
          <ItemPage items={items} onSelect={addSelected}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;