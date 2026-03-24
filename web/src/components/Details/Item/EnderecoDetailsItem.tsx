import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Endereco } from '../../../types/types_db';

type Props = {
    rua: string;
    bairro: string;
    numero: number | string;
    estado: string;
}

function Conteudo({ rua, bairro, numero, estado }: Props) {
    return (
        <div className={cssItem.itemInfo}>
            <p><small className={cssItem.itemNegrito}>Endereço</small>: {rua}, {bairro}, num: {numero} - {estado}</p>
        </div>
    )
}

function openInfo() {

    const endereco: Endereco = {
        id: 2,
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        estado: 'string',
        pais: 'string',
        complemento: 'string',
        numero: 'string',
        status: 'string',
        criacao_id: 2,
        modificacao_id: 2
    }

    const info = `  
                id: ${endereco.id},
                cep: ${endereco.cep},
                rua: ${endereco.rua},
                bairro: ${endereco.bairro},
                estado: ${endereco.estado},
                pais: ${endereco.pais},
                complemento: ${endereco.complemento},
                numero: ${endereco.numero},
                status: ${endereco.status},
                criacao_id: ${endereco.criacao_id},
                modificacao_id: ${endereco.modificacao_id}
                `
    const resposta = confirm(info + "\nDeseja ir para as informações do endereço?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function EnderecoDetailsItem_Component({ rua, bairro, numero, estado }: Props) {
    return (
        <DetailsItem label='Endereço do Conveniado'
            children={<Conteudo rua={rua} bairro={bairro} numero={numero} estado={estado} />}
            onClick={() => openInfo()} />
    )
}