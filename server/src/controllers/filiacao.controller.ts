import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";
import { bodyToUpperCase } from "./utils/conversores";

export default class FiliacaoController {

    filiacaoRepository: any;

    constructor(filiacaoRepository: any) {
        this.filiacaoRepository = filiacaoRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const filiacoes = await this.filiacaoRepository.listar();
            return res.status(200).json({
                message: "Lista de Filiacoes",
                data: filiacoes
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { status, usuario_id, valor_associacao_id } = body;
            isStatusType(status)
            const filiacao = await this.filiacaoRepository.criar(status, usuario_id, valor_associacao_id)
            return res.status(201).json({
                message: "Filiacao criada com sucesso",
                data: filiacao
            });
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async alterarStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body; // novo status

            // Validação do status
            isStatusType(status);

            const update = await this.filiacaoRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Filicao não encontrado" });
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