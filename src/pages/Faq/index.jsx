import Menu from "../../components/Menu";
import styled from "styled-components";
import srcFaq from "../../images/faq.png";
import Footer from "../../components/Footer";

const ConteinerFaq = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0px 0px 10px #26262645; */

    .pergunts{
        margin-top: 70px;
        text-align: center;
    }
`;


function FAQ() {
    return (
        <>
            <Menu />
            <ConteinerFaq>
                <div className="faq1">
                    <div className="img-faq">
                        <img src={srcFaq} alt="" />
                    </div>
                    <h1 className="pergunts">Perguntas Frequentes</h1>

                </div>
            </ConteinerFaq>
        </>
    );
}

export default FAQ;