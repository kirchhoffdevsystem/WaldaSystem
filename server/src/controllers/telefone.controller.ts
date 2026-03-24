import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";

export default class TelefoneController {

    telefoneRepository: any;

    constructor(telefoneRepository: any) {
        this.telefoneRepository = telefoneRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const telefones = await this.telefoneRepository.listar();
            return res.status(200).json({
                message: "Lista de telefones",
                data: telefones
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const { numero, tipo, status, usuario_id, empresa_id } = req.body;
            isStatusType(status)
            const telefone = await this.telefoneRepository.criar(numero, tipo, status, usuario_id, empresa_id)
            return res.status(201).json({
                message: "Telefone criado com sucesso",
                data: telefone
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

            const update = await this.telefoneRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Telefone não encontrado" });
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