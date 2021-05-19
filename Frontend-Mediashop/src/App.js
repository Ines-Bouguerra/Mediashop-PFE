/** @format */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activate from "./components/authentication/Activate";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetPassword from "./components/authentication/ResetPassword";
import ResetPasswordConfirm from "./components/authentication/ResetPasswordConfirm";
import CategoryScreen from "./screens/client/CategoryScreen";
import Favorites from "./components/favorites/Favorites";
import Home from "./components/home/Home";
import Alert from "./components/layouts/Alert";
import Layout from "./hocs/Layout";
import HomeScreen from "./screens/client/HomeScreen";
import ProductScreen from "./screens/client/ProductScreen";
import store from "./store";
import Google from "./components/authentication/Google";
import UserRoute from "./components/routing/UserRoute";
import AdminLayout from "./hocs/AdminLayout";
import Product  from "./components/admin/Product";
import CompareList from "./components/products/CompareList";
import Contact from "./components/contact/Contact";
import Brand from "./components/brand/Brand";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="super_container">
            <Switch>
            <Route path="/admin/:path?" exact>
                <AdminLayout>
                  <Switch>
                  <Route exact path="/admin/productList" component={Product} />

                  </Switch>
                </AdminLayout>
              </Route>
              <Route path="" exact>
                <Layout>
                  <Switch>
                  <Route exact path="/login">
                        <Login />
                  </Route>

                    <Route exact path="/" component={Home} />
                    <UserRoute exact path="/wishlist" component={Favorites} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/google" component={Google} />
                    <Route exact path="/reset-password" component={ResetPassword} />
                    <Route path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
                    <Route path="/activate/:uid/:token" component={Activate} />
                    <Route path="/category/:slug" component={CategoryScreen} />
                    <Route exact path="/product-list" component={HomeScreen} />
                    <Route exact path="/search/:query" component={HomeScreen} />
                    <Route exact path="/page/:pageNumber" component={HomeScreen} />
                    <Route exact path="/search/:query/page/:pageNumber" component={HomeScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/compare" component={CompareList} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/brand" component={Brand} />
                  </Switch>
                </Layout>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
