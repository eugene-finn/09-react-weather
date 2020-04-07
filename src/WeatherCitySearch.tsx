import React, { Component } from 'react'
import { WeatherCitiesView } from './WeatherCitiesView'

interface IProps {
  children: string[]
}

interface IState {
  favotireCities: array[]
}

const API_URL = 'http://samples.openweathermap.org/data/2.5/weather?q='
const API_KEY = 'b6907d289e10d714a6e88b30761fae22'


export class WeatherCitySearch extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      favotireCities: ['Budapes']
    };
  }
}
