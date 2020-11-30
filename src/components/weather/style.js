import styled from 'styled-components/native'
// import { Button } from 'react-native'

export const Views = styled.View`
    flex: 1;

`
export const ViewsColor = styled(Views)`
 ${props => props.$style ?? {}}

`
export const Buttons = styled.Button`
  

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