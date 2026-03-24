import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.funcionario_sindicato

export default class FuncionarioSindicatoAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}