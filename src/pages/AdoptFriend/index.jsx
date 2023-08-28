import { useState, useEffect } from 'react'
import { publicationsApi } from '../../axios/config.js';
import axios from 'axios'

import ConteinerAdoptFriend from './styles.js'
import Menu from "../../components/Menu";
import Footer from '../../components/Footer'
import MsgNoResults from '../../components/MsgNoResults/';
import CardPet from '../../components/CardPet/';
import Button from '../../components/Button'

const initialOptions = {
    
}

function AdoptFriend() {
    const [publications, setPublications] = useState([])
    const [options, setOptions] = useState(initialOptions)
    const [ufs, setUfs] = useState([])

    const handleOptions = (e) => {
        const { name, value } = e.target
        let newState = { ...options }
        newState[name] = value

        if(newState[name] == ''){
            // se algum filtro estiver vazio, remova a propriedade que controla seu valor para que não intefira na consulta a api
            delete newState[name]
        }

        setOptions(newState)
    }

    const handleSearch = async() =>{
        // cria uma url com os parâmetros de acordo com os filtros selecionados
        const params = new URLSearchParams(options)

        const url= `/publications?${params.toString()}`

        await publicationsApi.get(url)
            .then(response => setPublications(response.data))
            .catch(err => console.log(err))
    }

    const getPublications = async () => {
        const url = '/publications'
        await publicationsApi.get(url)
            .then(response => setPublications(response.data))
            .catch(err => console.log(err))
    }

    const getUfs = async() =>{
        // pega todos os estados
        await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => setUfs(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPublications()
        getUfs()
    },[])

    return (
        <>
            <Menu />

            <ConteinerAdoptFriend>
                <main>

                        <h2>Adote um amigo!</h2>
                    <div className='conteiner-filters' value={options.uf} onChange={handleOptions}>


                        <select name="specie" id="specie">
                            <option value="">Todas as espécies</option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>

                        <select name="sex" id="sex">
                            <option value="">Todos os sexos</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>

                        <select name="sigleUf" id="sigleUf">
                            <option value="">Todos os Estados</option>
                            {ufs.map(uf => {
                                return(
                                    <option key={uf.sigla} value={uf.sigla}>{uf.nome}</option>
                                )
                            })}
                        </select>

                        <select name="size" id="size">
                            <option value="">Todos os Portes</option>
                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                            <option value="Grande">Grande</option>
                        </select>

                        <Button color='orange' content='Buscar' onClick={handleSearch} />
                    </div>

                    <div className="conteiner-publications">

                        {publications.length > 0 ? (
                            publications.map(publication => {
                                return <CardPet key={publication.id} publication={publication} />
                            })
                        ) : (
                            <MsgNoResults msg='Nenhum resultado encontrado!' />
                        )}

                    </div>

                </main>
            </ConteinerAdoptFriend>

            <Footer />
        </>
    );
}

export default AdoptFriend;