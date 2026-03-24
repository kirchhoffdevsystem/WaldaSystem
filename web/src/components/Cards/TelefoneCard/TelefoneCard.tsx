import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Telefone } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"

type Props = {
    item: Telefone
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>Empresa: Fertipar</h2>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Tipo:</span> {item.numero}</p>

            </div>
            {/* <p>{item.usuario_id}</p>
            <p>{item.empresa_id}</p> */}
        </>
    )
}

export default function TelefoneCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.numero,
        status: item.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.telefones}/${item.id}`)} />
    )
}