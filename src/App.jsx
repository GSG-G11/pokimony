import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Cards, Details } from './Companents';
import { Pokemoncontext } from './PokimonyContext/Context';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Pokemoncontext>
            <Header />
            <Route path="/pokemon/:id" component={Details} />
            <Route path="/" component={Cards} />
          </Pokemoncontext>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
