import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';
import Location from './components/Location';


function App() {
  return (
    <div className="App">
      Weather app (aplicación del clima)
      <WeatherLocation></WeatherLocation>
    </div>
  );
}

export default App;
