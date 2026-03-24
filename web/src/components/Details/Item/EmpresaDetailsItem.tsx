import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Empresa } from '../../../types/types_db';

type Props = {
    cnpj: string;
    nome: string;
}

function Conteudo({ cnpj, nome }: Props) {
    return (
        <div className={cssItem.itemInfo}>
            <p><small className={cssItem.itemNegrito}>Nome</small>: {nome}</p>
            <p><small className={cssItem.itemNegrito}>CNPJ</small>: {cnpj}</p>
        </div>
    )
}

function openInfo() {
    const empresa: Empresa = {
        id: 1,
        nome: 'string',
        cnpj: 'string',
        nome_contato: 'string',
        setor_contato: 'string',
        status: 'string',
        endereco_id: 2,
        criacao_id: null,
        modificacao_id: null
    }
    const info = `
                id: ${empresa.id},
                nome: ${empresa.nome},
                cnpj: ${empresa.cnpj},
                nome_contato: ${empresa.nome_contato},
                setor_contato: ${empresa.setor_contato},
                status: ${empresa.status},
                endereco_id: ${empresa.endereco_id},
                criacao_id: ${empresa.criacao_id},
                modificacao_id: ${empresa.modificacao_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações da empresa?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function EmpresaDetailsItem_Component({ cnpj, nome }: Props) {
    return (
        <DetailsItem label='Detalhes da Empresa'
            children={<Conteudo cnpj={cnpj} nome={nome} />}
            onClick={() => openInfo()} />
    )
}