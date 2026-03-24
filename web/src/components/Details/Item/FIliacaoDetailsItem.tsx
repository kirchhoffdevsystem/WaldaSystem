import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Filiacao } from '../../../types/types_db';

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
    const filiacao: Filiacao = {
        id: 3,
        status: 'string',
        usuario_id: 3,
        valor_associacao_id: 3,
        criacao_id: 3,
        modificacao_id: 3,
        qtd_dependentes: 3
    }
    const info = `
                id: ${filiacao.id},
                status:  ${filiacao.status},
                usuario_id: ${filiacao.usuario_id},
                valor_associacao_id: ${filiacao.valor_associacao_id},
                criacao_id: ${filiacao.criacao_id},
                modificacao_id: ${filiacao.modificacao_id},
                qtd_dependentes: ${filiacao.qtd_dependentes}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações da filição?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function FiliacaoDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}