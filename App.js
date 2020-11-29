import React from 'react';
import * as s from './src/style'
import { Image } from 'react-native'
import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './src/components/weather/';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    <Image source={require('./assets/Builders.png')}  />
    return (
      <s.Views>
        {isLoading ? (
          <s.Loading>
             <s.LoadingText> We are Builders<Image source = {require('./assets/Builders.png')} /></s.LoadingText>
          </s.Loading>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </s.Views>
    );
  }
}
