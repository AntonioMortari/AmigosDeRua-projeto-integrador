import styled from 'styled-components'

const Label = styled.label`
    
    display: flex;
    flex-direction:column;

    color: ${({theme}) => theme.COLORS.blue};

    >.conteiner-input{
        display: flex;
        align-items: center;
        input{
            width: 98%;
            background-color: transparent;
            padding: 10px 0;
            font-size: 1rem;
            border: none;
            border-bottom: 2px solid rgba(38, 38, 38, 0.178);
    
            outline: none;

            transition: all.3s;
    
            &:focus{
                border-color: ${({theme}) => theme.COLORS.blue};
            }
        }

        >svg{
            cursor: pointer;
            position: relative;
            right: 20px;
        }
    }
            
`

export default Label