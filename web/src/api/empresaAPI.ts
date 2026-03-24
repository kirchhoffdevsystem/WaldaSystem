import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.empresa

export default class EmpresaAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}