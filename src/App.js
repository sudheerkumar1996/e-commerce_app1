import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
