import { Request, Response } from "express";
import { isPagtoType } from "./utils/validacaoCampos";

export default class MensalidadeController {

    mensalidadeRepository: any;

    constructor(mensalidadeRepository: any) {
        this.mensalidadeRepository = mensalidadeRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const mensalidades = await this.mensalidadeRepository.listar();
            return res.status(200).json({
                message: "Lista das Mensalidades",
                data: mensalidades
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const {
                dt_criacao,
                mes,
                tipo_associacao,
                qtd_dependente,
                valor_total_dependente,
                valor_descontos,
                valor_acrescimos,
                valor_total,
                pgto_status,
                obs,
                usuario_id,
                empresa_id
            } = req.body;

            const mensalidade = await this.mensalidadeRepository.criar(
                dt_criacao,
                mes,
                tipo_associacao,
                qtd_dependente,
                valor_total_dependente,
                valor_descontos,
                valor_acrescimos,
                valor_total,
                pgto_status,
                obs,
                usuario_id,
                empresa_id
            )
            return res.status(201).json({
                message: "Mensalidade criado com sucesso",
                data: mensalidade
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
            isPagtoType(status);

            const update = await this.mensalidadeRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Mensalidade não encontrado" });
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