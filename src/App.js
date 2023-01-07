import React from 'react'
import './App.css';
import NewRoutes from './routes';


import logo from './assets/Logo.svg'

function App() {

  return (
    <div className="container">
      <img src={logo} className="logo" alt="" />
      <div className="conteudo">
        <NewRoutes/>
      </div>
    </div>
    
  );
}

export default App;
