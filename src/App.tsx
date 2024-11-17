// App.js
import React from 'react';
import './App.css';
import BouncingObject from '/BouncingObject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rebondissement d'Objet en React</h1>
      </header>
      <div className="container">
        <BouncingObject />
      </div>
    </div>
  );
}

export default App;





