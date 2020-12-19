import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";
import listofItems from "./components/listofItems";
import "./App.css"

const App = () => {
  const [items, setItems] = useState(listofItems);
  
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