import styled from "styled-components"
import iconeHomeAtivo from "/icones/home-ativo.png"
import iconeHomeInativo from "/icones/home-inativo.png"
import maisVistasAtivo from "/icones/mais-vistas-ativo.png"
import maisVistasInativo from "/icones/mais-vistas-inativo.png"
import maisCurtidasAtivo from "/icones/mais-curtidas-ativo.png"
import maisCurtidasInativo from "/icones/mais-curtidas-inativo.png"
import novasAtivo from "/icones/novas-ativo.png"
import novasInativo from "/icones/novas-inativo.png"
import surpreendaMeAtivo from '/icones/surpreenda-me-ativo.png'
import surpreendaMeInativo from '/icones/surpreenda-me-inativo.png'
import ItemNavegacao from "./ItemNavegacao"


const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin:0;
    width: 212 px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                 <ItemNavegacao
                   iconeAtivo={iconeHomeAtivo}
                   iconeInativo={iconeHomeInativo}
                   ativo={true}
                 >
                    Home
                 </ItemNavegacao>
                </ListaEstilizada>
                <ListaEstilizada>
                 <ItemNavegacao
                   iconeAtivo={maisVistasAtivo}
                   iconeInativo={maisVistasInativo}
                   ativo={false}
                 >
                    Mais vistas
                 </ItemNavegacao>
                </ListaEstilizada>
                <ListaEstilizada>
                 <ItemNavegacao
                   iconeAtivo={maisCurtidasAtivo}
                   iconeInativo={maisCurtidasInativo}
                   ativo={false}
                 >
                    Mais curtidas
                 </ItemNavegacao>
                </ListaEstilizada>
                <ListaEstilizada>
                 <ItemNavegacao
                   iconeAtivo={novasAtivo}
                   iconeInativo={novasInativo}
                   ativo={false}
                 >
                    Novas
                 </ItemNavegacao>
                </ListaEstilizada>
                <ListaEstilizada>
                 <ItemNavegacao
                   iconeAtivo={surpreendaMeAtivo}
                   iconeInativo={surpreendaMeInativo}
                   ativo={false}
                 >
                    Surpreenda-me
                 </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral