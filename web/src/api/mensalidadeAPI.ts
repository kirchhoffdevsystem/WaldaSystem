import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.mensalidade

export default class MensalidadeAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}