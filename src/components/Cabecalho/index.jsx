import {styled} from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px;
    display: flex;
    justify-content: space-between;
`

const ImagemEstilizada = styled.img`
    max-width: 212px;
    height: 65px;
    top: 60px;
    left: 24px;
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <ImagemEstilizada src={logo} alt=""/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho