import React, { Component } from "react";
import "./App.css";

// interface IProps {
//   onClick: => void
//   city: string
// }

export const City = ({ onClick, city = 'Tel Aviv' }: Props) =>
  <img onClick={onClick} city={city} />

const favoriteCities = ['Budapest', 'London', 'Amsterdam', 'Tel-Aviv'];
const listCities = favoriteCities.map((city) =>
  <li>{city}</li>
);




ReactDOM.render(
  <ul key={city}>{listCities}</ul>,
  document.getElementById('root')
);