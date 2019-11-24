import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAPIResponse } from './actions/fetch_api_data';
import { thisExpression, tsDeclareFunction } from "@babel/types";

// interface IProps {

// }

// interface IState {
//   value: any,
//   cities: any
// }
// const API_URL = 'http://samples.openweathermap.org/data/2.5/weather?q='
// const API_KEY = 'b6907d289e10d714a6e88b30761fae22'

export class WeatherCitiesView extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    this.props.fetchAPIResponse('Paris');
  }

  search = () => {
    this.props.fetchAPIResponse(this.state.value);
  }

  changeHandler = (event) => {
    let value = event.target.value;
    this.setState({
      value: value
    });
  }


  render() {
    return (
      <div>
        <div className="form">

          <label>
            Город:
              <input name="city" placeholder="Paris" onChange={this.changeHandler} />
          </label>
          <button onClick={this.search}>search</button>

        </div>
        <div className="dashboard">
          <h2>Location</h2>
          <div className="square">
            <p>City</p>
            <p className="data">{this.props.apiLocation[0]}</p>
          </div>
          <div className="square">
            <p>Country</p>
            <p className="data">{this.props.apiLocation[2]}</p>
          </div>
          <div className="square">
            <p>Time Zone</p>
            <p className="data">{this.props.apiLocation[5]}</p>
          </div>
          <div className="square">
            <p>Local Time</p>
            <p className="data">{this.props.apiLocation[7]}</p>
          </div>

          <h2>Current Condition</h2>
          <div className="square">
            <p>Local Time</p>
            <p className="data">{this.props.apiConditons[0]}</p>
          </div>
          <div className="square">
            <img src={this.props.apiConditons[1]} />
          </div>

          <h2>Other Conditions</h2>
          <div className="square">
            <p>Clouds</p>
            <p className="data">{this.props.apiResponse[14]}%</p>
          </div>
          <div className="square">
            <p>Feels like</p>
            <p className="data">{this.props.apiResponse[15]} </p>
          </div>
          <div className="square">
            <p>Humidity</p>
            <p className="data">{this.props.apiResponse[13]}%</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiResponse: state.FetchWeatherLocation.location,
    apiResponse: state.FetchCurrentConditions.conditions
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ FetchAPIResponse: fetchAPIResponse }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WeatherCitiesView);

// export default WeatherCitiesView;