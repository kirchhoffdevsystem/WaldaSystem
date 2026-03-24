import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.dependente

export default class DependenteAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}