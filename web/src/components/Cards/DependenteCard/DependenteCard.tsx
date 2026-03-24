import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Dependente } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"

type Props = {
    item: Dependente
}

const empresa = {
    empresa: 'Empresa Dependente',
    status: 'ativo'
}

function Conteudo({ item }: Props) {
    return (
        <>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Filiado Responsavel:</span> Pedro Batista</p>

                <p><span className={cssCard.negrito}>Empresa do Filiado:</span> {empresa.empresa}</p>

                <p><span className={cssCard.negrito}>Data de Nascimento:</span> {item.dt_nascimento}</p>

                <p><span className={cssCard.negrito}>Valor: {item.valor}</span> {item.dt_nascimento}</p>
            </div>
        </>
    )
}

export default function DependenteCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.nome,
        status: item.status,
        empresa: empresa.empresa,
        empresa_status: empresa.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.dependentes}/${item.id}`)} />
    )
}