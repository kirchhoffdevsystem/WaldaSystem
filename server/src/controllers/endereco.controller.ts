import { Request, Response } from "express";
import { isStatusType } from "./utils/validacaoCampos";
import { bodyToUpperCase } from "./utils/conversores";

export default class EnderecoController {

    enderecoRepository: any;

    constructor(enderecoRepository: any) {
        this.enderecoRepository = enderecoRepository
    }

    async listar(req: Request, res: Response) {
        try {
            const enderecos = await this.enderecoRepository.listar();
            return res.status(200).json({
                message: "Lista de enderecos",
                data: enderecos
            });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const body = bodyToUpperCase(req.body);
            const { cep, rua, bairro, pais, complemento, numero, status } = body;
            isStatusType(status)
            const endereco = await this.enderecoRepository.criar(cep, rua, bairro, pais, complemento, numero, status)
            return res.status(201).json({
                message: "Endereco criado com sucesso",
                data: endereco
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

            const update = await this.enderecoRepository.atualizarStatus(
                Number(id),
                status
            );

            if (!update) {
                return res.status(404).json({ message: "Endereco não encontrado" });
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