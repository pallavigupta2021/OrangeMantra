import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PokemonList from './components/PokemonList';
import PokemonDetailsPage from './components/PokemonDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;