import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cards from './Companents/Cards/Cards';
import { Header } from './Companents'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Cards />
      </div>
    </Router>
  );
}

export default App;
