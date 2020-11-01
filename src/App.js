import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import HeaderComponent from './GlobalComponent/HeaderComponent/HeaderComponent';
import FooterComponent from './GlobalComponent/FooterComponent/FooterComponent';
import NavComponent from './GlobalComponent/NavComponent/NavComponent'
function App() {
  return (
    <div>
      <HeaderComponent />
   <NavComponent />
  <FooterComponent />
  </div>
  );
}

export default App;