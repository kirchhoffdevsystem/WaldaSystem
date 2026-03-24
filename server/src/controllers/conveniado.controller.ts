import { Request, Response } from "express";
import { stringToBoolean, bodyToUpperCase } from "./utils/conversores";
import { isStatusType } from "./utils/validacaoCampos";

export default class ConveniadoController {

    conveniadoRepository: any;

    constructor(conveniadoRepository: any) {
        this.conveniadoRepository = conveniadoRepository;
    }

    async listar(req: Request, res: Response) {
        try {
            const conveniados = await this.conveniadoRepository.listar();
            return res.status(200).json({
                message: "Lista de conveniados",
                data: conveniados
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { nome, filiado, status, filiacao_id, criacao_id, modificacao_id, empresa_id } = body;

            // Validação
            isStatusType(status);

            const conveniado = await this.conveniadoRepository.criar({
                nome,
                filiado: stringToBoolean(filiado),
                status,
                filiacao_id,
                criacao_id,
                modificacao_id,
                empresa_id
            });

            return res.status(201).json({
                message: "Conveniado criado com sucesso",
                data: conveniado
            });

        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async alterarStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body; // novo status

            // Validação do status
            isStatusType(status);

            const update = await this.conveniadoRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Conveniado não encontrado" });
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
