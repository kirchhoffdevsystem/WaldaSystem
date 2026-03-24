import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { FuncionarioSindicato } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"


type Props = {
    item: FuncionarioSindicato
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>{item.funcao}</h2>
        </>
    )
}

export default function FuncionarioSindicatoCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: 'Nome do Funcionario',
        status: 'ativo',
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.funcionariosSindicato}/${item.id}`)} />
    )
}