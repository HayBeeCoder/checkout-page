import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Payment from './payment';
// import Products from './Products';
import Cart from './cart';
import Deliver from './deliver';
import Review from './review';
import Address from './Address';

// import Product from './Product';
import NoContent from './NoContent'
// import LandingPa
import LandingPage from './LandingPage';
import Footer from './components/footer/Footer';
import SingleProductPage from './features/products/SingleProductPage';
import Header from './components/header/Header';
import store from './store/store.js'
import { Provider } from 'react-redux'
import ProductsList from './features/products/ProductsList';
// import produ

import SignUp from "./components/Sign_in_up/SignUp"
import SignIn from "./components/Sign_in_up/SignIn"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/collections/:category/product/:productId" render={
            ({ match }) => (
              <React.Fragment>

                <Header landingpage={false} />
                <SingleProductPage match={match} />
                <Footer />
              </React.Fragment>

            )
          } />
          {/* <Route path="/collections/:category/product/:productId" component={Product} /> */}
          {/* <Route path="/collections/:category" component={Products} /> */}
          <Route path="/collections/:category" render={() => (
            <React.Fragment>

              <Header landingpage={false} />

              <ProductsList />

            </React.Fragment>
          )} />
          <Route path="/sign_up" render={() => (
            <React.Fragment>

              <Header landingpage={false} />

              <SignUp />

            </React.Fragment>
          )} />
          <Route path="/sign_in" render={() => (
            <React.Fragment>

              <Header landingpage={false} />

              <SignIn />

            </React.Fragment>
          )} />

          {/* <Route path="/store/men-collections" component={Male} /> */}
          <Route path="/checkout/address" component={Address} />
          <Route path="/checkout/delivery" component={Deliver} />
          <Route path="/checkout/payment" component={Payment} />
          <Route path="/checkout/review" component={Review} />
          <Route component={NoContent} />

        </Switch>
      </BrowserRouter>
    </Provider>

    {/* <Deliver /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


