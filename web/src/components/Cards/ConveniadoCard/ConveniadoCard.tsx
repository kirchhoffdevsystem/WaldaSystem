import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../../routes/nomeRotas";
import type { Conveniado } from "../../../types/types_db";
import Card, { type ItemCard } from "../Card";

type Props = {
    item: Conveniado
}

const empresa = {
    empresa: 'Empresa Teste',
    status: 'ativo'
}

function Conteudo({ item }: Props) {
    return (
        <>
            {item.filiado && (
                <>
                    <p>Filiado</p>
                </>
            )}
        </>
    )
}

export default function ConveniadoCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.nome,
        status: item.status,
        empresa: empresa.empresa,
        empresa_status: empresa.status,
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.conveniados}/${item.id}`)} />
    )
}