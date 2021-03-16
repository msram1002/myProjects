import React, {useState} from 'react';
import {fetchWeather} from './api/fetchWeather';
import './App.css';

const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      // Resetting the query to blank, clearing the input
      setQuery('');
    }
  }

  return (
    <div className="main-container">
      <input type="text" 
        className="search"
        placeholder="Search for a city ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search} />
    </div>
  );
}

export default App;

