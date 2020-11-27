import React from 'react';
import * as s from './style.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = (props) => {
  return (
    <s.view>
      <s.ViewContainer>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <s.Texts tempText>Temperatura˚</s.Texts>
      </s.ViewContainer>
      <s.ViewBodyContainer>
        <s.Texts> Muito cedo manhã</s.Texts>
        <s.Texts subtitle>Volte a codar</s.Texts>
      </s.ViewBodyContainer>
    </s.view>
  );
};



export default Weather;