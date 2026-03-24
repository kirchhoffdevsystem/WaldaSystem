import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Mensalidade } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"


type Props = {
    item: Mensalidade
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>Empresa: Fertipar</h2>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Data de Criação:</span> {item.dt_criacao}</p>

                <p><span className={cssCard.negrito}>Tipo de Associação:</span> {item.tipo_associacao}</p>

                <p><span className={cssCard.negrito}>Quantidade de Dependentes:</span> {item.qtd_dependentes}</p>

                <p><span className={cssCard.negrito}>Valor Médio dos Dependentes:</span> {item.valor_dependente}</p>

                <p><span className={cssCard.negrito}>Valor Total de Dependentes:</span> R$ {item.valor_total_dependente}</p>

                <p><span className={cssCard.negrito}>Valor Valor dos Descontos:</span> R$ {item.valor_descontos}</p>

                <p><span className={cssCard.negrito}>Valor Total de Acréscimos:</span> R$ {item.valor_acrescimos}</p>

                <section className={cssCard.areaDestaque}>

                    <p><span className={cssCard.negrito}>Valor Total:</span> R$ {item.valor_total}</p>

                    <p><span className={cssCard.negrito}>Data de Vencimento:</span> R$ {item.dt_vencimento}</p>

                    <p><span className={cssCard.negrito}>Status do Pagamento:</span> R$ {item.valor_total}</p>

                    <p><span className={cssCard.negrito}>Observação:</span> R$ {item.obs}</p>

                </section>
            </div>
            {/* <p>{item.usuario_id}</p>
            <p>{item.empresa_id}</p> */}
        </>
    )
}

//faltou colocar a empresa do pagamento
//faltou colocar o usuário do pagamento

export default function MensalidadeCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.mes,
        status: item.pgto_status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.mensalidades}/${item.id}`)} />
    )
}