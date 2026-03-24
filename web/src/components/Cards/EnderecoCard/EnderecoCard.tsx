import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Endereco } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"

type Props = {
    item: Endereco
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>Cep: {item.cep}</h2>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Rua:</span> {item.rua}</p>

                <p><span className={cssCard.negrito}>Bairro:</span> {item.bairro}</p>

                <p><span className={cssCard.negrito}>Número:</span> {item.numero}</p>

                <p><span className={cssCard.negrito}>Complemento:</span> {item.complemento}</p>

            </div>
        </>
    )
}

export default function EnderecoCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: `${item.rua}, ${item.bairro}`,
        status: item.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.enderecos}/${item.id}`)} />
    )
}