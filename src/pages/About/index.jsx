import ConteinerAbout from "./styles";

import Menu from "../../components/Menu";
import srcAboutUs from '../../images/about.png'

function About() {
    return ( 
        <>
            <Menu />

            <ConteinerAbout>
                <div className="conteiner-image">
                    <h1>Sobre Nós</h1>
                    <img src={srcAboutUs} alt="Imagem sobre bós" />
                </div>
            </ConteinerAbout>
        </>
     );
}

export default About;