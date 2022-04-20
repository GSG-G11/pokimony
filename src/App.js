import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cards from './Companents/Cards/Cards';
import { Header } from './Companents'
import {Pokemoncontext} from './PokimonyContext/Context';


function App() {
  return (
    <Router>
      <div className="App">
        <Pokemoncontext>
          <Header />
          <Cards />
        </Pokemoncontext>

      </div>
    </Router>
  );
}

export default App;
