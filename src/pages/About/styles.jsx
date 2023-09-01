import styled from 'styled-components'

const ConteinerAbout = styled.div`
    .section1{
        display: flex;
        align-items: center;
        /* padding: 60px; */
        width: 100%;
        justify-content: center;
        margin: 40px auto;
        gap: 1px;
        margin-left: 5%;

        @media screen and (max-width:1100px) {
           width: 100%;
        }
        @media screen and (max-width:1000px) {
            width: 100%;
            flex-direction: column;
            align-items: start;
            margin-left: 5px;
        }
        
       
    }

    .conteiner-text-about{
        width: 35%;
         margin-left: 20px;

         @media screen and (max-width:1000px) {
           margin: auto;
           width: 60%;
        }
         
         @media screen and (max-width:800px) {
           width: 90%;
        }
        

        h4{
            font-weight: normal;
            color: #262626cf;
            margin-bottom: 10px;
        }

        h3{
            font-size: 30px;
        }

        p{
            color: #313131c7;
            font-weight: 500;
            font-size: 15px;
            margin-top: 5px;

            span{
                color: ${({theme})=>theme.COLORS.orange};
            }
        }
       
    }

    .conteiner-img{
        width: 50%;
        display: flex;
        align-items:center;
        justify-content: center;
        @media screen and (max-width:1000px) {
            width: 90%;
        }
        

    img{
        width: 500px;
        @media screen and (max-width:1000px) {
            width: 350px;
        }
    }



    }
`

export default ConteinerAbout