import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class  App extends Component {
   
  render() {

    return (
      <div className="App">
        <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" exact component={Orders}/>

         </Switch>
        </Layout>
      </div>
    );
  }
 }

export default App;


