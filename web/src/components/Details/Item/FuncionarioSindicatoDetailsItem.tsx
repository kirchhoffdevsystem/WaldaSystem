import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { FuncionarioSindicato } from '../../../types/types_db';

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
    const funcionario: FuncionarioSindicato = {
        id: 1,
        funcao: 'string',
        usuario_id: 1,
        empresa_id: 1,
        criacao_id: 1,
        modificacao_id: 1,
    }
    const info = `
                id: ${funcionario.id},
                funcao: ${funcionario.funcao},
                usuario_id: ${funcionario.usuario_id},
                empresa_id: ${funcionario.empresa_id},
                criacao_id: ${funcionario.criacao_id},
                modificacao_id: ${funcionario.modificacao_id},
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do funcionário?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function FuncionarioSindicatoDetailsItem_Component({ empresa, valor }: Props) {
    return (
        <DetailsItem label='Detalhes do Convenio'
            children={<Conteudo empresa={empresa} valor={valor} />}
            onClick={() => openInfo()} />
    )
}