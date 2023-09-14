
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import "./index.css"

function App() {
  return (
    <div>
      <Header name="Mich" color="blue" />
      <Main greet="Howdy!"/>
      <Sidebar greet="Hi!!!"/>
    </div>
  );
}

export default App;
