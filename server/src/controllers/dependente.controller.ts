import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";
import { bodyToUpperCase } from "./utils/conversores";

export default class DependenteController {

    dependenteRepository: any;

    constructor(dependenteRepository: any) {
        this.dependenteRepository = dependenteRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const dependentes = await this.dependenteRepository.listar();
            return res.status(200).json({
                message: "Lista de dependentes",
                data: dependentes
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { nome, dt_nascimento, status, valor, usuario_id } = body;
            isStatusType(status)
            const dependente = await this.dependenteRepository.criar(nome, dt_nascimento, status, valor, usuario_id)
            isStatusType(status)

            return res.status(201).json({
                message: "Dependente criado com sucesso",
                data: dependente
            });
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async alterarStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;

            // Validação do status
            isStatusType(status);

            const update = await this.dependenteRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Dependente não encontrado" });
            }

            return res.status(200).json({
                message: "Status atualizado com sucesso",
                data: update
            });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

}