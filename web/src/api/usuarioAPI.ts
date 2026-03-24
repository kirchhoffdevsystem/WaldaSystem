import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.usuario

export default class UsuarioAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(){
        isStatusType(status)
    }
}