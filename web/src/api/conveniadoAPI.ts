import { linksApi } from "."
import { isStatusType } from "../utils/validacaoCampos"

const api = linksApi.conveniado

export default class ConveniadoAPI {
    async listar() {
        const response = await fetch(api)
        return response.json()
    }

    async criar(nome: string, filiado: string, status: string, filiacao_id: number, empresa_id: number){
        isStatusType(status)
    }
}