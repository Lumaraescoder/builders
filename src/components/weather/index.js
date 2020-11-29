import React from 'react'
import * as s from './style.js'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { weatherConditions } from '../../../utils/WeatherConditions'

const Weather = ({ weather, temperature }) => {
  return (
    <s.view>
      <s.ViewContainer>
      <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weather].icon}
            color={'#fff'}
          />
      </s.ViewContainer>
        <s.Texts> { temperature }˚</s.Texts>
      <s.ViewBodyContainer>
        <s.Texts>{weatherConditions[weather].title}</s.Texts>
        <s.TextSub>{weatherConditions[weather].subtitle}</s.TextSub>
      </s.ViewBodyContainer>
    </s.view>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
}

export default Weather
