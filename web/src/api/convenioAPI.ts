import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.convenio

export default class ConvenioAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}