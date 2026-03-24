import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Mensalidade } from '../../../types/types_db';

type Props = {
    empresa: string;
    valor: number;
}

function Conteudo({ empresa, valor }: Props) {
    return (
        <div className={cssItem.itemInfo}>
            <p><small className={cssItem.itemNegrito}>Empresa</small>: {empresa}</p>
            <p><small className={cssItem.itemNegrito}>Valor</small>: R$ {valor.toFixed(2)}</p>
        </div>
    )
}

function openInfo() {
    const mensalidade: Mensalidade = {
        id: 5,
        dt_criacao: 'string',
        mes: 'string',
        tipo_associacao: 'string',
        qtd_dependentes: 5,
        valor_dependente: 50,
        valor_total_dependente: 50,
        valor_descontos: 50,
        valor_acrescimos: 50,
        valor_total: 50,
        dt_vencimento: 'string',
        pgto_status: 'string',
        obs: 'string',
        usuario_id: 5,
        empresa_id: 5
    }
    const info = `
                id: ${mensalidade.id},
                dt_criacao: ${mensalidade.dt_criacao},
                mes: ${mensalidade.mes},
                tipo_associacao: ${mensalidade.tipo_associacao},
                qtd_dependentes: ${mensalidade.qtd_dependentes},
                valor_dependente: ${mensalidade.valor_dependente},
                valor_total_dependente: ${mensalidade.valor_total_dependente},
                valor_descontos: ${mensalidade.valor_descontos},
                valor_acrescimos: ${mensalidade.valor_acrescimos},
                valor_total: ${mensalidade.valor_total},
                dt_vencimento: ${mensalidade.dt_vencimento},
                pgto_status: ${mensalidade.pgto_status},
                obs: ${mensalidade.obs},
                usuario_id: ${mensalidade.usuario_id},
                empresa_id: ${mensalidade.empresa_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações da mensalidade?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function MensalidadeDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}