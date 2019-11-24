import { combineReducers } from 'redux';

// import reducers to use
import FetchWeather from './fetch_weather';
import FetchLocation from './fetch_location';
import FetchConditions from './fetch_conditions';

// combine reducers
const reducers = combineReducers({
  FetchWeatherReducer: FetchWeather,
  FetchWeatherLocation: FetchLocation,
  FetchWeatherConditions: FetchConditions,
});

export default reducers;