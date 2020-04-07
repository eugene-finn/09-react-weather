import React, { Component } from "react";
import "./App.css";

interface IProps {
  onClick: void
  city: string
}

// export const City = ({ onClick, city = 'Tel Aviv' }: Props) =>
//   <img onClick={onClick} city={city} />

const favoriteCities = ['Budapest', 'London', 'Amsterdam', 'Tel-Aviv'];

);

export class WeatherCityView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteCities: ['Budapest', 'London', 'Amsterdam', 'Tel-Aviv']
    }
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
  }

  handleAddFavorite(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleAddFavorite}>
        <label>
          Choose a city:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>

      <div>
        const listCities = favoriteCities.map((city) =>
        <li>{city}</li>
      </div>
    );
  }
}



// ReactDOM.render(
//   <ul key={city}>{listCities}</ul>,
//   document.getElementById('root')
// );



export default WeatherCityView;