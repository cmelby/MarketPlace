  
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/ShoppingCart";
import Payment from "./pages/Payment";
import Confirmation from "./pages/confirmation";
import { StoreProvider } from "./utils/GlobalState";

function App() {

  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/product/:sku" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/confirmation" component={Confirmation} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;