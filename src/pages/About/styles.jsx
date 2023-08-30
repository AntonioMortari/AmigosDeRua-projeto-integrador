import styled from 'styled-components'

const ConteinerAbout = styled.div`
    .section1{
        display: flex;
        align-items: center;
        /* padding: 60px; */
        width: 90%;
        margin: auto;
        justify-content: center;
        gap: 30px;
        
       
    }

    .conteiner-text-about{
        width: 50%;
         margin-left: 180px;

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
       /* margin-right: 250px; */
        

    img{
        /* position: relative;
        bottom: 50px; */
        width: 500px;
        /* height: 500px; */
    }



    }
`

export default ConteinerAbout