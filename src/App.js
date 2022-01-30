import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks';
import { Pokedex } from './page/Pokedex';
import { PokemonDetailPage } from './page/PokemonDetailPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import {MyPokemon} from './components/MyPokemon';


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-pokeapi.graphcdn.app/'
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemon-detail/:name" element={<PokemonDetailPage />} />
          <Route path="/my-pokemon" element={<MyPokemon />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
