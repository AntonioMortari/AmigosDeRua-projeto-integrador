import ConteinerAbout from "./styles";
import Menu from "../../components/Menu";
import srcAbout from "../../images/About.svg";




function About() {
  return (
    <>
      <Menu />
      <ConteinerAbout>
        <div className="section1">
          <div className="conteiner-text-about">
            <h4>SOBRE NÓS</h4>
            <h3>
              Transformando a vida dos animais e procurando os melhores lares para
              eles.
            </h3>
            <p>
            Somos uma equipe que acredita no <span>poder transformador</span> do amor e da compaixão pelos animais. Nossa jornada começou com um simples objetivo: <span>unir almas perdidas a lares amorosos</span>, resgatando não apenas animais, mas também laços de afeto que duram toda uma vida.
            </p>
          </div>
          <div className="conteiner-img">
            <img src={srcAbout} alt="" />
          </div>
        </div>
      </ConteinerAbout>
    </>
  );
}

export default About;
