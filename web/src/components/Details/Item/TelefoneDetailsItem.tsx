import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Telefone } from '../../../types/types_db';

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
    const telefone: Telefone = {
        id: 2,
        numero: 'string',
        tipo: 'string',
        status: 'string',
        usuario_id: 2,
        empresa_id: 2
    }
    const info = `
                id: ${telefone.id},
                numero: ${telefone.numero},
                tipo: ${telefone.tipo},
                status: ${telefone.status},
                usuario_id: ${telefone.usuario_id},
                empresa_id: ${telefone.empresa_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do telefone?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function TelefoneDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}