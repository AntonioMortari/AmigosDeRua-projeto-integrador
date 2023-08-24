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
                <div className="conteiner-content">
                    <div>
                        <h4>Nossa História</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia nulla voluptate cumque nobis veniam explicabo delectus incidunt aspernatur dignissimos maiores optio sint voluptatum, velit animi laboriosam aut quos suscipit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam iusto rem dolores, nostrum quo nesciunt odit necessitatibus inventore placeat porro maiores earum maxime doloremque atque! Adipisci neque ullam quae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatum accusamus eligendi quis voluptatem totam perferendis nulla ex sunt aliquam sed quos libero hic magnam animi deserunt dolore consectetur blanditiis.</p>
                    </div>
                </div>
            </ConteinerAbout>
        </>
     );
}

export default About;