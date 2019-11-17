import React, { Component } from "react";
import "./App.css";

interface IProps {

}

interface IState {
  value: any,
  cities: any
}
const API_URL = 'http://samples.openweathermap.org/data/2.5/weather?q='
const API_KEY = 'b6907d289e10d714a6e88b30761fae22'

export class WeatherCitiesView extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      cities: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {
    console.log('mounted!')
    this.setState({
      value: 'Moscow'
    })
  }

  handleChange(event: { target: { value: any; }; }) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void; }) {
    if (this.state.cities.indexOf(this.state.value) && this.state.value.length < 4) {
      console.log('Такой город уже есть в списке ' + this.state.cities);
    } else {
      this.setState({ cities: this.state.cities.concat(this.state.value) });
    }
    event.preventDefault();
    console.log('Города ' + this.state.cities);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Город:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <ul>
            {this.state.cities.map((item: any, index: string | number | undefined) => <li key={index}>
              {item}
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}


export default WeatherCitiesView;