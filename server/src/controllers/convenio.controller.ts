import { Request, Response } from "express";
import { bodyToUpperCase, stringToBoolean } from "./utils/conversores";
import { isStatusType } from "./utils/validacaoCampos";

export default class ConvenioController {

    convenioRepository: any;

    constructor(convenioRepository: any) {
        this.convenioRepository = convenioRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const convenios = await this.convenioRepository.listar();
            return res.status(200).json({
                message: "Lista de convenios",
                data: convenios
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { valor, status, autonomo, empresa_id } = body;
            isStatusType(status)

            const convenio = await this.convenioRepository.criar({
                valor: valor,
                status: status,
                autonomo: stringToBoolean(autonomo),
                empresa_id: empresa_id
            })
            return res.status(201).json({
                message: "Convenio criado com sucesso",
                data: convenio
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

            const update = await this.convenioRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Convenio não encontrado" });
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