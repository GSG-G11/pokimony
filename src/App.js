import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Companents'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>

  );
}

export default App;
