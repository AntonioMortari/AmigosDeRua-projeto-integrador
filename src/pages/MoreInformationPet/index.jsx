import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {publicationsApi} from '../../axios/config'

import ConteinerMoreInformation from './styles.js'
import ButtonBack from '../../components/ButtonBack'


function MoreInformationPet() {
    const [dataPet, setDataPet] = useState([])
    const {id} = useParams()

    const getDataPetById = async() =>{
        const url = `/publications/${id}`
        await publicationsApi.get(url)
            .then(response => setDataPet(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        if(id){
            getDataPetById()
        }
    },[])

    return ( 
        <>

            <ConteinerMoreInformation>
                <div className="conteiner-button-back">
                    <ButtonBack onClick={() => window.history.back()} txt='Voltar'/>
                </div>

                <main>
                    <h2>{dataPet.name}</h2>
                </main>
            </ConteinerMoreInformation>
        </>
     );
}

export default MoreInformationPet;