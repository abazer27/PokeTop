import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';
import { Pokedex } from './page/Pokedex';
import { PokemonDetailPage } from './page/PokemonDetailPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { MyPokemon } from './components/MyPokemon';


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-pokeapi.graphcdn.app/'
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Pokedex />
            </Route>
            <Route exact path="/pokemon-detail/:name">
              <PokemonDetailPage />
            </Route>
            <Route exact path="/my-pokemon">
              <MyPokemon />
            </Route>
          </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;
