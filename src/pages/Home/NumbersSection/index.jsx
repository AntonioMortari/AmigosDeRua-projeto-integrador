import styled from 'styled-components'

import Number from './number'

const ConteinerNumbers = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    
`


function NumbersSection() {
    return ( 
        <ConteinerNumbers>
            <Number number='178' description='Animais disponíveis' />
            <Number number='234' description='Animais doados' />
            <Number number='12 mil' description='Reais arrecadados para ONGs' />
        </ConteinerNumbers>
     );
}

export default NumbersSection;