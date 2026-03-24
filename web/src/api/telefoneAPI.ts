import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.telefone

export default class TelefoneAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}