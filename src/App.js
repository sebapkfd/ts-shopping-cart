import React, {useState, useEffect} from "react";
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
  const [totalAmount, setTotalAmount] = useState(0);
  
  const addSelected = (itemSelected) => {
    const {name, amount} = itemSelected;
    const selectedItems = items.map(item =>{
      if(item.name === name) {
        return {...item, amount: amount}
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

  useEffect(() => {
    const amounts = items.map(item => item.amount);
    const amountInCart = amounts.reduce((acc, cv) => acc + cv);
    setTotalAmount(amountInCart);
  }, [items, totalAmount])

  return (
    <BrowserRouter>
      <Nav amount={totalAmount}/>
      <Switch>
        <Route exact path="/shopping-cart/catalog">
          <Catalog items={items}/>
        </Route>
        <Route exact path="/shopping-cart/cart">
          <Cart items={items} onClean={cleanCart}/>
        </Route>
        <Route exact path="/shopping-cart/catalog/:id" >
          <ItemPage items={items} onSelect={addSelected}/>
        </Route>
        <Route path="/shopping-cart">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;