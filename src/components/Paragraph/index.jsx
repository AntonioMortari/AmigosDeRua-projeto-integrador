import ConteinerParagraph from './styles'

function Paragraph({ title, paragraph}) {
    return ( 
        <>
        <ConteinerParagraph>
        <h4>{title}</h4>
        <p>{paragraph}</p>
        </ConteinerParagraph>
        </>
     );
}

export default Paragraph;