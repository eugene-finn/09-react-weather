import React, { Component } from "react";
import "./App.css";

interface IProps {
  onClick: void
  city: string
  event: any
  favoriteCities: any
}

// export const City = ({ onClick, city = 'Tel Aviv' }: Props) =>
//   <img onClick={onClick} city={city} />

const favoriteCities = ['Budapest', 'London', 'Amsterdam', 'Tel-Aviv'];

export class WeatherCitiesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteCities: ['Budapest', 'London', 'Amsterdam', 'Tel-Aviv']
    }
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
  }

  handleAddFavorite(event) {
    // предполагается этой кнопкой добавляем в массив новые города

    event.preventDefault();
    this.setState(prevState => ({
      favoriteCities: [...prevState.favoriteCities, this.state.value]
    }))

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddFavorite}>
          <label>
            Choose a city:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" } />
        </form>
      </div>

      <div>
        const listCities = favoriteCities.map((city) =>
        <li>{city}</li>
        );
        </div>
      }



}



// ReactDOM.render(
//   <ul key={city}>{listCities}</ul>,
//   document.getElementById('root')
// );



export default WeatherCityView;