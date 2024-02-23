import {styled} from "styled-components"
import tags from "./tags.json"

const TagBotao = styled.div` 
    gap: 24px;
    float: left;
    margin-top: -40px;
    margin-left: 200px;
    `

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin-bottom: 5px;
    
`

const Botoes = styled.div`
    width: 522px;
    height: 50px;
    top: 576px;
    left: 496px;
    display: flex;
    gap: 24px;
    float: left;
    margin: auto;
    padding-bottom: 20px;
`

    const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
    const Tags = () => {
    return (
        <>
        <TagTitulo>Busque por tags:</TagTitulo>
            <TagBotao>
                <Botoes>{tags.map( tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}</Botoes>
            </TagBotao>
    </>
    )
}


export default Tags