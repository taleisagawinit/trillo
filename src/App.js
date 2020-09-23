import React from 'react';
import './app.scss';
import Navigation from './layout/navigation/Navigation';
import Header from './layout/header/Header';


function App() {
  return (
    <div style={{"position": "relative"}}>
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
