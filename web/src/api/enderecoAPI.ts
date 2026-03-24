import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.endereco

export default class EnderecoAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}