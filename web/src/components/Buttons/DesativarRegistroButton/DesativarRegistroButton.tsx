import { useState } from "react";
import DesativarRegistroModal from "../../Modals/DesativarRegistro/DestivarRegistroModal";
import css from './css.module.css'

type Props = {
    texto: string
}

export default function DesativarRegistroButton({ texto }: Props) {
    const [modalAberto, setModalAberto] = useState<boolean>(false);

    function abrirModal() {
        setModalAberto(true);
    }

    function fecharModal() {
        setModalAberto(false);
    }

    function confirmar() {
        console.log("Confirmado");
        fecharModal();
    }

    return (
        <>
            <button className={css.button} onClick={abrirModal}>
                Desativar {texto}
            </button>

            <DesativarRegistroModal
                texto={texto}
                aberto={modalAberto}
                onConfirmar={confirmar}
                onCancelar={fecharModal}
            />
        </>
    );
}