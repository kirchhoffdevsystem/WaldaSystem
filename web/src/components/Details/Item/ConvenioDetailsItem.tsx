import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Convenio } from '../../../types/types_db';

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
    const convenio: Convenio = {
        id: 2,
        valor: 50.00,
        status: 'ativo',
        autonomo: false,
        empresa_id: 2,
        criacao_id: 2,
        modificacao_id: 2
    }
    const info = `
                id: ${convenio.id},
                valor: ${convenio.valor},
                status: ${convenio.status},
                autonomo: ${convenio.autonomo},
                empresa_id: ${convenio.empresa_id},
                criacao_id: ${convenio.criacao_id},
                modificacao_id: ${convenio.modificacao_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do convenio?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function ConvenioDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}