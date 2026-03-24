import { Request, Response } from "express";
import { bodyToUpperCase } from "./utils/conversores";
/* import { isStatusType } from "./utils/validacaoCampos"; */

export default class FuncionarioSindicatoController {

    funcionarioSindicatoRepository: any;

    constructor(funcionarioSindicatoRepository: any) {
        this.funcionarioSindicatoRepository = funcionarioSindicatoRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const funcionarios = await this.funcionarioSindicatoRepository.listar();
            return res.status(200).json({
                message: "Lista de Funcionarios do Sindicato",
                data: funcionarios
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { funcao, usuario_id, empresa_id } = body;
            /* isStatusType(status) */
            const funcionario = await this.funcionarioSindicatoRepository.criar(funcao, usuario_id, empresa_id)
            return res.status(201).json({
                message: "Funcionario criado com sucesso",
                data: funcionario
            });
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    /* inativar, ativar */

}