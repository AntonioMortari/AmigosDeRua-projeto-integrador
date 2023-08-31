import styled from "styled-components";

import ConteinerAbout from "./styles";
import Menu from "../../components/Menu";
import srcAbout from "../../images/About.svg";
import Card from "../Home/CardsSection/card";
import Footer from "../../components/Footer"

import srcMission from "../../images/Mission.svg";
import srcTarget from "../../images/Target.svg";
import srcValues from "../../images/Values.svg";

const ConteinerCards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  >div{
    width: 60%;
    height: auto;
    gap:5px;
    box-shadow: 0px 0px 10px #26262645;

    &:hover{
      transform: scale(1.01);
    } 
  }
`;

function About() {
  return (
    <>
      <Menu />
      <ConteinerAbout>
        <div className="section1">
          <div className="conteiner-text-about">
            <h4>SOBRE NÓS</h4>
            <h3>
              Transformando a vida dos animais e procurando os melhores lares
              para eles.
            </h3>
            <p>
              Somos uma equipe que acredita no <span>poder transformador</span>{" "}
              do amor e da compaixão pelos animais. Nossa jornada começou com um
              simples objetivo:{" "}
              <span>unir almas perdidas a lares amorosos</span>, resgatando não
              apenas animais, mas também laços de afeto que duram toda uma vida.
            </p>
          </div>
          <div className="conteiner-img">
            <img src={srcAbout} alt="" />
          </div>
        </div>

        <ConteinerCards>
          <Card
            src={srcMission}
            title="Nossa Missão"
            content="Facilitar conexões significativas entre animais necessitados e pessoas que desejam adotar um pet, criando lares felizes e responsáveis."
          />
          <Card
            src={srcTarget}
            title="Visão"
            content="Ser a plataforma de adoção preferida globalmente, promovendo uma cultura onde todos os animais tenham um lar amoroso"
          />
          <Card
            src={srcValues}
            title="Valores"
            content="▶ Bem-Estar Animal
           ▶ Respeito
           ▶ Transparência
           ▶ Responsabilidade
           ▶ Colaboração"
          />
        </ConteinerCards>
      </ConteinerAbout>
      <Footer />
    </>
  );
}

export default About;
