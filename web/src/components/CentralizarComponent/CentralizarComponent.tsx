import css from "./centralizarcomponent.module.css"

interface Props {
  children: React.ReactNode; // O tipo "ReactNode" permite que qualquer tipo de conteúdo React seja passado como filho, incluindo outros componentes
}

export default function CentralizarComponente_Component({children} : Props){
    return (
        <div className={css.divCentralizadora}>
            {children}
        </div>
    )
}