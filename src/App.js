import React from 'react'
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      <Nav />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
