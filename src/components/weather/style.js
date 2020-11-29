import styled from 'styled-components/native'
import { View, Text, Stylesheet } from 'react-native';


export const view = styled.View`

    flex: 1;
    background-color: #f7b733;

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
    font-size: ${props => props.subtitle ? 48 : 24};
    font-size: ${props => props.tempText ? 48 : 24};


`


