import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Payment from './payment';
import Products from './Products';
import Cart from './cart';
import Deliver from './deliver';
import Review from './review';
import Address from './Address';

 import Product from './Product';
 import NoContent from './NoContent'
// import LandingPa
import LandingPage from './LandingPage';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <div>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/cart" component={Cart} />
        <Route path="/collections/:category" component={Products} />
         <Route path="/product/:productId" component={Product} /> 
         <Route path="/collections" component={NoContent} /> 
        {/* <Route path="/store/men-collections" component={Male} /> */}
        <Route path="/checkout/address" component={Address} />
        <Route path="/checkout/delivery" component={Deliver} />
        <Route path="/checkout/payment" component={Payment} />
        <Route path="/checkout/review" component={Review} />
      </div>
    </BrowserRouter>

    {/* <Deliver /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


