import React, { Component } from "react";
import WeatherCitiesView from "./WeatherCitiesView";

import "./App.css";

import StoreRef from './store';

// the provider gives us access o the state
import { Provider } from 'react-redux';

//Provider need property called store

class App extends Component {
  render() {
    return (
      <Provider store={StoreRef}>
        <div className="container">
          <h1>Wheather App</h1>
          <WeatherCitiesView />

        </div>
      </Provider>
    );
  }
}

export default App;