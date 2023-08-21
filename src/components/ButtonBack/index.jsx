import styled from 'styled-components'
import { AiOutlineLeft } from 'react-icons/ai'

const Button = styled.button`
    display: block;
            background-color: transparent;
            border: none;
            font-size: 1rem;
            margin-bottom: 5px;

            &:hover{
                color: ${({ theme }) => theme.COLORS.blue};
            }

            >span{
                display: flex;
                align-items: center;
                gap: 5px;

                transition:.2s;

            }
`

function ButtonBack({ onClick, txt }) {
    return (
        <Button onClick={onClick}>
            <span>
                <AiOutlineLeft />
                {txt}
            </span>
        </Button>
    );
}

export default ButtonBack;