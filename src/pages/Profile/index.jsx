import styled from "styled-components";
import { Avatar, Input } from "@chakra-ui/react";

import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";

const ConteinerProfile = styled.div`
    min-height: 100vh;
    background-color:#F8E3CC;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .conteiner-button-back{
        width: 500px;
        margin-bottom: 10px;
    }

    main{
        width: 500px;
        background-color: ${({theme }) => theme.COLORS.white_200} ;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(38, 38, 38, 0.164);
        display: flex;
        flex-direction: column;
        gap: 30px;

        .conteiner-avatar{
            display: flex;
            align-items: center;
            gap: 60px;
        }

    }
`;

function Profile() {
  return (
    <ConteinerProfile>
      <div className="conteiner-button-back">
          <ButtonBack txt="Voltar" onClick={() => window.history.back()} />
      </div>
      <main>

        <div className="conteiner-avatar">
            <Avatar size = "lg" name="Matheus Antonio" />
            <h3>Matheus Antonio</h3>
        </div>

        <div className="conteiner-info-user">
            <h3>Dados do usuário:</h3>
          <Input mt='20px' mb='20px' variant="filled" placeholder="nome" isDisabled />
          <Input mb='20px' variant="filled" placeholder="email" isDisabled />
          <Input mb='20px' variant="filled" placeholder="telefone" isDisabled />
          <Input mb='20px' variant="filled" placeholder="senha" isDisabled />

          <div>
            <Button content="Editar Perfil" color="blue" />
            {/* <Button content = "Salvar Alterações" color = 'blue'/>  */}
          </div>

        </div>
      </main>
    </ConteinerProfile>
  );
}

export default Profile;

// const [dataUser, setDataUser] = useState([])

// const dispatch = useDispatch()
// const navigate = useNavigate()

// const getDataUser = async (url) =>{
//     users.get(url)
//         .then(response => {
//             console.log(response)
//             setDataUser(response.data)
//         })
//         .catch(err => console.log(err))
// }

// useEffect(() => {
//     const idUser = JSON.parse(localStorage.getItem('idUser'))

//     if(idUser){
//         const url = `/users/${idUser}`
//         getDataUser(url)
//     }else{
//         navigate('/login')
//     }

// }, [])
