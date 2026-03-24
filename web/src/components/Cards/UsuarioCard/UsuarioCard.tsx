import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Usuario } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"

type Props = {
    item: Usuario
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>{item.funcao}</h2>

            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>CPF:</span> {item.cpf}</p>

                <p><span className={cssCard.negrito}>Email:</span> {item.email}</p>

            </div>

        </>
    )
}

export default function UsuarioCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.nome,
        status: item.status,
        empresa: 'empresa.empresa',
        empresa_status: '',
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.usuariosCadastrados}/${item.id}`)} />
    )
}