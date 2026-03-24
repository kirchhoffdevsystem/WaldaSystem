import { useNavigate } from "react-router-dom";
import type { Convenio } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"
import { nomeRotas } from "../../../routes/nomeRotas";

type Props = {
    item: Convenio
}

const empresa = {
    empresa: 'Empresa Convenio',
    status: 'ativo'
}

const infoConvenio = {
    qtd_conveniado: 20,
    mensalidade_conveniado: 100,
    total_mensalidade: 2000,
    status_pgto: 'pago',
    valor_pago: 2000,
    dt_ultimo_pagamento: '01/01/2026'
}

function Conteudo({ item }: Props) {
    return (
        <div className={cssCard.descricao}>
            <p><span className={cssCard.negrito}>Quantidade de Conveniados:</span> {infoConvenio.qtd_conveniado}</p>

            <p><span className={cssCard.negrito}>Valor da Mensalidade Por Conveniado:</span> R$ {infoConvenio.mensalidade_conveniado.toFixed(2)}</p>

            <p><span className={cssCard.negrito}>Valor Total Mensalidade:</span> R$ {infoConvenio.total_mensalidade.toFixed(2)} </p>

            <p><span className={cssCard.negrito}>Status Pagamento da Mensalidade atual:</span> {infoConvenio.status_pgto}</p>

            <p><span className={cssCard.negrito}>Valor Pago:</span> {infoConvenio.valor_pago.toFixed(2)}</p>

            <p><span className={cssCard.negrito}>Ultimo Pagamento:</span> {infoConvenio.dt_ultimo_pagamento}</p>
        </div>
    )
}

export default function ConvenioCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: empresa.empresa,
        status: empresa.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.convenios}/${item.id}`)}/>
    )
}