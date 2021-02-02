import React from 'react'
import * as s from './style.js'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { weatherConditions } from '../../../utils/WeatherConditions'

const Weather = ({ weather, temperature }) => {
  return (
    <s.ViewsColor $style={{ backgroundColor: weatherConditions[weather].color }}>
      <s.ViewContainer>
      <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weather].icon}
            color={'#fff'}
          />
        <s.Texts> { temperature }˚</s.Texts>
      </s.ViewContainer>
      <s.Views>
        <s.Buttons title="Press me" />
      </s.Views>
      <s.ViewBodyContainer>
        <s.Texts>{weatherConditions[weather].title}</s.Texts>
        <s.TextSub>{weatherConditions[weather].subtitle}</s.TextSub>
      </s.ViewBodyContainer>
    </s.ViewsColor>
  )
}


Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
}

export default Weather
