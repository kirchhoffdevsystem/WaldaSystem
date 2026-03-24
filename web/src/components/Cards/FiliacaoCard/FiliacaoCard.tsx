import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Filiacao } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"

type Props = {
    item: Filiacao
}

const empresa = {
    empresa: 'Empresa Dependente',
    status: 'ativo'
}

function Conteudo({ item }: Props) {
    return (
        <>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Valor da Filiacao:</span> R$ 400,00</p>

                <p><span className={cssCard.negrito}>Quantidade de dependentes:</span> 2</p>

                <p><span className={cssCard.negrito}>Valor Total dos Dependentes:</span> R$100,00</p>
                
                <p><span className={cssCard.negrito}>Valor Total:</span> R$600,00</p>

            </div>
        </>
    )
}

export default function FiliacaoCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: 'Nome do Filiado',
        status: item.status,
        empresa: empresa.empresa,
        empresa_status: empresa.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.filiados}/${item.id}`)} />
    )
}