import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Conveniado } from '../../../types/types_db';

type Props = {
    isFiliado: boolean;
    status: string;
}

function Conteudo({ isFiliado, status }: Props) {
    return (
        <div className={cssItem.itemInfo}>
            <p><small className={cssItem.itemNegrito}>Filiado:</small> {isFiliado ? "Sim" : "Não"}</p>
            <p><small className={cssItem.itemNegrito}>Status:</small> {status}</p>
        </div>
    )
}

function openInfo() {
    const conveniado: Conveniado = {
        id: 2,
        nome: 'string',
        filiado: false,
        status: 'string',
        filiacao_id: 2,
        criacao_id: 2,
        modificacao_id: 2,
        empresa_id: 2
    }
    const info = `
                id: ${conveniado.id},
                nome: ${conveniado.nome},
                filiado: ${conveniado.filiado},
                status: ${conveniado.status},
                filiacao_id: ${conveniado.filiacao_id},
                criacao_id: ${conveniado.criacao_id},
                modificacao_id: ${conveniado.modificacao_id},
                empresa_id: ${conveniado.empresa_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do conveniado?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function ConveniadoDetailsItem_Component({ isFiliado, status }: Props) {
    return (
        <DetailsItem label='Detalhes da Filiação'
            children={<Conteudo isFiliado={isFiliado} status={status} />}
            onClick={() => openInfo()} />
    )
}