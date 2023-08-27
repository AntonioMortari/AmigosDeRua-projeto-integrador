import { useState, useEffect } from 'react'
import { publicationsApi } from '../../axios/config.js';

import ConteinerAdoptFriend from './styles.js'
import Menu from "../../components/Menu";
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import CardPet from '../../components/CardPet/index.jsx';

function AdoptFriend() {
    const [publications, setPublications] = useState([])

    const getPublications = async () => {
        const url = '/publications'
        await publicationsApi.get(url)
            .then(response => setPublications(response.data))
            .catch(err => console.log(err))


    }

    useEffect(() => {
        getPublications()
    })

    return (
        <>
            <Menu />

            <ConteinerAdoptFriend>
                <main>

                    <div className="conteiner-publications">
                        
                        {publications.length > 0 ? (
                            publications.map(publication =>{
                                return <CardPet publication={publication} />
                            })
                        ) : (
                            <Loader />
                        )}

                    </div>

                </main>
            </ConteinerAdoptFriend>

            <Footer />
        </>
    );
}

export default AdoptFriend;