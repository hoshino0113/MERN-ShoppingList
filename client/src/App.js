import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar'
import ShoopingList  from './components/shoppinglist';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoopingList/>
    </div>
  );
}

export default App;
