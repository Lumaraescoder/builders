import styled from 'styled-components/native'
import { weatherConditions } from '../../../utils/WeatherConditions'
import weather from './index'

export const view = styled.View`
    flex: 1;
    background-color: ${weatherConditions[weather].color};


`

export const ViewContainer = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    
`
export const ViewBodyContainer = styled.View`
    flex: 2;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 25px;
    margin-bottom: 40px; 
`
export const Texts = styled.Text`
    font-size: 48px;
    color: #fff;
    text-align: center;


`
export const TextSub = styled.Text`

    font-size: 20px;
    color: #fff;
    text-align: center;


`