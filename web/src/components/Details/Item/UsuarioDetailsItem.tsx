import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Usuario } from '../../../types/types_db';

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
    const usuario: Usuario = {
        id: 4,
        nome: 'string',
        cpf: 'string',
        funcao: 'string',
        email: 'string',
        status: 'string',
        endereco_id: 4,
        empresa_id: 4,
        criacao_id: 4,
        modificacao_id: 4
    }
    const info = `
                id: ${usuario.id},
                nome: ${usuario.nome},
                cpf: ${usuario.cpf},
                funcao: ${usuario.funcao},
                email: ${usuario.email},
                status: ${usuario.status},
                endereco_id: ${usuario.endereco_id},
                empresa_id: ${usuario.empresa_id},
                criacao_id: ${usuario.criacao_id},
                modificacao_id: ${usuario.modificacao_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do usuário?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function UsuarioDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}