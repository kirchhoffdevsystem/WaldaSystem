import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.filiacao

export default class FiliacaoAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}