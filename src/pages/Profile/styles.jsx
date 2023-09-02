import styled from 'styled-components'

const Profile = styled.div`

background-color: ${({ theme }) => theme.COLORS.white_100};
box-shadow: 0 0 8px rgba(38, 38, 38, 0.199);
padding: 20px;
padding-bottom: 30px;
position: relative;
@media screen and (max-width: 768px) {
  padding-bottom: 60px;
}

.nameimg{
display: flex;
align-items: center;
gap: 40px;
position: relative;
top: 20px;
}

.name{
color: ${({ theme }) => theme.COLORS.blue_light};

}

.profile{
display: flex;
flex-direction: column;

}

.email{
color: rgba(38, 38, 38, 0.637);
}

.config{
display: flex;
margin-left: 97%;
position: absolute;
top: 20px;
right: 20px;

}

.button{
display: flex;
align-items: center;
justify-content: center;
height: 30px;
width: 70px;
border-radius: 8px;
background-color: ${({ theme }) => theme.COLORS.orange};
border: none ;
position: absolute;
bottom: 10px;
right: 20px;
margin-top: 30px;
}


`

export default Profile