import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";
import { bodyToUpperCase } from "./utils/conversores";

export default class EmpresaController {

    empresaRepository: any;

    constructor(empresaRepository: any) {
        this.empresaRepository = empresaRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const empresas = await this.empresaRepository.listar();
            return res.status(200).json({
                message: "Lista de empresas",
                data: empresas
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { nome, cnpj, nome_contato, setor_contato, status, endereco_id } = body;
            isStatusType(status)
            const empresa = await this.empresaRepository.criar(nome, cnpj, nome_contato, setor_contato, status, endereco_id)
            return res.status(201).json({
                message: "Empresa criada com sucesso",
                data: empresa
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

            const update = await this.empresaRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Empresa não encontrada" });
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