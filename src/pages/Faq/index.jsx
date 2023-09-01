import {useState} from 'react'

import Menu from "../../components/Menu";
import styled from "styled-components";
import srcFaq from "../../images/faq.png";
import Footer from "../../components/Footer";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const ConteinerFaq = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  
  .pergunts {
      margin-top: 40px;
      text-align: center;
    }
    
    .img-faq {
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 470px;
    @media screen and (max-width:800px) {
        width: 280px;
    }
  }

  .frequentes {
    color: #ff9925;
  }
`;

function FAQ() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  return (
    <>
      <Menu />
      <ConteinerFaq>
        <div className="faq1">
          <div className="img-faq">
            <img className="img-faq" src={srcFaq} alt="" />
          </div>
          <h1 className="pergunts">
            Perguntas <span className="frequentes">Frequentes</span>
          </h1>
        </div>

        <Accordion allowMultiple w={windowWidth>800?"65%":"90%"} margin="auto" mt="20px">
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left" >
                1. Como funciona o processo de adoção pelo site?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} >
            Navegar por nossos perfis de animais disponíveis, selecionar aquele que toca o seu coração e entrar em contato com o responsável.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white_200' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                2. Quais tipos de animais estão disponíveis para adoção?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Nossa plataforma oferece cães e gatos que buscam por um lar amoroso.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                3. Qual é o critério de adoção?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Buscamos adotantes responsáveis que possam oferecer cuidados e amor adequados ao animal. Os critérios podem variar, mas nosso objetivo é garantir que haja um ajuste adequado entre o animal e sua nova família.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                4. Quais informações são fornecidas sobre os animais?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Cada perfil de animal inclui detalhes sobre sua personalidade e sua história, as demais informações sobre o animal estará na descrição feita pelo dono do mesmo. Também fornecemos fotos para ajudar os adotantes a conhecerem melhor o animal.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                5. Há alguma taxa de adoção?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                Não, não cobramos taxas de adoções. Isso você poderá combinar como o dono do animal
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                6. Posso visitar o animal antes de adotar?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Fica a desejo do adotante, mas, orientamos que tenha cuidado com golpes.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                7. O que acontece se a adoção não der certo?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Estamos comprometidos em garantir que cada adoção seja bem-sucedida. Se houver problemas de adaptação, trabalharemos com você para encontrar a melhor solução, que pode incluir suporte de treinamento ou mesmo a opção de devolução.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                8. Vocês oferecem suporte pós-adoção?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Não, mas, você pode entrar em contato com o antigo dono para te ajudar com isso.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                9. Como posso ajudar mesmo que eu não esteja pronto para adotar?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Há muitas maneiras de ajudar, como ser um voluntário, fazer doações, compartilhar perfis de animais em redes sociais ou apoiar eventos de arrecadação de fundos.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton padding='15px' _expanded={{ bg: 'orange', color: 'white' }} borderRadius='10px' border='1px solid #26262613'>
                <Box as="span" flex="1" textAlign="left">
                10. Como posso começar o processo de adoção?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Basta explorar nossos perfis de animais disponíveis e contatar o atual dono para realizar sua adoção.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ConteinerFaq>

      <Footer />
    </>
  );
}

export default FAQ;
